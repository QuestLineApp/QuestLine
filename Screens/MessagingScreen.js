import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, StyleSheet,ImageBackground,Share } from 'react-native';
import { PieChart } from 'react-native-svg-charts'
import { LinearGradient } from 'expo';
//import { Text } from 'react-native-svg'
import { Icon, Button, Container, Header, Content, Left } from 'native-base';
//import style from '../styles/StyleSheet'
// import { StackNavigator } from 'react-navigation';

//import style from '../styles/StyleSheet'
//const style = mystyles
//lets see it

// import React, { Component } from 'react';
// import { Share, View, Button } from 'react-native';
class MessagingScreen extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../assets/statsIcon.png')}
             style={{height:24, width:24}} />
    )
  }

  constructor(props) {
    super(props);
//TODO change this data to test
    this.state = {
      class: 'Fighter',
      distance: user.stats.other,
      culture: user.stats.culture,
      physical: user.stats.physical,
      academic: user.stats.academic,
    };
  }


  handlePress(){
    // if(challengeQuest.name == 'undefined')
    //   challengeQuest.name=" "
    //name, description,type,difficulty
    let str1="I am challenging you to a quest! -Name: "
    let str2=user.challengename
    let str3=". -Description: "
    let str4=user.challengedesc
    let str5=". -Type: "
    let str6=user.challengetype
    let str7=". -Difficulty: "
    let str8=user.challengedifficulty
    let str9=". You can complete this quest on the Questine app."
    Share.share({title: 'Quest Challenge:',
    message: (str1+str2+str3+str4+str5+str6+str7+str8)})
  		.then( ({action, activityType}) => {
  			console.log( action == Share.sharedAction, activityType );
  		});
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
        <Button
           blocks
           bordered
           style={styles.saveButtonStyle}
           onPress={this.handlePress}
           color="red"
         ><Text style={styles.loginDiv}>Send Challenge!</Text></Button>






        </Content>
        </ImageBackground>

      </Container>
    );
  }
}



  //Dropped thi
const styles=require('../styles/StyleSheet');
// render() {
//   return <View style={{marginTop:30}}>
//     <Button title="Partager" onPress={this.handlePress} />
//     <Button
//        blocks
//        bordered
//        style={styles.saveButtonStyle}
//        color="red"
//      ><Text style={styles.loginDiv}>Save Data</Text></Button>
//   </View>;
// }
// }
export default MessagingScreen;
