import React from 'react';
import { ScrollView,StyleSheet, Text, View,Button } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
export default class LoginScreen extends React.Component{
    render() {
        return (
          <ScrollView style={styles.container}>
           <Text>LoginScreen us</Text>
           <Button
    title="login"
    onPress={() => Actions.push('HomeScreen')}
    style={styles.container}
  />
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
  