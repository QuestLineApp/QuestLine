import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Icon, Button, Container, Header, Content, Left } from 'native-base';

class SettingsScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
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
        <Text> Settings Screen </Text>
        </Content>
      </Container>
    );
  }
}

export default SettingsScreen;
