import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// File Imports
import StartBtn from './StartBtn';
import StopBtn from './StopBtn';
import ResetBtn from './ResetBtn';

class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  componentDidMount() {
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.isCounting !== this.props.isCounting) {
      return true
    } else {
      return false
    }
  }

  componentWillReceiveProps(nextProps) {

    if (!nextProps.isCounting) {
      this.setState({ count: this.state.count });
    } else {
      this,countTimer = setInterval( () => {
        this.setState({ count: this.state.count + 1 })
      }, 1000)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);

    if (!prevProps.isCounting) {
      clearInterval(this.countTimer)
    } else {

    }
  }

  startCounting() {
    // Increasing the count by one each second
    this.countTimer = setInterval( () => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  render() {
    const { count } = this.state;
    const { color, size, isCounting } = this.props;

    return (
      <View style={styles.container}>
        <Text style={{ color: color, fontSize: size }}>
          {count}
        </Text>
        <View style={styles.buttons}>
          <StartBtn />
          <StopBtn stopCounting={this.props.stopCounting} />
          <ResetBtn />
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
  }
});

export default Counter;
