import React, { Component } from 'react'
import { StyleSheet, Button, Text, View, TouchableHighlight } from 'react-native'
import { FloatingAction } from 'react-native-floating-action';

class StopBtn extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View>
        <TouchableHighlight
          style={styles.button}
          onPress={ this.props.stopCounting }
        >
          <Text style={[styles.text]}> STOP </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#BB254F',
    padding: 18,
    width: 100,
  },
  text: {
    color: 'white',
    fontSize: 15,
  }
});

export default StopBtn;
