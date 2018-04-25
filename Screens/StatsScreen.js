//https://www.flaticon.com/free-icon/settings_263074
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
      <Image source={require('../assets/statsIcon.png')}
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
        <ImageBackground source={require('../assets/stats.png')}
        style={styles.backgroundImage}>
        <LinearGradient
         colors={['rgb(0,0,0)','rgba(36,106,115,0.9)' ]}
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



        <Text style={styles.statsDivs}> Class: {this.state.class}</Text>
        <Text style={styles.statsDivsPhysical}> Physical: {this.state.physical} </Text>
        <Text style={styles.statsDivsDistance}> Food: {this.state.distance}</Text>
        <Text style={styles.statsDivsCulture}> Culture: {this.state.culture}</Text>
        <Text style={styles.statsDivsAcademic}> Academic: {this.state.academic}</Text>

        <PieChart
            style={{ height: 300 }}
            valueAccessor={({ item }) => item.amount}
            data= {[
                {
                    labels:'cult',
                    key: 1,
                    amount: this.state.culture,
                    svg: { fill: 'rgba(54,133,181,.6)' }
                },
                {
                    labels:'phys',
                    key: 2,
                    amount: this.state.physical,
                    svg: { fill: 'rgba(55, 31, 86,0.6)' }
                },

                {
                    label:'dist',
                    key: 3,
                    amount: this.state.distance,
                    svg: { fill: 'rgba(15, 70, 158,.6)' }
                },
                {
                    label:'academic',
                    key: 4,
                    amount: this.state.academic,
                    svg: { fill: 'rgba(111, 159, 237,.6)' }

                }
            ]}
            onPress = {() => alert('yaaaay')}
            spacing={0}
            innerRadius={0}
            renderDecorator={({ item, pieCentroid, index }) => (

                <Text
                    key={index}
                    x={pieCentroid[ 0]}
                    y={pieCentroid[ 1 ]}
                    fill={'black'}
                    textAnchor={'middle'}
                    alignmentBaseline={'middle'}
                    fontSize={24}
                    stroke={'black'}
                    strokeWidth={0}
                    onPress = {() => this.alertItemName(item)}
                >
                    {item.amount}
                </Text>
            )}

        />


        </Content>
        </ImageBackground>

      </Container>
    );
  }
}
const styles=require('../styles/StyleSheet');


export default StatsScreen;
