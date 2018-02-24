import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';

class LoginScreen extends Component {
  render() {
    return (
      <View>
        <Text>Welcome to Questline</Text>
        <Text> Please Login </Text>
        <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Login"/>
      </View>
    );
  }
}

const LoginScreenStackNav = StackNavigator({
  LoginScreen: { screen : LoginScreen },
  HomeScreen: { screen : HomeScreen },
});

export default LoginScreenStackNav;
