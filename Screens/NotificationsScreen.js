import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Icon, Button, Container, Header, Content, Left } from 'native-base';

class NotificationsScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='md-menu' onPress={()=>this.props.navigation.navigate('DrawerOpen')} />
            </Button>
          </Left>
        </Header>
        <Content contentContainerStyle= {{
          flex: 1,
          alignItems: 'center',
          justifyContent : 'center',
        }}>
          <Text> Notifications </Text>
        </Content>
      </Container>
    );
  }
}

export default NotificationsScreen;
