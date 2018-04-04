//https://www.flaticon.com/free-icon/home_263115#term=home&page=1&position=1
import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

import { TabNavigator } from 'react-navigation';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon, Button, Container, Body, Header, Content, Left } from 'native-base';

import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';
import NotificationsScreen from './NotificationsScreen';
import LocationScreen from '../Screens/gps';
import QuestCreateScreen from '../Screens/QuestCreateScreen';

import { MapView } from 'expo';

class HomeScreen extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../assets/homeIcon.png')}
             style={{height:24, width:24}} />
    )
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


        <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
      />

      </Container>
    );
  }const
}

const CustomDrawerContent = (props) => (
  <Container>
    <Header style = {{ height:200, backgroundColor:'#3685B5'}}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('../assets/QuestMarker.jpg')}
        />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)

const HomeDrawerNav = DrawerNavigator ({
  Home: { screen : HomeScreen },
  Location: { screen : LocationScreen },
  Settings: { screen : SettingsScreen },
  CreateQuest: { screen: QuestCreateScreen},
  Profile: { screen : ProfileScreen },
},{
  initialRouteName : 'Home',
  contentComponent : CustomDrawerContent,
  drawerOpenRoutine : 'DrawerOpen',
  drawerCloseRoutine : 'DrawerClose',
  drawerToggleRoutine : 'DrawerToggle',
});


const HomeScreenTabNav = TabNavigator (
  {
    Home: { screen : HomeScreen },
    Notifications: { screen : NotificationsScreen },
  },
  {
    animationEnabled: true
  }
)

styles = StyleSheet.create({
  drawerImage:{
    height:150,
    width:150,
    borderRadius: 75
  }
});

export default HomeDrawerNav;
