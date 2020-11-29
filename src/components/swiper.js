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
    console.log(list.length)
    if(typeof list !== 'string') {
        return (
         <View style={{width:width,height:height}}>
           {list.slice(counter, counter + 5).map((card,index) => {
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
         <View style={{width:width,height:height,alignItems:'center',justifyContent:'center'}}>
           <Text>{list}</Text>
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
