import React, { Component } from 'react'
import { StyleSheet, Button, Switch, View } from 'react-native'
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
      <FloatingAction
      onPressItem={
        () => {
          console.log('selected button');
        }
      } />
    )
  }
}

const styles = StyleSheet.create({
  button: {
    textAlign: 'right',
  }
});

export default StopBtn;
