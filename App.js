import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// File Imports
import Counter from './Counter';

export default class App extends React.Component {

  constructor() {
    super();

    this.startCounting = this.startCounting.bind(this);

    this.state = {
      isCounting: false
    }
  }

  startCounting() {
    // check if counting to stop and start counter
    if (this.state.isCounting) {
      this.setState({ isCounting: false })
    } else {
      this.setState({ isCounting: true })
    }
    console.log(this.state.isCounting);
  }

  render() {
    const { isCounting } = this.state;

    return (
      <View style={styles.container}>
        <Counter
          color={'lightblue'}
          size={100}
          isCounting={isCounting}
          startCounting={this.startCounting} />
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
