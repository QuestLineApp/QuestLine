//https://www.flaticon.com/free-icon/edit_263062
import React, { Component } from 'react';
import { AsyncStorage, Image, View, Text, StyleSheet, TextInput, Picker, KeyboardAvoidingView} from 'react-native';

import { Icon, Button, Container, Header, Content, Left } from 'native-base';

import PickerExample from './CatPicker.js';
import {MapView} from 'expo';

class QuestCreateScreen extends Component {
  state={type:'Physical', difficulty:0, questCoords:{latitude:0,longitude:0}}

  componentDidMount() {

    //start GPS
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          userLat: position.coords.latitude,
          userLong: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );

    //Get quest list
    AsyncStorage.getItem('localQuestList').then( value => {
      this.setState({'localQuestList': JSON.parse(value) }); 
      console.log(this.state.localQuestList);
    });
  }

  saveQuest() {
    let newQuest = {
      'name' : this.state.questName,
      'description' : this.state.description,
      'type': this.state.type,
      'difficulty': this.state.difficulty,
      'latitude': this.state.questCoords.latitude,
      'longitude': this.state.questCoords.longitude,
      'complete': false,
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
      <Image source={require('../assets/plus.png')}
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

          <Picker style={{height:40, width:200}} selectedValue = {this.state.type} onValueChange = {(value) => this.setState({'type': value})}>
            <Picker.Item label = "Physical" value = "Physical" />
            <Picker.Item label = "Cultural" value = "Cultural" />
            <Picker.Item label = "Academic" value = "Academic" />
            <Picker.Item label = "Other" value = "Other" />
          </Picker>
          <Picker style={{height:40, width:200}} selectedValue = {this.state.difficulty} onValueChange = {(value) => this.setState({'difficulty': value})}>
            <Picker.Item label = "Easy" value = {0} />
            <Picker.Item label = "Medium" value = {1} />
            <Picker.Item label = "Hard" value = {2} />
            <Picker.Item label = "Extreme" value = {3} />
          </Picker>

          <MapView
            style={{flex:1, width: '100%', height: '100%'}}
            initialRegion= {{
              latitude:this.state.userLat,
              longitude:this.state.userLong,
              latitudeDelta: 0.1844,
              longitudeDelta: 0.0842,
            }}
            showsUserLocation={true}
            onPress={e=>
              { this.setState(
                {
                  questCoords:
                    {
                     latitude:e.nativeEvent.coordinate.latitude,
                     longitude:e.nativeEvent.coordinate.longitude
                    }
                });
                  console.log(e.nativeEvent)}
              }
          >
            <MapView.Marker
              coordinate={{latitude:this.state.questCoords.latitude,
                           longitude:this.state.questCoords.longitude}}
              title={"position"}
              />
          </MapView>

          <Button block light onPress={()=> this.showState()}><Text> Log state </Text></Button>

          <Button block light onPress={()=> this.saveQuest()}><Text> Save Quest </Text></Button>

        </Content>

      </Container>
      </KeyboardAvoidingView>
    );
  }
}

export default QuestCreateScreen;
