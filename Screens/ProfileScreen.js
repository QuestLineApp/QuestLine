//https://www.flaticon.com/free-icon/settings_263074
import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

import { Icon, Button, Container, Header, Content, Left } from 'native-base';

class ProfileScreen extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../assets/profileIcon.png')}
             style={{height:24, width:24}} />
    )
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
        <Text>{user.name}</Text>
        </Content>
      </Container>
    );
  }
}

export default ProfileScreen;