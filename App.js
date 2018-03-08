import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// File Imports
import Counter from './Counter';

export default class App extends React.Component {

  constructor() {
    super();

    this.startCounting = this.startCounting.bind(this);
    this.resetCounter = this.resetCounter.bind(this);

    this.state = {
      isCounting: false,
      count: 0,
      message: '',
    }
  }

  componentDidMount() {
    this.countTimer = setInterval( () => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  startCounting() {
    if (!this.state.isCounting) {
      this.countTimer = setInterval( () => {
        this.setState({ count: this.state.count + 1 })
      }, 1000)
      this.setState({ isCounting: true })
    } else {
      this.setState({ message: 'Press stop to stop the counter or reset to reset the counter to 0'})
    }
    console.log(this.countTimer, this.state.count);
  }

  resetCounter() {
    console.log(this.countTimer);
    clearInterval(this.countTimer);

    this.setState({
      count: 0,
      isCounting: false
     })
  }

  render() {
    const { count } = this.state;
    const { isCounting } = this.state;

    return (
      <View style={styles.container}>
        <Counter
          color={'lightblue'}
          size={100}
          isCounting={isCounting}
          count={count}
          startCounting={this.startCounting}
          resetCounter={this.resetCounter} />
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
