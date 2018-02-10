import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Counter extends Component {
  
  state = {
    count: 0
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  render() {
    const { count } = this.state;
    const { color, size, isCounting } = this.props;

    if (isCounting) {
      return (
        <Text style={{ color: color, fontSize: size }}>
          {count}
        </Text>
      )
    } else {
      return (
        <Text style={{ color: color, fontSize: size }}>
          {0}
        </Text>
      )
    }
  }
}

export default Counter;
