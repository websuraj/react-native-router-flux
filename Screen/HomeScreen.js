import React from 'react';
import {ScrollView, StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends React.Component{
    render() {
        return (
          <ScrollView style={styles.container}>
           <Text>Home Screen us</Text>
          </ScrollView>
        );
      }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
  });
  