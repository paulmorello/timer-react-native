import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// File Imports
import Counter from './Counter';
import StopBtn from './StopBtn';
import ResetBtn from './ResetBtn';

export default class App extends React.Component {

  constructor() {
    super();

    // bind the instance of this to the this.handler method
    this.handler = this.handler.bind(this);

    this.state = {
      isCounting: true
    }
  }

  handler() {
    // check if counting to stop counter
    if (this.state.isCounting) {
      this.setState({ isCounting: false })
    } else {
      this.setState({ isCounting: true })
    }
  }

  render() {
    const { isCounting } = this.state;

    return (
      <View style={styles.container}>
        <Counter color={'lightblue'} size={100} isCounting={isCounting} />
        <Counter color={'white'} size={110} isCounting={isCounting} />
        <Counter color={'mistyrose'} size={120} isCounting={isCounting} />
        <StopBtn isCounting={isCounting} stopCounting={this.handler} />
        <ResetBtn isCounting={isCounting} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#227EFF',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
