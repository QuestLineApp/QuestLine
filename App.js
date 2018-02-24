import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const AppNavigator = StackNavigator ({
  LoginScreen: { screen : LoginScreen },
  HomeScreen: { screen : HomeScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
