import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { TabNavigator } from 'react-navigation';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';

import SettingsScreen from './SettingsScreen'
import NotificationsScreen from './NotificationsScreen'

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='md-menu' onPress={()=>this.props.navigation.navigate('DrawerOpen')} />
            </Button>
          </Left>
        </Header>
        <Content contentContainerStyle= {{
          flex: 1,
          alignItems: 'center',
          justifyContent : 'center',
        }}>
          <Text> Home Screen </Text>
        </Content>
      </Container>
    );
  }
}

const HomeScreenTabNav = TabNavigator (
  {
    Home: { screen : HomeScreen },
    Notifications: { screen : NotificationsScreen },
  },
  {
    animationEnabled: true
  }
)

export default HomeScreenTabNav;
