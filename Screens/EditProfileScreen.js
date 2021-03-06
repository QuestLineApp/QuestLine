//https://www.flaticon.com/free-icon/settings_263074
import React, { Component } from 'react';
import { Image, View, Text, StyleSheet,TextInput,Picker, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';

import { Icon, Button, Container, Header, Content, Left } from 'native-base';
// import StatsScreen from './StatsScreen';
// import ProfileScreen from './ProfileScreen';


class EditProfileScreen extends Component {
  constructor(props){


    super(props)

    AsyncStorage.getItem('profData').then( value => {
      this.setState({'profData': JSON.parse(value) });
      console.log('mountin and set: ' + this.state.profData);
      this.ree = true;
      this.forceUpdate();
    });
    this.state = {
      type: 'academic'
    };


  }
  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../assets/profileIcon.png')}
      style={{height:24, width:24}} />
    )
  }
  onCancelPress = () => {
    this.props.navigation.navigate('ProfileScreen')
  }
  saveData = ()=>{
    const {uname,desc,favq}=this.state

    let profData={
      uname: uname,
      desc: desc,
      favq: favq
    }
    AsyncStorage.setItem('profData', JSON.stringify(profData))


    //alert(uname+desc+favq)
    this.props.navigation.navigate('ProfileScreen')

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
    alert(d.uname+d.desc+d.favq)
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
      <Image source={{uri: user.photoUrl}} style={styles.profileImage2} />
      <Text style={styles.profNameStyle}>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text style={{fontSize: 25}}>Edit your profile data</Text>
      <TextInput
      placeholder="User Name"
      style={styles.input}
      onChangeText={uname => this.setState({uname})}
      />
      <Picker style={{height:1, width:200}} selectedValue = {this.state.type} onValueChange = {(value) => this.setState({favq:value})}>
        <Picker.Item label = "Physical" value = "Physical" />
        <Picker.Item label = "Cultural" value = "Cultural" />
        <Picker.Item label = "Academic" value = "Academic" />
        <Picker.Item label = "Other" value = "Other" />
      </Picker>

      <TextInput
      placeholder="Description"
      style={styles.inputDescription}
      onChangeText={desc => this.setState({desc})}
      />

      <Text style={{fontSize: 15}}>Pick your favorite Quest type:</Text>

      <Button
         blocks
         bordered
         style={styles.cancelButtonStyle}
         onPress={this.onCancelPress}
         color="red"
       ><Text style={styles.loginDiv}>Cancel</Text></Button>
       <Button
          blocks
          bordered
          style={styles.saveButtonStyle}
          onPress={this.saveData}
          color="red"
        ><Text style={styles.loginDiv}>Save Data</Text></Button>

      </Content>
      </Container>
    );
  }
}
const navigationOptions = {header: null };


const profScreenStackNav = StackNavigator({
  EditProfileScreen: { screen : EditProfileScreen,
        navigationOptions: {
          header: null,
        } },
  //Dropped this, you need the arrow to go back on this one
  // ProfileScreen: { screen : ProfileScreen,
  //   },

});
const styles=require('../styles/StyleSheet');

export default profScreenStackNav;
