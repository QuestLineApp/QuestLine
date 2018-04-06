
import React, { Component } from 'react';
import { AsyncStorage, View, Text, StyleSheet, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';
import Expo from 'expo'

import HomeScreen from './HomeScreen';

class QuestListScreen extends Component {

	componentDidMount() {
		AsyncStorage.getItem('localQuestList').then( value => {
			this.setState({'localQuestList': JSON.parse(value) });
			console.log(this.state.localQuestList);
		});
	}

  deleteQuest() {
  }

  editQuest() {

  }


  render() {
    let ree = {localQuests: [{name:'dingle',desc:'yo this be dingle'},{name:'dongle',desc:'but hey this is a dongle and I really like dongles so this text field is going to be really long so I can espouse just how much I love my dongles, da dingle dongol mingle mongol. Dang, Ive never even though about the mongols making apps. I wonder if they would have an app that would generate dope throat singing shit or if they would have a horse companion in a war game that they are met on an open field lol.'}]};

    let quests = ree.localQuests.map(( item, key ) =>
    {
      return(
          <View style = {{height:100,width:'90%',backgroundColor:'#26A69A',alignItems:'center',alignSelf:'center',margin: 4}}>
            <Text style= {{'fontWeight': 'bold'}}> {item.name}</Text>
            <Text numberOfLines={2}> {item.desc}</Text>
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
                onPress={()=> this.editQuest(item.desc)}>
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
                }} onPress={()=> this.deleteQuest(item.desc)}>
                <Text> Delete </Text>
              </Button>
            </View>
            </View>
          </View>
      );
    });

    
    return (
      <Content contentContainerStyle= {{
          flex: 1,
          alignItems: 'center',
          justifyContent : 'center',
          width: '100%',
      }}>
        <Text style = {{'fontWeight':'bold', 'fontSize':20}}>Quest Log</Text>
        <ScrollView style= {{width:'90%'}}>
          {
            quests
          }

        </ScrollView>

      </Content>

    );
  }
}

export default QuestListScreen;
