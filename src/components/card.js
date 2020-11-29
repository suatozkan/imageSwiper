import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';

const { width, height } = Dimensions.get("window");

export default class Card extends Component {

  componentWillMount() {

    this.pan = new Animated.ValueXY()
    this.cardPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {dx:this.pan.x, dy:this.pan.y},
      ]),
      onPanResponderRelease: (e, {dx}) => {
        const absDx = Math.abs(dx)
        const direction = absDx / dx

        if (absDx > 120) {
          Animated.decay(this.pan, {
            velocity: {x:3 * direction, y:0},
            deceleration: 0.995,
          }).start(this.props.onSwipe)
        }
    /*  optional feature; if showing previousCard
        else if(dx < -120) {
          Animated.decay(this.pan, {
            velocity: {x:3 * direction, y:0},
            deceleration: 0.995,
          }).start(this.props.onSwipeLeft)
        }
  */      else {
          Animated.spring(this.pan, {
            toValue: {x:0, y:0},
            friction: 4.5,
          }).start()
        }
      },
    })
  }



render() {

  const rotateCard = this.pan.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ['10deg', '0deg', '-10deg'],
  })
  const animatedStyle = {
    transform: [
      {translateX: this.pan.x},
      {translateY: this.pan.y},
      {rotate: rotateCard},
    ],
  }

// customizing image position and size by imageInfo prop from integration-config.json
// imageUrl is shown in the Text component below because of ui and data verification..
  return (
    <Animated.View
      {...this.cardPanResponder.panHandlers}
      style={[{
        position: 'absolute',
        width: eval(this.props.imageInfo.imageWidth),
        height: eval(this.props.imageInfo.imageHeight),
        top: eval(this.props.imageInfo.imageTop),
        overflow: 'hidden',
        backgroundColor: 'white',
        left: eval(this.props.imageInfo.imageLeft),
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 8,
      }, animatedStyle]}>
      <Image
        style={{flex:1}}
        source={{uri: this.props.card}}
      />
      <Text>{this.props.card}</Text>

    </Animated.View>
  )
}
}
