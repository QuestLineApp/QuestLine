//https://www.flaticon.com/free-icon/home_263115#term=home&page=1&position=1
import React, { Component } from 'react';
import { Alert, Image, AsyncStorage, View, Text, StyleSheet } from 'react-native';

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
import CommunityScreen from './CommunityScreen';
import { MapView } from 'expo';

const type = Object.freeze({"Physical":1, "Cultural":2, "Academic":3, "Other":4});
const difficulty = Object.freeze(["Easy", "Medium", "Hard", "Extreme"]);

questData = []

function typeOfImage(props){

  long = -111.79436841058003
  lat = 41.7535782169205
  long = props.longitude
  lat = props.latitude
  tester = {latitude:lat,longitude:long}
  currpos = {lat,long}

  if (props.type == 1){ // physical
    return <MapView.Marker
    key = {props.key}
    coordinate = {tester}
    title = {props.title}
    description = {props.description}
    image = {require('../assets/boots.png')}
    //TODO When ready, this can be used to navigate to the quest's page
    onCalloutPress = { () => Alert.alert(props.title,props.description) }
    style = {{height:4, width:4}}
      >
      </MapView.Marker>
  }
  else if (props.type == 2){ // cultural
    return <MapView.Marker
    key = {props.key}
    coordinate = {tester}
    title = {props.title}
    description = {props.description}
    image = {require('../assets/music-player.png')}
    onCalloutPress = { () => Alert.alert(props.title,props.description) }
    style = {{height:4, width:4}}
      >
      </MapView.Marker>
  }
  else if (props.type == 3){ // academic
    return <MapView.Marker
    key = {props.key}
    coordinate = {tester}
    title = {props.title}
    description = {props.description}
    image = {require('../assets/bookshelf.png')}
    onCalloutPress = { () => Alert.alert(props.title,props.description) }
    style = {{height:4, width:4}}
      >
      </MapView.Marker>
  }
  else if (props.type == 4){ // other
    return <MapView.Marker
    key = {props.key}
    coordinate = {tester}
    title = {props.title}
    description = {props.description}
    image = {require('../assets/dinner.png')}
    onCalloutPress = { () => Alert.alert(props.title,props.description) }
    style = {{height:4, width:4}}
      >
      </MapView.Marker>
  }
}

class HomeScreen extends Component {

  loaded = false;

  constructor(props){
    super(props);
    AsyncStorage.getItem('localQuestList').then( value => {
      this.setState({'localQuestList': JSON.parse(value) });
      console.log('mounting and set: ' + JSON.stringify(this.state.localQuestList));
      let list = this.state.localQuestList.list;
      console.log("building list");
      for (let i = 0; i < list.length; ++i) {
        questData.push({
          key:i,
          title: list[i].name,
          description: list[i].description + "\nType:          " + list[i].type +
          "\nDifficulty:   " + difficulty[list[i].difficulty],
          latitude: list[i].latitude,
          longitude: list[i].longitude,
          type: type[list[i].type],
          pos: 45, // What is this for??
          value: 4 // And this???
        });
      }
      console.log(JSON.stringify(questData),'building finished');
      this.loaded = true;
      this.forceUpdate();
    });
    console.log(JSON.stringify(questData),'constructor finished');
  }

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
    mapRegion: {
      latitude: 5.8037,
        longitude: 0.2870,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    },
  };



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

  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../assets/homeIcon.png')}
      style={{height:24, width:24}} />
    )
  }
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
  Community: {screen: CommunityScreen},
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
