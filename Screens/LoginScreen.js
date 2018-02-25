import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';

import HomeScreen from './HomeScreen';

class LoginScreen extends Component {
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
            <Text> Login </Text>
          </Button>
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
