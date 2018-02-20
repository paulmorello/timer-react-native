import React, { Component } from 'react'
import { StyleSheet, Button, Text, View, TouchableHighlight } from 'react-native'
import { FloatingAction } from 'react-native-floating-action';

class StartBtn extends Component {

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
          <Text style={[styles.text]}> START </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 18,
    width: 100,
  },
  text: {
    color: 'white',
    fontSize: 15,
  }
});

export default StartBtn;
