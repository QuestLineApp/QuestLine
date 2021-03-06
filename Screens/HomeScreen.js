//https://www.flaticon.com/free-icon/home_263115#term=home&page=1&position=1
import React, { Component } from 'react';
import { Alert, Image, AsyncStorage, View, Text, StyleSheet } from 'react-native';

import { TabNavigator } from 'react-navigation';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon, Button, Container, Body, Header, Content, Left } from 'native-base';

import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';
import NotificationsScreen from './NotificationsScreen';
import QuestCreateScreen from '../Screens/QuestCreateScreen';
import QuestListScreen from './QuestListScreen';
import QuestCompletedScreen from './QuestCompletedScreen';
import StatsScreen from './StatsScreen';
import CommunityScreen from './CommunityScreen';
import MessagingScreen from './MessagingScreen';
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
    onCalloutPress = { () => Alert.alert(props.title,props.description, [{text: 'Complete Quest', onPress: () => completeQuest(0)}]) }
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
    //questData = [] //this needs to be reset or else if will add?
    console.disableYellowBox = true; // TODO: check this, gets rid of warnings
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
          description: list[i].description + "\nType: " + list[i].type +
          "\nDifficulty: " + difficulty[list[i].difficulty],
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

  completeQuest(idx) {

///item.type
    this.state.localQuestList.list[idx].complete = true;
    if(user.stats.experience == 'undefined')
      user.stats.experience = 0;
    else
      user.stats.experience += (this.state.localQuestList.list[idx].difficulty + 1) * 25;

    //// TODO: all if statements
    //'Physical',Cultural,Academic,Other
    //if (this.state.localQuestList.list[idx].type==)
    if(this.state.localQuestList.list[idx].type=="Physical"){
      if(user.stats.physical == 'undefined')
        user.stats.physical = 0;
      else
        user.stats.physical += (this.state.localQuestList.list[idx].difficulty + 1) * 25;}

    else if(this.state.localQuestList.list[idx].type=="Cultural"){
      if(user.stats.culture == 'undefined')
        user.stats.culture = 0;
      else
        user.stats.culture += (this.state.localQuestList.list[idx].difficulty + 1) * 25;}

    else if(this.state.localQuestList.list[idx].type=="Academic"){
      if(user.stats.academic == 'undefined')
        user.stats.academic = 0;
      else
        user.stats.academic += (this.state.localQuestList.list[idx].difficulty + 1) * 25;}

    else if(this.state.localQuestList.list[idx].type=="Other"){
      if(user.stats.other == 'undefined')
        user.stats.other = 0;
      else
        user.stats.other += (this.state.localQuestList.list[idx].difficulty + 1) * 25;}
//////// TODO: potential async storage start to saving data
      // const {totalxp,culturexp,academicxp,physicalxp}=this.state
      //
      // let expData={
      //   totalxp: uname,
      //   desc: desc,
      //   favq: favq
      // }
      // AsyncStorage.setItem('profData', JSON.stringify(profData))
/////todo
    this.saveQuestList();
    this.forceUpdate();
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
  Settings: { screen : SettingsScreen },
  'Create Quest': { screen: QuestCreateScreen},
  Stats: {screen: StatsScreen},
  Profile: { screen : ProfileScreen },
  Community: {screen: CommunityScreen},
  'View Quests': {screen: QuestListScreen},
  'View Completed Quests': {screen:QuestCompletedScreen},

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
