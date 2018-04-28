//https://www.flaticon.com/free-icon/settings_263074
import React, { Component } from 'react';
import { Image, View, Text, StyleSheet,TextInput, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';

import { Icon, Button, Container, Header, Content, Left } from 'native-base';
import StatsScreen from './StatsScreen';
import EditProfileScreen from './EditProfileScreen';


class ProfileScreen extends Component {
  showUname = async()=>{
    let myArray= await AsyncStorage.getItem('profData')
    let d =JSON.parse(myArray)
    //this.state.username=d.uname
    if (d.favq=="Physical"){
      user.questClass="Fighter"
    }
    else if (d.favq=="Cultural"){
      user.questClass="Artist"
    }
    else if (d.favq=="Academic"){
      user.questClass="Scholar"
    } 
    else if (d.favq=="Other"){
      user.questClass="Individual"
    }
    this.setState({username:d.uname})
    this.setState({description:d.desc})
    this.setState({favquest:d.favq})
    // yo=d.uname
    // return yo

    //alert(d.uname+d.desc+d.favq)
  }
  constructor(props){
    super(props)

    this.state = {
      username: '',
      description: '',
      favquest: '',
    };
    this.showUname()
    // alert(v)
    // this.state={
    //   username:v
    // };
  }

  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../assets/profileIcon.png')}
      style={{height:24, width:24}} />
    )
  }
  onStatsPress = () => {
    this.props.navigation.navigate('StatsScreen')
  }
  onEditPress = () => {
    this.props.navigation.navigate('EditProfileScreen')
  }

  showData = async()=>{
    // let myArray= await AsyncStorage.getItem('profData')
    // let d =JSON.parse(myArray)
    let myArray= await AsyncStorage.getItem('profData')
    // let myArray= await AsyncStorage.getItem('profData')

    // AsyncStorage.getItem('profData').then( value => {
    //   this.setState({'localQuestList': JSON.parse(value) });
    //   this.ree = true;
    //   this.forceUpdate();


    let d =JSON.parse(myArray)
    return d
    //alert(d.uname+d.desc+d.favq)
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
     {this.showUname}
      <Image source={{uri: user.photoUrl}} style={styles.profileImage} />
      <Text style={styles.profNameStyle}>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text style={styles.username}>Username: {this.state.username}</Text>
      <Text>Experience:{user.stats.experience}</Text>
      <Text style={styles.favquest}>Favorite Quest Type: {this.state.favquest}</Text>
      <Text style={styles.description}>Description: {this.state.description}</Text>
      <Button
         blocks
         bordered
         style={styles.statsButtonStyle}
         onPress={this.onStatsPress}
         color="red"
       ><Text style={styles.loginDiv}>View Stats</Text></Button>
       <Button
          blocks
          bordered
          style={styles.editButtonStyle}
          onPress={this.onEditPress}
          color="red"
        ><Text style={styles.loginDiv}>Edit Profile</Text></Button>
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
  //Dropped this, you need the arrow to go back on this one
  StatsScreen: { screen : StatsScreen,
    },
  EditProfileScreen: { screen : EditProfileScreen,
        },
});
const styles=require('../styles/StyleSheet');

export default profScreenStackNav;
