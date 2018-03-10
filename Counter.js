import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// File Imports
import StartBtn from './StartBtn';
import StopBtn from './StopBtn';
import ResetBtn from './ResetBtn';

class Counter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { color, size, isCounting, count, message } = this.props;

    return (
      <View style={styles.container}>
        <Text style={{ color: color, fontSize: size }}>
          {count}
        </Text>
        <View style={styles.buttons}>
          <StartBtn startCounting={ this.props.startCounting } />
          <StopBtn />
          <ResetBtn resetCounter={ this.props.resetCounter }/>
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#227EFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  message: {
    color: '#227EFF',
    fontSize: 18,
    marginTop: 40,
    padding: 20,
    backgroundColor: 'whitesmoke',
  }
});

export default Counter;
