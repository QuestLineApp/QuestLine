//https://www.flaticon.com/free-icon/file_263103
import React, { Component } from 'react';
import { Image, AsyncStorage, View, Text, StyleSheet, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';
import Expo from 'expo'

import HomeScreen from './HomeScreen';

class QuestListScreen extends Component {

  ree = false;

  constructor(props){
    super(props);
    AsyncStorage.getItem('localQuestList').then( value => {
      this.setState({'localQuestList': JSON.parse(value) });
      console.log('mountin and set: ' + this.state.localQuestList);
      this.ree = true;
      this.forceUpdate();
    });
    console.log('construct');
  }

  componentWillMount() {
    this.setState({'localQuestList': {'list': []}});
  }

  saveQuestList() {
    AsyncStorage.setItem('localQuestList',JSON.stringify(this.state.localQuestList));
  }

  deleteQuest(idx) {
    this.state.localQuestList.list.splice(idx,1);
    this.saveQuestList();
    this.forceUpdate();
  }

  completeQuest(idx) {
    this.state.localQuestList.list[idx].complete = true;
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
            <ScrollView style={{backgroundColor:'blue', width:'90%', position:'absolute','top':'10%',bottom:'20%'}}>
            <Text style= {{flex:1, alignSelf:'center', fontWeight:'bold'}}>Description</Text>
            <Text style= {{flex:1, alignSelf:'center'}}> {item.description}</Text>
            <Text style= {{flex:1, alignSelf:'center', fontWeight:'bold'}}>Type</Text>
            <Text style= {{flex:1, alignSelf:'center'}}> {item.type}</Text>
            <Text style= {{flex:1, alignSelf:'center', fontWeight:'bold'}}>Difficulty</Text>
            <Text style= {{flex:1, alignSelf:'center'}}> {this.getDifficulty(item)}</Text>
            <Text style= {{flex:1, alignSelf:'center', fontWeight:'bold'}}>Location</Text>

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
              <View style={{flex:1}}>
                <Button block style = {{
                  height:20,
                  position:'absolute',
                  bottom:0,
                  backgroundColor:'#50cc50',
                  width:'90%', 
                  alignSelf:'center',
                  }} onPress={()=> this.completeQuest(idx)}>
                  <Text> Complete </Text>
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

export default QuestListScreen;
