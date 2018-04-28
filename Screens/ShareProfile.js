import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, StyleSheet,ImageBackground,Share ,AsyncStorage} from 'react-native';
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
class ShareProfile extends Component {
  showUname = async()=>{
    let myArray= await AsyncStorage.getItem('profData')
    let d =JSON.parse(myArray)
    //this.state.username=d.uname
    user.shareusername=d.uname
    user.sharedescrition=d.desc
    user.sharefavquest=d.favq
    this.setState({username:d.uname})
    this.setState({description:d.desc})
    this.setState({favquest:d.favq})
    // yo=d.uname
    // return yo

    //alert(d.uname+d.desc+d.favq)
  }
  constructor(props){
    super(props)

    this.state = {
      username: '',
      description: '',
      favquest: '',
    };
    this.showUname()
    // alert(v)
    // this.state={
    //   username:v
    // };
  }
  showData = async()=>{
    // let myArray= await AsyncStorage.getItem('profData')
    // let d =JSON.parse(myArray)
    let myArray= await AsyncStorage.getItem('profData')
    // let myArray= await AsyncStorage.getItem('profData')

    // AsyncStorage.getItem('profData').then( value => {
    //   this.setState({'localQuestList': JSON.parse(value) });
    //   this.ree = true;
    //   this.forceUpdate();


    let d =JSON.parse(myArray)
    return d
    //alert(d.uname+d.desc+d.favq)
  }
  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../assets/statsIcon.png')}
             style={{height:24, width:24}} />
    )
  }


  handlePress(){
    // if(challengeQuest.name == 'undefined')
    //   challengeQuest.name=" "
    //name, description,type,difficulty
    // other: user.stats.other,
    // culture: user.stats.culture,
    // physical: user.stats.physical,
    // academic: user.stats.academic,
    // TODO: make class
    if(user.stats.culture==undefined){
      user.stats.culture=0
    }
    let str1="Check out my Questline Profile! Username: "
    let str11=user.shareusername
    let str12=". -Experience: "
    let str2=user.stats.experience
    let str3=". -Culture Score: "
    let str4=user.stats.culture
    let str5=". -Physical Score: "
    let str6=user.stats.physical
    let str7=". -Academic Score: "
    let str8=user.stats.academic
    let str9=". -Other Score: "
    let str10=user.stats.other
    let str13=". -Favorite Quest: "
    let str14=user.sharefavquest
    let str15=". -Profile Description: "
    let str16=user.sharedescrition
    Share.share({title: 'Quest Challenge:',
    message: (str1+str11+str12+str2+str3+str4+str5+str6+str7+str8+str9+str10+str13+str14+str15+str16)})
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
         ><Text style={styles.loginDiv}>Share Stats!</Text></Button>






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
export default ShareProfile;
