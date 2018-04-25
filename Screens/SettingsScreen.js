//https://www.flaticon.com/free-icon/settings_263074
import React, { Component } from 'react';
import { AsyncStorage, Image, View, Text, StyleSheet, TextInput, Picker, KeyboardAvoidingView} from 'react-native';
import { CheckBox } from 'react-native-elements'
import { Icon, Button, Container, Header, Content, Left } from 'native-base';
import { ConfirmDialog } from 'react-native-simple-dialogs';

class SettingsScreen extends Component {

  constructor(props) {
    super(props);
    AsyncStorage.getItem('users').then( value => {
      let users = JSON.parse(value);
      if(!users) users = {};
      if(users[user.id]) {
        this.setState({"givenName" : users[user.id].givenName});
        this.setState({"familyName" : users[user.id].familyName});
        this.setState({"email" : users[user.id].email});
        this.setState({"culture_checked" : users[user.id].culture_checked});
        this.setState({"physical_checked" : users[user.id].physical_checked});
        this.setState({"food_checked" : users[user.id].food_checked});
        this.setState({"academic_checked" : users[user.id].academic_checked});
        console.log(this.state);
      } else {
        this.setState({"givenName" : user.givenName});
        this.setState({"familyName" : user.familyName});
        this.setState({"email" : (user.email) ? user.email : "no email"});
        this.setState({"culture_checked" : true});
        this.setState({"physical_checked" : true});
        this.setState({"food_checked" : true});
        this.setState({"academic_checked" : true});
        console.log(this.state);
      }
    });
  }

  componentWillMount() {
    this.setState({"givenName" : ""});
    this.setState({"familyName" : ""});
    this.setState({"email" : ""});
    this.setState({"culture_checked"  : false});
    this.setState({"physical_checked" : false});
    this.setState({"food_checked"     : false});
    this.setState({"academic_checked" : false});
  }

  save() {
    console.log("saving profile");

    AsyncStorage.getItem('users')
    .then( value =>
      {
        let users = JSON.parse(value);
        if(!users) users = {};
        users[user.id] = {
          givenName : this.state.givenName,
          familyName : this.state.familyName,
          email : this.state.email,
          culture_checked : this.state.culture_checked,
          physical_checked : this.state.physical_checked,
          food_checked : this.state.food_checked,
          academic_checked : this.state.academic_checked,
        }
        AsyncStorage.setItem('users',JSON.stringify(users));
        console.log('users ' + JSON.stringify(users));
      });
  }

  clear() {
    console.log("clear async storage");
    AsyncStorage.clear()
    this.setState({"givenName" : user.givenName});
    this.setState({"familyName" : user.familyName});
    this.setState({"email" : (user.email) ? user.email : "no email"});
    this.setState({"culture_checked" : true});
    this.setState({"physical_checked" : true});
    this.setState({"food_checked" : true});
    this.setState({"academic_checked" : true});
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
              onPress={() => this.setState({'culture_checked': !this.state.culture_checked})}
              />

              <CheckBox
              title='Physical'
              checked={this.state.physical_checked}
              onPress={() => this.setState({'physical_checked': !this.state.physical_checked})}
              />

              <CheckBox
              title='Food'
              checked={this.state.food_checked}
              onPress={() => this.setState({'food_checked': !this.state.food_checked})}
              />

              <CheckBox
              title='Academic'
              checked={this.state.academic_checked}
              onPress={() => this.setState({'academic_checked': !this.state.academic_checked})}
              />

            </View>

            <Button block light onPress={()=> this.save()}><Text> Save Changes </Text></Button>
            <Button block warning onPress={()=> this.setState({dialogVisible:true})}><Text>Delete Profile</Text></Button>

          </Content>
          <ConfirmDialog
            title="Are you sure?"
            message="This will delete all your saved quests"
            visible={this.state.dialogVisible}
            onTouchOutside={() => this.setState({dialogVisible: false})}
            positiveButton={{
                title: "YES",
                onPress: () => this.clear()
            }}
            negativeButton={{
                title: "NO",
                onPress: () =>
            }}
          />
        </Container>
      </KeyboardAvoidingView>
    );
  }
}

export default SettingsScreen;
