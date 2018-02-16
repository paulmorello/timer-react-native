import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// File Imports
import Counter from './Counter';

export default class App extends React.Component {

  constructor() {
    super();

    this.stopCounting = this.stopCounting.bind(this);

    this.state = {
      isCounting: true
    }
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
    const { isCounting } = this.state;

    return (
      <View style={styles.container}>
        <Counter
          color={'lightblue'}
          size={100}
          isCounting={isCounting}
          stopCounting={this.stopCounting} />
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
