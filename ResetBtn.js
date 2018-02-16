import React, { Component } from 'react'
import { StyleSheet, Button, Text, View, TouchableHighlight } from 'react-native'
import { FloatingAction } from 'react-native-floating-action';

class ResetBtn extends Component {

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
          <Text style={[styles.text]}> RESET </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    padding: 18,
    width: 300,
  },
  text: {
    color: 'white',
    fontSize: 25,
  }
});

export default ResetBtn;
