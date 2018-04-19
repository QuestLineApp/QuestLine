//https://www.flaticon.com/free-icon/settings_263074
import React, { Component } from 'react';
import { AsyncStorage, Image, View, Text, StyleSheet, TextInput, Picker, KeyboardAvoidingView} from 'react-native';
import { CheckBox } from 'react-native-elements'
import { Icon, Button, Container, Header, Content, Left } from 'native-base';

class SettingsScreen extends Component {

  constructor(props) {
    console.log("1");
    super(props);
    console.log("2");
    AsyncStorage.getItem('users').then( value => {
      // let users = JSON.parse(value);
    console.log("3");
      let users
    console.log("4");
      if(!users){
    console.log("5");
        console.log('users was null');
    console.log("6");
        users = {};
    console.log("7");
      }
    console.log("8");
      console.log(JSON.stringify(users));
    console.log("9");
      if(users[user.id]) {
    console.log("10");
        this.state = {"user" : users[user.id]};
    console.log("11");
      } else {
    console.log("12");
        let newUser = {
          givenName : user.givenName,
          familyName : user.familyName,
          email : (user.email) ? user.email : "no email",
          filters : {
            culture_checked : true,
            physical_checked : true,
            food_checked : true,
            academic_checked : true,
          }
        }
        this.state = {"user" : newUser};
      }
      console.log(this.state);
    });
  }

  componentWillMount() {
    let blank = {
      givenName : "",
      familyName : "",
      email : "",
      filters : {
        culture_checked : true,
        physical_checked : true,
        food_checked : true,
        academic_checked : true,
      }
    }
    this.setState("user" : blank);
  }

  save() {
    console.log("saving profile");

    AsyncStorage.getItem('users')
    .then( value =>
      {
        let users = JSON.parse(value);
        if(!users) users = {};
        users[user.id] = this.state.user;
        AsyncStorage.setItem('users',JSON.stringify(users));
        console.log('users ' + JSON.stringify(users));
      });
  }

  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../assets/settingsIcon.png')}
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
          <Content contentContainerStyle={{
            flex : 1,
            alignItems : 'center',
            justifyContent : 'center'
          }}>

            <Text>Change Profile Settings</Text>

            <Text>First Name: {this.state.givenName}</Text>

            <Text>Last Name: {this.state.familyName}</Text>

            <View style={{flexDirection: 'row'}}>
              <Text>Email:</Text>
              <TextInput style={{height: 40, width:200, textAlign: 'center'}} value={this.state.email} onChangeText={(text) => this.setState({'email' : text})} />
            </View>

            <Text>Quest Filter Options</Text>

            <View style={{justifyContent: 'center'}}>

              <CheckBox
              title='Culture'
              checked={this.state.culture_checked}
              onPress={() => this.setState({'culture_checked': !this.state.user.filters.culture_checked})}
              />

              <CheckBox
              title='Physical'
              checked={this.state.physical_checked}
              onPress={() => this.setState({'physical_checked': !this.state.user.filters.physical_checked})}
              />

              <CheckBox
              title='Food'
              checked={this.state.food_checked}
              onPress={() => this.setState({'food_checked': !this.state.user.filters.food_checked})}
              />

              <CheckBox
              title='Academic'
              checked={this.state.academic_checked}
              onPress={() => this.setState({'academic_checked': !this.state.user.filters.academic_checked})}
              />

            </View>

            <Button block light onPress={()=> this.save()}><Text> Save Changes </Text></Button>

          </Content>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}

export default SettingsScreen;
