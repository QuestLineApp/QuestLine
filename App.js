import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
// import { DrawerNavigator } from 'react-navigation';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';

import LoginScreen from './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'
import SettingsScreen from './Screens/SettingsScreen'
import QuestCreateScreen from './Screens/SettingsScreen'

// Redux imports.  We probably won't use all of them.  These are to verify that redux is working.  
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

export default class App extends React.Component {
  render() {
    return <LoginScreen />;
  }
}

const AppNavigator = StackNavigator ({
  Login: { screen : LoginScreen },
  Home: { screen : HomeScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
