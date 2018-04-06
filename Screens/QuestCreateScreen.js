//https://www.flaticon.com/free-icon/edit_263062
import React, { Component } from 'react';
import { AsyncStorage, Image, View, Text, StyleSheet, TextInput, Picker, KeyboardAvoidingView} from 'react-native';

import { Icon, Button, Container, Header, Content, Left } from 'native-base';

import PickerExample from './CatPicker.js'

class QuestCreateScreen extends Component {

  componentDidMount() {
    AsyncStorage.getItem('localQuestList').then( value => {
      this.setState({'localQuestList': JSON.parse(value) });
      console.log(this.state.localQuestList);
    });
  }

  saveQuest() {
    let newQuest = {
      'name' : this.state.questName,
      'description' : this.state.description,
    }
    console.log(newQuest);
    let questList = this.state.localQuestList;
    console.log(questList);
    if(questList === null) questList = { list : [] };
    questList.list.push(newQuest);
    console.log('attempt set ');
    console.log(questList);

    AsyncStorage.setItem('localQuestList',JSON.stringify(questList));
    console.log('set ' + questList);

  }

  componentWillUnmount() {
    console.log('unmounting quest creation');
  }

  showState() {
    console.log(this.state);
  }

  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../assets/create.png')}
      style={{height:24, width:24}} />
    )
  }

  render() {
    return (
      <KeyboardAvoidingView
      style={{flex: 1,backgroundColor: '#ecf0f1'}}
      behavior="padding">


      <Container>
        <Header style={{backgroundColor:'#246A73'}}>
          <Left>
            <Button transparent>
              <Icon name='menu' onPress={()=>this.props.navigation.navigate('DrawerOpen')} />
            </Button>
          </Left>
        </Header>

        <Content contentContainerStyle={{ flex : 1, alignItems : 'center', justifyContent : 'center' }}>

          <Text>New Quest Screen</Text>

          <TextInput style={{height: 40, width: 200, textAlign: 'center'}} placeholder="Quest Name" onChangeText={(text) => this.setState({'questName' : text})} />

          <TextInput style={{height: 40, width:200, textAlign: 'center'}} placeholder="Description" onChangeText={(text) => this.setState({'description' : text})} />

          <Button block light onPress={()=> this.showState()}><Text> Log state </Text></Button>

          <Button block light onPress={()=> this.saveQuest()}><Text> Save Quest </Text></Button>

        </Content>

      </Container>
      </KeyboardAvoidingView>
    );
  }
}

export default QuestCreateScreen;
