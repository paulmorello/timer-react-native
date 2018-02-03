import React, { Component } from 'react'
import { StyleSheet, Button, Text, View, TouchableHighlight } from 'react-native'
import { FloatingAction } from 'react-native-floating-action';

class StopBtn extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log('clicked');
  }

  render() {

    return (
      <View>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit}
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
    padding: 20,
    width: 300,
  },
  text: {
    color: 'white',
    fontSize: 25,
  }
});

export default StopBtn;
