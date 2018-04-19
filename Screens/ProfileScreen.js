//https://www.flaticon.com/free-icon/settings_263074
import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Icon, Button, Container, Header, Content, Left } from 'native-base';
import StatsScreen from './StatsScreen';


class ProfileScreen extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../assets/profileIcon.png')}
      style={{height:24, width:24}} />
    )
  }
  onStatsPress = () => {
    this.props.navigation.navigate('StatsScreen')
  }
  render() {
    return (
      <Container>
      <Header style={{backgroundColor:'#246A73'}}>
      <Left>
      <Button transparent>
      <Icon name='menu' onPress={()=>this.props.navigation.navigate('DrawerOpen')} />
      </Button>
      </Left>
      </Header>
      <Content contentContainerStyle={{
        flex : 1,
          alignItems : 'center',
          justifyContent : 'center'
      }}>
      <Image source={{uri: user.photoUrl}} style={{width: 75, height: 100}} />
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
      <Button block light onPress={this.onStatsPress}><Text>View stats</Text></Button>
      </Content>
      </Container>
    );
  }
}
const navigationOptions = {header: null };


const profScreenStackNav = StackNavigator({
  ProfileScreen: { screen : ProfileScreen,
        navigationOptions: {
          header: null,
        } },
  StatsScreen: { screen : StatsScreen,
    navigationOptions: {
      header: null,
    } },
});

export default profScreenStackNav;
