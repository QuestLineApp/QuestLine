import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, StyleSheet,ImageBackground } from 'react-native';
import { PieChart } from 'react-native-svg-charts'
import { LinearGradient } from 'expo';
import { StackNavigator } from 'react-navigation';

//import { Text } from 'react-native-svg'
import { Icon, Button, Container, Header, Content, Left } from 'native-base';
//import style from '../styles/StyleSheet'
//const style = mystyles
//lets see it
import StatsScreen from './StatsScreen';

import MessagingScreen from './MessagingScreen';
import PickQuest from './PickQuest';
import ShareProfile from './ShareProfile';
import EditProfileScreen from './EditProfileScreen';


class CommunityScreen extends Component {
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

 initiateChallenge = () => {
   //alert("it works")
   this.props.navigation.navigate('PickQuest')
 }

 shareProf = () => {
   //alert("it works")
   this.props.navigation.navigate('ShareProfile')
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
        <Button
           blocks
           bordered
           style={styles.shareProfStyle}
           onPress={this.shareProf}
           color="red"
         ><Text style={styles.loginDiv}>Share your profile stats</Text></Button>
        <Button
           blocks
           bordered
           style={styles.saveButtonStyle}
           onPress={this.initiateChallenge}
           color="red"
         ><Text style={styles.loginDiv}>Send a Challenge!</Text></Button>





        </Content>
        </ImageBackground>

      </Container>
    );
  }
}

const navigationOptions = {header: null };


const commScreenStackNav = StackNavigator({
  CommunityScreen: { screen : CommunityScreen,
        navigationOptions: {
          header: null,
        } },
  //Dropped this, you need the arrow to go back on this one
  MessagingScreen: { screen : MessagingScreen,
    },
  StatsScreen: { screen : StatsScreen,
    },
  EditProfileScreen: { screen : EditProfileScreen,
        },
  PickQuest: { screen : PickQuest,
        },
  ShareProfile: { screen : ShareProfile,
        },
});
const styles=require('../styles/StyleSheet');


export default commScreenStackNav;
