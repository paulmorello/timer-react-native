import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// File Imports
import Counter from './Counter';
import StopBtn from './StopBtn';

export default class App extends React.Component {

  constructor() {
    super();

    this.handler = this.handler.bind(this);

    this.state = {
      isCounting: true
    }
  }

  handler() {
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
