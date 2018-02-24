import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

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

export default LoginScreen;
