import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// File Imports
import Counter from './Counter';

export default class App extends React.Component {

  constructor() {
    super();

    this.startCounting = this.startCounting.bind(this);

    this.state = {
      isCounting: false,
      count: 0
    }
  }

  componentDidMount() {
    this.countTimer = setInterval( () => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  startCounting() {
    // check if counting to stop and start counter
    if (this.state.isCounting) {
      this.setState({ isCounting: false })
    } else {
      this.setState({ isCounting: true })
    }
  }

  resetCounter() {
    console.log(this.countTimer);
    clearInterval(this.countTimer);

    this.setState({ count: 0 })
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
