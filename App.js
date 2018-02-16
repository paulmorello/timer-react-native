import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// File Imports
import Counter from './Counter';

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      isCounting: true
    }
  }

  render() {
    const { isCounting } = this.state;

    return (
      <View style={styles.container}>
        <Counter color={'lightblue'} size={100} isCounting={isCounting} />
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
