import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';
import Expo from 'expo'

import HomeScreen from './HomeScreen';

class LoginScreen extends Component {
  signInWithGoogleAsync = async () => {
    try {
      const result = await Expo.Google.logInAsync({
				behavior: 'standalone',
        androidClientId: ' 891799707034-trepglhtmhjfoms1v7ga8nasj543fcn2.apps.googleusercontent.com ',
        iosClientId: process.env.GOOGLE_IOS_CLIENT_ID,
        scopes: ['profile'],
      })

      if (result.type === 'success') {
        return result
      }
      return { cancelled: true }
    } catch (e) {
      return { error: e }
    }
  }


  onLoginPress = async () => {
    const result = await this.signInWithGoogleAsync()
    // if there is no result.error or result.cancelled, the user is logged in
    // do something with the result
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle= {{
          flex: 1,
          alignItems: 'center',
          justifyContent : 'center',
        }}>
          <Text>Welcome to Questline</Text>
          <Text> Please Login </Text>
          <Button block light onPress={() => this.props.navigation.navigate('HomeScreen')}>
            <Text> Google Login </Text>
          </Button>
          <Button onPress={this.onLoginPress}><Text>Login</Text></Button>
        </Content>

      </Container>
    );
  }
}

const LoginScreenStackNav = StackNavigator({
  LoginScreen: { screen : LoginScreen },
  HomeScreen: { screen : HomeScreen },
});

export default LoginScreenStackNav;
