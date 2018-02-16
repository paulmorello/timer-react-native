import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// File Imports
import StopBtn from './StopBtn';
import ResetBtn from './ResetBtn';

class Counter extends Component {

  state = {
    count: 0
  }

  componentDidMount() {
    // Increasing the count by one each second
    setInterval( () => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  stopCounting() {
    // check if counting to stop counter
    if (this.state.isCounting) {
      this.setState({ isCounting: false })
    } else {
      this.setState({ isCounting: true })
    }
  }

  render() {
    const { count } = this.state;
    const { color, size, isCounting } = this.props;

    if (isCounting) {
      return (
        <View style={styles.container}>
          <Text style={{ color: color, fontSize: size }}>
            {count}
          </Text>
          <StopBtn />
          <ResetBtn />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={{ color: color, fontSize: size }}>
            {0}
          </Text>
          <StopBtn />
          <ResetBtn />
        </View>
      )
    }
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

export default Counter;
