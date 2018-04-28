import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, StyleSheet,ImageBackground,AsyncStorage,Alert } from 'react-native';
import { PieChart } from 'react-native-svg-charts'
import { LinearGradient } from 'expo';
import { StackNavigator } from 'react-navigation';

//import { Text } from 'react-native-svg'
import { Icon, Button, Container, Header, Content, Left } from 'native-base';
//import style from '../styles/StyleSheet'
//const style = mystyles
//lets see it
import StatsScreen from './StatsScreen';

import MessagingScreen from './MessagingScreen';
import PickQuest from './PickQuest';
import ShareProfile from './ShareProfile';
import EditProfileScreen from './EditProfileScreen';

topQuestData = []
questData = []

class CommunityScreen extends Component {
  loaded = false;
  // questData = [] //this needs to be reset or else if will add



  constructor(props) {
    //questData = [] //this needs to be reset or else if will add
    super(props);
//TODO change this data to test
    this.state = {
      qfilter: user.favq,
      // class: 'Fighter',
      // distance: 14,
      // culture: 30,
      // physical: 15,
      // academic: 30,
    };
    this.setq()
    // AsyncStorage.getItem('localQuestList').then( value => {
    //   this.setState({'localQuestList': JSON.parse(value) });
    //   console.log('mounting and set: ' + JSON.stringify(this.state.localQuestList));
    //   let list = this.state.localQuestList.list;
    //   console.log("building list");
    //   for (let i = 0; i < list.length; ++i) {
    //     questData.push({
    //       key:i,
    //       title: list[i].name,
    //       description: list[i].description + "\nType:          " + list[i].type +
    //       "\nDifficulty:   " + difficulty[list[i].difficulty],
    //       latitude: list[i].latitude,
    //       longitude: list[i].longitude,
    //       type: type[list[i].type],
    //       pos: 45, // What is this for??
    //       value: 4 // And this???
    //     });
    //   }
    //   console.log(JSON.stringify(questData),'building finished');
    //   this.loaded = true;
    //   this.forceUpdate();
    // });
    // console.log(JSON.stringify(questData),'constructor finished');
    // alert(questData.length)
// TODO: put HomeScreencode here
    AsyncStorage.getItem('localQuestList').then( value => {
      this.setState({'localQuestList': JSON.parse(value) });
      console.log('mounting and set: ' + JSON.stringify(this.state.localQuestList));
      let list = this.state.localQuestList.list;
      console.log("building list");
      //alert(user.favq)
      if (user.favq==undefined||user.favq=="not yet selected. Set it on profile page"||user.favq=="Other"){
        // alert('we went here')
        for (let i = 0; i < list.length && questData.length<3; ++i) {
            questData.push({
              key:i,
              title: list[i].name,
              //difficulty: difficulty[list[i].difficulty,
              description: list[i].description + "\nType: " + list[i].type +
              "\nDifficulty: " + difficulty[list[i].difficulty],
              latitude: list[i].latitude,
              longitude: list[i].longitude,
              type: type[list[i].type],
              pos: 45, // What is this for??
              value: 4 // And this???
            });
          }
          this.orderData()
          console.log(JSON.stringify(questData),'building finished');
          this.loaded = true;
          this.forceUpdate();
      }
      else if (user.favq=="Academic"||user.favq=="Physical"||user.favq=="Cultural"){
        // alert('we went here too')
        if(questData.length>0){
          if(questData[0].type!=user.favq){
            questData=[]
          }
        }
        for (let i = 0; i < list.length && questData.length<3; ++i) {
            if (list[i].type==user.favq){
              questData.push({
                key:i,
                title: list[i].name,
                //difficulty: difficulty[list[i].difficulty,
                description: list[i].description + "\nType: " + list[i].type +
                "\nDifficulty: " + difficulty[list[i].difficulty],
                latitude: list[i].latitude,
                longitude: list[i].longitude,
                type: type[list[i].type],
                pos: 45, // What is this for??
                value: 4 // And this???
              });}
          }
          this.orderData()
          console.log(JSON.stringify(questData),'building finished');
          this.loaded = true;
          this.forceUpdate();
      }

    });
    //var temp = [];
    // var sorted_arr = questData.slice().sort(); // You can define the comparing function here.
    //                                      // JS by default uses a crappy string compare.
    //                                      // (we use slice to clone the array so the
    // alert(sorted_arr.length)                                     // original array won't be modified)
    // var results = [];
    // for (var i = 0; i < sorted_arr.length ; i++) {
    //   let dup=false
    //   currval=sorted_arr[i]
    //   for (var j = 0; j < sorted_arr.length ; j++) {
    //     if(i!=j){
    //       if (sorted_arr[i] == sorted_arr[j]) {
    //         alert('ithappened')
    //         dup=True
    //       }}
    //     }if(dup==false){
    //       results.push(currval)
    //     }
    // }

    //questData=results;
    // temp=[]
    // questData.map(function(name){
    //   //loc=name
    //   temp.push(name)
    // })
    //questData=temp

    console.log(JSON.stringify(questData),'constructor finished');
    // alert(questData.length)
    newData=[]
    if(questData.length>1){
      newVal=questData[0]
      //newData.push(newVal)
      for (var i = 0; i < questData.length ; i++) {
        if (newVal!=questData[i]){
          newVal=questData[i]
          newData.push(newVal)
        }
      }
      questData=newData
    }
  }
  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../assets/group.png')}
             style={{height:24, width:24}} />
    )
  }
  orderData(){
    newData=[]
    if(questData.length>1){
      newVal=questData[0]
      //newData.push(newVal)
      for (var i = 0; i < questData.length ; i++) {
        if (newVal!=questData[i]){
          newVal=questData[i]
          newData.push(newVal)
        }
      }
      questData=newData
    }
  }
  getDifficulty(item)
  {
    switch(item.difficulty){
      case 0:
        return 'Easy';
        break;
      case 1:
        return 'Medium';
        break;
      case 2:
        return 'Hard';
        break;
      case 3:
        return 'Extreme';
        break;
    }
  }
  setq(){
    if (user.favq==undefined){
      user.favq="not yet selected, set on profile page"
    }

  }
  questOne(){
    if (questData.length<1){
      <Text></Text>
    }
    else {
      str1='Name: '
      str2=questData[0].title
      str3=str1+str2
      Alert.alert(str3,questData[0].description)}
    //alert(questData[0].description)
  }
  questTwo(){
    if (questData.length<2){
      <Text></Text>
    }
    else{
    str1='Name: '
    str2=questData[1].title
    str3=str1+str2
    Alert.alert(str3,questData[1].description)}
    //alert(questData[0].description)
  }
  questThree(){
    if (questData.length<3){
      <Text></Text>
    }
    else{
    str1='Name: '
    str2=questData[2].title
    str3=str1+str2
    Alert.alert(str3,questData[2].description)}
    //alert(questData[0].description)
  }
  alertItemName = (item) => {
      alert("amount="+item.amount)
   }

 initiateChallenge = () => {
   //alert("it works")
   this.props.navigation.navigate('PickQuest')
 }

 getTextThree(){
   //alert(topQuestData.length)
   //if (topQuestData.length==0){
   //alert(topQuestData[0].name)
   if (questData.length<3){
     return <Text> </Text>
   }
   else if(questData.length>=3){
     return <Text style={styles.newloginDiv}>3: Name: {questData[2].title} -Tap for description...</Text>
   }
 }
 getTextTwo(){
   //alert(topQuestData.length)
   //if (topQuestData.length==0){
   //alert(topQuestData[0].name)
   if (questData.length<2){
     return <Text> </Text>
   }
   else if(questData.length>=2){
     return <Text style={styles.newloginDiv}>2: Name: {questData[1].title} -Tap for description...</Text>
   }
 }

 getTextOne(){
   //alert(topQuestData.length)
   //if (topQuestData.length==0){
   //alert(topQuestData[0].name)
   if (questData.length==0){
     return <Text style={styles.newloginDiv}>There are no quests in the database matching your preference</Text>
   }
   else if(questData.length>0){
     return <Text style={styles.newloginDiv}>1: Name: {questData[0].title} -Tap for description...</Text>
   }
 }

 shareProf = () => {
   //alert("it works")
   this.props.navigation.navigate('ShareProfile')
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
        <ImageBackground source={require('../assets/group.png')}
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
        <Content style={styles.statsPage} contentContainerStyle={{
          flex : 1,
          //<Image source={require('../assets/statsIcon.png')}  />

          flexDirection: 'column',
          marginBottom: '20%',
          // flexDirection: 'column',
          // justifyContent: 'space-between',
          // alignItems : 'Left',
          // justifyContent : 'center'
        }}>
        <Text style={styles.topQuests}>Top 3 Quests for you (because your favorite quest type is {user.favq})</Text>
        <Button
           bordered
           block
           light
           onPress={this.questOne}
           color="red"
           style={styles.listButtons}
         >{this.getTextOne()}</Button>
         <Button
            bordered
            block
            light
            onPress={this.questTwo}
            color="red"
            style={styles.listButtons}
          >{this.getTextTwo()}</Button>
          <Button
             bordered
             block
             light
             onPress={this.questThree}
             color="red"
             style={styles.listButtons}
           >{this.getTextThree()}</Button>
        <Button
           blocks
           bordered
           style={styles.shareProfStyle}
           onPress={this.shareProf}
           color="red"
         ><Text style={styles.loginDiv}>Share your profile stats</Text></Button>
        <Button
           blocks
           bordered
           style={styles.saveButtonStyle}
           onPress={this.initiateChallenge}
           color="red"
         ><Text style={styles.loginDiv}>Send a Challenge!</Text></Button>





        </Content>
        </ImageBackground>

      </Container>
    );
  }
}

const navigationOptions = {header: null };


const commScreenStackNav = StackNavigator({
  CommunityScreen: { screen : CommunityScreen,
        navigationOptions: {
          header: null,
        } },
  //Dropped this, you need the arrow to go back on this one
  MessagingScreen: { screen : MessagingScreen,
    },
  StatsScreen: { screen : StatsScreen,
    },
  EditProfileScreen: { screen : EditProfileScreen,
        },
  PickQuest: { screen : PickQuest,
        },
  ShareProfile: { screen : ShareProfile,
        },
});
const styles=require('../styles/StyleSheet');


export default commScreenStackNav;
