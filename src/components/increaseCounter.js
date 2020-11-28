import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {increaseCounter} from '../actions/counterAction';
class IncreaseCounter extends Component {
  render() {
    return (
      <View style={{marginTop:230}}>
        <TouchableOpacity
          style={{backgroundColor: '#F0BD6E'}}
          onPress={() => {
            this.props.dispatch(increaseCounter());
          }}>
          <Text style={{fontSize: 24}}> +1 </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {action: bindActionCreators(increaseCounter, dispatch)};

}

export default connect(mapDispatchToProps)(IncreaseCounter);