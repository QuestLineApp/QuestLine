import React, { Component } from 'react';
import { AsyncStorage, View, Text, StyleSheet,ImageBackground} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon, Container ,Button,Header, Content, Left } from 'native-base';
import { LinearGradient } from 'expo';
import Expo from 'expo'

import HomeScreen from './HomeScreen';

class LoginScreen extends Component {
  constructor() {
    super()
    this.state = {
      failText: '',
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

  async loadUser() {
    let value = await AsyncStorage.getItem(user.id);
    if(value != null) {
      user = JSON.parse(value);
      console.log('loaded user: ' + user.id);
      console.log(user);
    }
    else {
      console.log('set new user: ' + user.id);
      user.stats = {
        experience: 0,
        totalCompleted: 0,
        physical: 0,
        cultural: 0,
        academic: 0,
        other: 0,
      }
      AsyncStorage.setItem(user.id, JSON.stringify(user));
    }
  }


  onLoginPress = async () => {
    const result = await this.signInWithGoogleAsync()

    if(result.type === 'success'){
      user = result.user;
      console.log("\n---------------- LOGIN ----------------\n" , user);
      this.setState({failText: ''})
      this.forceUpdate(); // make sure the text changes back
      this.loadUser(user.id);
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
      "photoUrl": "https://openclipart.org/image/2400px/svg_to_png/261876/Faceless-Man-Avatar.png",
    };
    console.log("\n-------------- DEV LOGIN --------------\n" , user);
    this.loadUser(user.id);
    this.props.navigation.navigate('HomeScreen');
    AsyncStorage.clear();

  }

  render() {
    return (
      <Container>
      <ImageBackground source={require('../assets/QuestMarker.jpg')}
      style={styles.backgroundImage}>
      <LinearGradient
       colors={['rgb(255,255,255)','rgba(36,106,115,0.9)','rgb(255,255,255)' ]}
       style={{
         position: 'absolute',
         left: 0,
         right: 0,
         top: 0,
         height: 800,
       }}
     />
      <Content contentContainerStyle= {{
        flex: 1,
          alignItems: 'center',
          justifyContent : 'center',
      }}>
      <Text style={styles.welcomeDivs}>Welcome to Questline</Text>
      <Text style={styles.loginDiv}> Please Login:</Text>
      <Button
         info
         block
         light
         bordered
         style={styles.buttonStyle}
         onPress={this.onLoginPress}
         color="red"
       ><Text style={styles.loginDiv}>Google Login</Text></Button>

      <Button
        bordered
        block
        light
        style={styles.buttonStyle}
        onPress={this.onDeveloperPress}>

      <Text style={styles.loginDiv}>Skip to Home</Text></Button>

      <Text >{this.state.failText}</Text>

      </Content>
      </ImageBackground>
      </Container>
    );
  }
}

const LoginScreenStackNav = StackNavigator({
  LoginScreen: { screen : LoginScreen,
        navigationOptions: {
          header: null,
        }},
  HomeScreen: { screen : HomeScreen,
        navigationOptions: {
          header: null,
        } },
});

const styles=require('../styles/StyleSheet');


export default LoginScreenStackNav;
