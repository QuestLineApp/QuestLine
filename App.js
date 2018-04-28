import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';

import LoginScreen from './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'
import SettingsScreen from './Screens/SettingsScreen'
import QuestCreateScreen from './Screens/SettingsScreen'

user = null;
challengeQuest = null;

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
