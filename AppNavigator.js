import React , { Component }from 'react'
import { Text, StyleSheet, Button } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux'; // 4.0.0-beta.28


import AboutScreen from "./Screen/AboutScreen";
import HomeScreen from "./Screen/HomeScreen";
import LoginScreen from "./Screen/LoginScreen";


export default class Routes extends Component{
     render() {
        return (
          <Router  navigationBarStyle={{ backgroundColor: '#81b71a' }}>
          <Stack>
            <Scene key="AboutScreen" hideNavBar={true} component={AboutScreen} title='about' initial = {true}  />
            <Scene key="LoginScreen" component={LoginScreen} title='LoginScreen' />    
            <Scene key="HomeScreen" component={HomeScreen} title='Home' />
          
 
          </Stack>
        </Router>
        )
      }
  }
