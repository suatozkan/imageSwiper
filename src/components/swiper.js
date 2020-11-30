import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Card from './card';
import {increaseCounter} from '../actions/counterAction';
import {decreaseCounter} from '../actions/counterAction';
import {setCounter} from '../actions/counterAction';
import  _  from 'lodash';
import configFunction from '../../configFunction.js'
import * as config from '../../integration-config.json';

//const listOfImages = configFunction() // get list of images url with asked format.
const { width, height } = Dimensions.get("window");


class Swiper extends Component {

    constructor(props) {
     super(props);
     this.state = {listOfImages:[]};
   }

  componentWillMount(){
    this.getImages()
  }

   getImages = async() => {
     let images= await configFunction()
     this.setState({listOfImages:images})
   }


    nextCard = () => {
      if(this.props.counter===this.state.listOfImages.length-1){
        this.props.dispatch(setCounter())
      }else{
        this.props.dispatch(increaseCounter())
      }
    }
/*   optional for previosCard action
     previousCard = () => {
      if(this.props.counter==0){
        this.props.dispatch(setCounter())
      }else{
        this.props.dispatch(decreaseCounter())
      }
    }
*/

  render() {

    const {counter} =this.props

     if(typeof this.state.listOfImages !== 'string') {
        return (
           <View style={{width:width,height:height}}>
               {this.state.listOfImages.map((card,index) => {
                 if (index < counter) {
                   return null;
                 } else if (index == counter) {
                   return (
                     <Card
                       key={card.imageUrl}
                       card={card.imageUrl}
                       indexCounter={counter}
                       onSwipe={this.nextCard.bind()}
                       imageInfo={config.default}
                     />
                   )
                 }
               })}
           </View>
       )
     }else{
       return (
         <View style={{width:width,height:height,alignItems:'center',justifyContent:'center'}}>
           <Text>{this.state.listOfImages}</Text>
         </View>
       )
     }

  }
}
// redux state actions
function mapStateToProps(state,dispatch) {
  return {counter: state.counterReducer,
          action: bindActionCreators(increaseCounter, dispatch),
          action: bindActionCreators(decreaseCounter, dispatch),
          action: bindActionCreators(setCounter, dispatch)};
}

export default connect(mapStateToProps)(Swiper)
