import React, { Component } from 'react'
import { StyleSheet, Button, Switch } from 'react-native'

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
      <Button
        style={styles.button}
        onPress={this.handleSubmit}
        title="Stop"
        color={'white'} />
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default StopBtn;
