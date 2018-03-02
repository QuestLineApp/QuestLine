// -- Icon
// https://www.flaticon.com/free-icon/placeholder_149226
// -- GPS tutorial
// https://hackernoon.com/react-native-basics-geolocation-adf3c0d10112
import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';

class Location extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../assets/locationIcon.png')}
             style={{height:24, width:24}} />
    )
  }

  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
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
        <Text>Live GPS Tracking</Text>
        <Text>Latitude:  {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        </Content>
      </Container>
    );
  }
}

export default Location;
