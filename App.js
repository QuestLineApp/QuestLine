import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';

// import LoginScreen from './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'
import SettingsScreen from './Screens/SettingsScreen'

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNav/>
    );
  }
}

// const AppNavigator = StackNavigator ({
// });

const AppDrawerNav = DrawerNavigator ({
  // LoginScreen: { screen : LoginScreen },
  Home: { screen : HomeScreen },
  Settings: { screen : SettingsScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
