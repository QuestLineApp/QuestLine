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
import QuestListScreen from './QuestListScreen';
import StatsScreen from './StatsScreen';
import { MapView } from 'expo';
//dummy data to test quests
//real one could have list like this filled in with function that finds all
//quests within the map deltas
const questData=[
  {
    key:1,
    title: "Music",
    description: "Lets listen to some music!",
    latitude: 41.7398982169205,
    longitude: -111.81636841058003,
    type: 3,
    pos: 45,
    value: 4
  },
  {
    key:2,
    title: "Hike",
    description: "Lets go on a hike!",
    latitude: 41.7408982169205,
    longitude: -111.81236841058003,
    type: 1,
    pos: 46,
    value: 7
  },
  {
    key:3,
    title: "Dinner",
    description: "Lets have some dinner!",
    latitude: 41.7394982169205,
    longitude: -111.81436841058003,
    type: 2,
    pos: 41,
    value: 8
  },
  {
    key:4,
    title: "Education",
    description: "Lets go learn something!",
    latitude: 41.7418982169205,
    longitude: -111.81436841058003,
    type: 4,
    pos: 41,
    value: 8
  },
  {
    key:5,
    title: "Education",
    description: "Lets go learn something!",
    latitude: 41.7538982169205,
    longitude: -111.79436841058003,
    type: 2,
    pos: 41,
    value: 8
  }
]

function typeOfImage(props){

  long=-111.79436841058003
  lat=41.7535782169205
  long=props.longitude
  lat=props.latitude
  tester={latitude:lat,longitude:long}
  currpos={lat,long}
  if (props.type==2){
  return <MapView.Marker
          key={props.key}
          coordinate={tester}
          title={props.title}
          description={props.description}
          image={require('../assets/dinner.png')}
          //TODO When ready, this can be used to navigate to the quest's page
          onCalloutPress={
                  () => alert("yaaayyy")
              }
          style={{height:4, width:4}}
          >
    </MapView.Marker>
  }
  else if (props.type==1){
  return <MapView.Marker
          key={props.key}
          coordinate={tester}
          title={props.title}
          description={props.description}
          image={require('../assets/boots.png')}

          style={{height:4, width:4}}
          >
    </MapView.Marker>
  }
  else if (props.type==3){
  return <MapView.Marker
          key={props.key}
          coordinate={tester}
          title={props.title}
          description={props.description}
          image={require('../assets/music-player.png')}

          style={{height:4, width:4}}
          >
    </MapView.Marker>
  }
  else if (props.type==4){
  return <MapView.Marker
          key={props.key}
          coordinate={tester}
          title={props.title}
          description={props.description}
          image={require('../assets/bookshelf.png')}

          style={{height:4, width:4}}
          >
    </MapView.Marker>
  }
}

class HomeScreen extends Component {

  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  state = {

  //The this marks Accra
  mapRegion: { latitude: 5.8037, longitude: 0.2870, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
};
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
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: 0.1844,
          longitudeDelta: 0.0842,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
        onPanDrag={e=>console.log(e.nativeEvent)}
      >
      {questData.map(function(name){
                    const loc=name.value
                    return <View>{typeOfImage(name)}</View>;
                  })}


      </MapView>


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
  Stats: {screen: StatsScreen},
  Profile: { screen : ProfileScreen },
  ViewQuests: {screen: QuestListScreen},
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
