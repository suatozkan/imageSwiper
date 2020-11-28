
import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Card from './card';
import {increaseCounter} from '../actions/counterAction';
import {decreaseCounter} from '../actions/counterAction';
import {setCounter} from '../actions/counterAction';




const { width, height } = Dimensions.get("window");


export const assets = [
  'https://via.placeholder.com/800x600/BD463C',
  'https://via.placeholder.com/800x600/7A2E27',
  'https://via.placeholder.com/800x600/FA5E50',
  'https://via.placeholder.com/800x600/3B1613',
  'https://via.placeholder.com/800x600/E05548',
];


class Swiper extends Component {


    nextCard = () => {
      if(this.props.counter===assets.length-1){
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
     return (
       <View style={{width:width,height:height}}>
         {assets.slice(counter, counter + 4).reverse().map((card,index) => {
           return (
             <Card
               key={card}
               card={card}
               index={counter}
               index2={index}
               onSwipeRight={this.nextCard.bind()}
               onSwipeLeft={this.previousCard.bind()}
             />
           )
         })}
       </View>
     )
  }
}





function mapStateToProps(state,dispatch) {
  return {counter: state.counterReducer,
          action: bindActionCreators(increaseCounter, dispatch),
          action: bindActionCreators(decreaseCounter, dispatch),
          action: bindActionCreators(setCounter, dispatch)};
}

export default connect(mapStateToProps)(Swiper)
