import React, { Component } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import Routes from './AppNavigator';

export default class App extends Component {
  render() {
    return (
    <Routes />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    backgroundColor: '#ecf0f1',
  },
});
