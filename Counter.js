import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// File Imports
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
    // Increasing the count by one each second
    let countInt = setInterval( () => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.isCounting !== this.props.isCounting) {
      return true
    } else {
      return false
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);

  }

  render() {
    const { count } = this.state;
    const { color, size, isCounting } = this.props;

    return (
      <View style={styles.container}>
        <Text style={{ color: color, fontSize: size }}>
          {count}
        </Text>
        <StopBtn stopCounting={this.props.stopCounting} />
        <ResetBtn />
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
  }
});

export default Counter;
