import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';
import Expo from 'expo'

import HomeScreen from './HomeScreen';

class LoginScreen extends Component {
  signInWithGoogleAsync = async () => {
    try {
			console.log("kill me");
      const result = await Expo.Google.logInAsync({
				behavior: 'system',
        androidClientId: '891799707034-97rf6tj1vpn7o4g2qkshfj8tr92sbhvj.apps.googleusercontent.com',
        iosClientId: '891799707034-n5nsf0j38io8uu5huq337ov3lk10ipfn.apps.googleusercontent.com',
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
		console.log("signed in");
		console.log(result);
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
          <Button block light onPress={this.onLoginPress}><Text>Google Login</Text></Button>
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
