import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class PickerExample extends Component {
   state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   render() {
      return (
         <View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser} style={{height:30, width:100}}>
              <Picker.Item label = "Physical" value = "Physical" />
              <Picker.Item label = "Cultural" value = "Cultural" />
              <Picker.Item label = "Intellectual" value = "Intellectual" />
							<Picker.Item label = "Other" value = "Other" />
            </Picker>
            <Text style = {styles.text}>{this.state.user}</Text>
         </View>
      )
   }
}
export default PickerExample

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'green'
   }
})
