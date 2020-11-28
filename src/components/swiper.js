import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Card from './card';
import {increaseCounter} from '../actions/counterAction';
import {decreaseCounter} from '../actions/counterAction';
import {setCounter} from '../actions/counterAction';

import  _  from 'lodash';
import {configFunction} from '../../configFunction.js'

import * as api1 from '../../api1-response.json';
import * as api2 from '../../api2-response.json';
import * as api3 from '../../api3-response.json';
import * as config from '../../integration-config.json';


const list = configFunction()
const { width, height } = Dimensions.get("window");


class Swiper extends Component {

    nextCard = () => {
      if(this.props.counter===list.length-1){
        this.props.dispatch(setCounter())
      }else{
        this.props.dispatch(increaseCounter())
        console.log(this.props.counter)
      }
    }
    previousCard = () => {
      if(this.props.counter==0){
        this.props.dispatch(setCounter())
      }else{
        this.props.dispatch(decreaseCounter())
        console.log(this.props.counter)
      }
    }


  render() {

    const {counter} =this.props

    if(list.length>0) {

        return (
         <View style={{width:width,height:height}}>
           {list.slice(counter, counter + 10).map((card,index) => {
             console.log(list.length)
             return (
               <Card
                 key={card.imageUrl}
                 card={card.imageUrl}
                 index={counter}
                 index2={index}
                 onSwipeRight={this.nextCard.bind()}
                 onSwipeLeft={this.previousCard.bind()}
               />
             )
           })}
         </View>
       )
     }else{
       return (
         <View style={{width:width,height:height}}>
         <View>
           <Text>{list}</Text>
         </View>
         </View>
       )
     }




  }
}





function mapStateToProps(state,dispatch) {
  return {counter: state.counterReducer,
          action: bindActionCreators(increaseCounter, dispatch),
          action: bindActionCreators(decreaseCounter, dispatch),
          action: bindActionCreators(setCounter, dispatch)};
}

export default connect(mapStateToProps)(Swiper)
