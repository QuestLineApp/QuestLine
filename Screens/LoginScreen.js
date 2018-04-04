import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';
import Expo from 'expo'

import HomeScreen from './HomeScreen';

class LoginScreen extends Component {
  constructor() {
    const devPhoto = require('../assets/DevProfile.jpg');
    super()
    this.state = {
      failText: '',
      devPhoto : devPhoto,
    }
  }

  signInWithGoogleAsync = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        behavior: 'web',
        androidClientId: '891799707034-97rf6tj1vpn7o4g2qkshfj8tr92sbhvj.apps.googleusercontent.com',
        androidStandaloneAppClientId: '891799707034-97rf6tj1vpn7o4g2qkshfj8tr92sbhvj.apps.googleusercontent.com',
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

    if(result.type === 'success'){
      user = result.user;
      console.log("\n---------------- LOGIN ----------------\n" , user);
      this.setState({failText: ''})
      this.forceUpdate(); // make sure the text changes back
      this.props.navigation.navigate('HomeScreen');
    }
    else if(result.cancelled){
      this.setState({failText: 'Please login with Google'})
    }
    else console.log("login failed");
  }

  onDeveloperPress = () => {
    user =  {
      "email": undefined,
      "familyName": "Questline",
      "givenName": "Developer",
      "id": "0",
      "name": "Developer Questline",
      "photo": this.state.devPhoto,
    };
    console.log("\n-------------- DEV LOGIN --------------\n" , user);
    this.props.navigation.navigate('HomeScreen')
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
      <Button block light onPress={this.onLoginPress}><Text>Google Login</Text></Button>
      <Button block light onPress={this.onDeveloperPress}><Text>Skip to Home</Text></Button>
      <Text>{this.state.failText}</Text>

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
