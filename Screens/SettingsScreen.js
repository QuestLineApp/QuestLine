//https://www.flaticon.com/free-icon/settings_263074
import React, { Component } from 'react';
import { AsyncStorage, Image, View, Text, StyleSheet } from 'react-native';

import { Icon, Button, Container, Header, Content, Left } from 'native-base';

class SettingsScreen extends Component {
	state = {
		'numclicks' : 0
	}

	componentDidMount() { 
		
		AsyncStorage.getItem('numclicks').then( value => {
			this.setState({'numclicks': parseInt(value) });
			console.log('pulled ' + value);
		});
		console.log(this.state.numclicks);
	}

	incrementClicks() {
		this.state.numclicks += 1;
		this.forceUpdate();
		console.log(this.state.numclicks);
	}

	componentWillUnmount() {
		AsyncStorage.setItem('numclicks', this.state.numclicks.toString());
		console.log('set ' + this.state.numclicks);
	}

  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../assets/settingsIcon.png')}
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
        <Text> Settings Screen </Text>
      <Button block light onPress={()=> this.incrementClicks()}><Text>{this.state.numclicks}</Text></Button>
        </Content>
      </Container>
    );
  }
}

export default SettingsScreen;
