//https://www.flaticon.com/free-icon/file_263103
import React, { Component } from 'react';
import { Image, AsyncStorage, View, Text, StyleSheet, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';
import Expo from 'expo'
import MessagingScreen from './MessagingScreen';


import HomeScreen from './HomeScreen';

class PickQuest extends Component {

  ree = false;

  constructor(props){
    super(props);
    AsyncStorage.getItem('localQuestList').then( value => {
      if(value){
        this.setState({'localQuestList': JSON.parse(value) });
        console.log('mountin and set: ' + this.state.localQuestList);
        this.ree = true;
        this.forceUpdate();
      }
      else {
        this.setState({'localQuestList': { 'list': [] } });
        console.log('created new quest list');
        this.ree = true;
        this.forceUpdate();

      }
    });
    console.log('construct');
  }

  componentWillMount() {
    this.setState({'localQuestList': {'list': []}});
  }

  saveQuestList() {
    AsyncStorage.setItem('localQuestList',JSON.stringify(this.state.localQuestList));
  }

  editQuest() {
    console.log('editing quest!');
  }

  deleteQuest(idx) {
    this.state.localQuestList.list.splice(idx,1);
    this.saveQuestList();
    this.forceUpdate();
  }

  // TODO:
  chooseQuest(idx) {
    //alert("we here!")
    //challengeQuest
    //item.name
    //name, description,type,difficulty

    if(user.challengename == 'undefined')
      user.challengename=""
    user.challengename=this.state.localQuestList.list[idx].name

    if(user.challengedesc == 'undefined')
      user.challengedesc=""
    user.challengedesc=this.state.localQuestList.list[idx].description

    if(user.challengetype == 'undefined')
      user.challengetype=""
    user.challengetype=this.state.localQuestList.list[idx].type

    if(user.challengedifficulty == 'undefined')
      user.challengedifficulty=""
    user.challengedifficulty=this.getDifficulty(this.state.localQuestList.list[idx])

    this.props.navigation.navigate('MessagingScreen')
  }

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

  getQuests() {
    let quests = this.state.localQuestList.list.map(( item, idx ) =>
    {
      if(item.complete) return;
      return(
          <View key={idx} style = {{height:200,width:'90%',backgroundColor:'#26A69A',alignItems:'center',alignSelf:'center',margin: 4}}>
            <Text style= {{'fontWeight': 'bold'}}> {item.name}</Text>
            <ScrollView style={{backgroundColor:'#7DC0A1', width:'90%', position:'absolute','top':'10%',bottom:'20%'}}>
            <Text style= {{flex:1, alignSelf:'center', fontWeight:'bold', fontSize:16}}>Description</Text>
            <Text style= {{flex:1, alignSelf:'center'}}> {item.description}</Text>
            <Text style= {{flex:1, alignSelf:'center', fontWeight:'bold', fontSize:16}}>Type</Text>
            <Text style= {{flex:1, alignSelf:'center'}}> {item.type}</Text>
            <Text style= {{flex:1, alignSelf:'center', fontWeight:'bold', fontSize:16}}>Difficulty</Text>
            <Text style= {{flex:1, alignSelf:'center'}}> {this.getDifficulty(item)}</Text>


            </ScrollView>

            <View style={{
              height:20,
                position:'absolute',
                bottom:10,
                flex:1,
                flexDirection: 'row',
                width:'80%',
              }}>
              <View style={{flex:1}}>
                <Button block style = {{
                  height:20,
                  position:'absolute',
                  bottom:0,
                  backgroundColor:'#ffd150',
                  width:'90%',
                  alignSelf:'center'}}
                  onPress={()=> this.editQuest(idx)}>
                  <Text> Edit </Text>
                </Button>
              </View>
              <View style={{flex:1}}>
                <Button block style = {{
                  height:20,
                  position:'absolute',
                  bottom:0,
                  backgroundColor:'#cc5050',
                  width:'90%',
                  alignSelf:'center',
                  }} onPress={()=> this.deleteQuest(idx)}>
                  <Text> Delete </Text>
                </Button>
              </View>
              <View style={{flex:2}}>
                <Button block style = {{
                  height:20,
                  position:'absolute',
                  bottom:0,
                  backgroundColor:'#50cc50',
                  width:'90%',
                  alignSelf:'center',
                }} onPress={()=> this.chooseQuest(idx)}>
                  <Text> Choose Quest</Text>
                </Button>
              </View>
            </View>
          </View>
        );
      });
    return quests;
  }

  render() {
    if(this.ree === false) {
      return(<Text>Loading...</Text>);
    }
    console.log(this.state.localQuestList);
    return (
      <Container>
      <Header style={{backgroundColor:'#246A73'}}>
      <Left>
      <Button transparent>
      <Icon name='menu' onPress={()=>this.props.navigation.navigate('DrawerOpen')} />
      </Button>
      </Left>
      </Header>
      <Content contentContainerStyle= {{
        flex: 1,
          alignItems: 'center',
          justifyContent : 'center',
          width: '100%',
      }}>
      <Text style = {{'fontWeight':'bold', 'fontSize':20}}>Quest Log</Text>
      <ScrollView style= {{width:'90%'}}>
      {
        this.getQuests()
      }
      </ScrollView>
      </Content>
      </Container>
    );
  }

  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../assets/list.png')}
      style={{height:24, width:24}} />
    )
  }

}
const navigationOptions = {header: null };


const pickScreenStackNav = StackNavigator({
  PickQuest: { screen : PickQuest,
        navigationOptions: {
          header: null,
        } },

  //Dropped this, you need the arrow to go back on this one
  MessagingScreen: { screen : MessagingScreen,
        navigationOptions: {
          header: null,
        } },

});
const styles=require('../styles/StyleSheet');


export default pickScreenStackNav;
