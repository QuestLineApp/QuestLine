import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, StyleSheet,ImageBackground } from 'react-native';
import { PieChart } from 'react-native-svg-charts'
import { LinearGradient } from 'expo';
//import { Text } from 'react-native-svg'
import { Icon, Button, Container, Header, Content, Left } from 'native-base';
//import style from '../styles/StyleSheet'
//const style = mystyles
//lets see it

class StatsScreen extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../assets/group.png')}
             style={{height:24, width:24}} />
    )
  }

  constructor(props) {
    super(props);
//TODO change this data to test
    this.state = {
      class: 'Fighter',
      distance: 14,
      culture: 30,
      physical: 15,
      academic: 30,
    };
  }

  alertItemName = (item) => {
      alert("amount="+item.amount)
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
        <ImageBackground source={require('../assets/group.png')}
        style={styles.backgroundImage}>
        <LinearGradient
         colors={['rgb(255,255,255)','rgba(36,106,115,0.9)','rgb(255,255,255)' ]}
         style={{
           position: 'absolute',
           left: 0,
           right: 0,
           top: 0,
           height: 800,
         }}
       />
        <Content style={styles.statsPage} contentContainerStyle={{
          flex : 1,
          //<Image source={require('../assets/statsIcon.png')}  />

          flexDirection: 'column',
          marginBottom: '20%',
          // flexDirection: 'column',
          // justifyContent: 'space-between',
          // alignItems : 'Left',
          // justifyContent : 'center'
        }}>
        <Text style={styles.topQuests}>Top Quests in your area:</Text>   







        </Content>
        </ImageBackground>

      </Container>
    );
  }
}
const styles=require('../styles/StyleSheet');


export default StatsScreen;
