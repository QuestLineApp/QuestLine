'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;
//is this getting pulled?
//RGB of header tab: (36,106,115)
module.exports = StyleSheet.create({

      statsPage: {
        backgroundColor: 'transparent',
        width: '100%'

      },

      tester: {
        backgroundColor: 'rgba(255,0,0,100)',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center',
        marginBottom: '10%'
      },
      statsDivs: {
        //backgroundColor: 'grey',
        fontSize: 35,
        color: 'white'
      },
      welcomeDivs: {
        //backgroundColor: 'grey',
        // borderColor: 'rgb(0,0,0)',
        fontSize: 50,
        textAlign: 'center',
        marginBottom:50,
        color: 'white',

      },
      buttonStyle:{
        // borderColor: 'rgba(31, 39, 192,.5)',
        backgroundColor: 'rgba(31, 39, 192,.1)',
        marginBottom: '6%'
      },
      statsButtonStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: 'rgba(31, 39, 192,.5)',
        backgroundColor: 'rgba(31, 39, 192,.1)',
        position: 'absolute',
        // bottom: 10,
        top:150,
        width:'100%'
      },
      editButtonStyle:{
        // alignItems: 'center',
        // justifyContent: 'center',
        position: 'absolute',
        // bottom: 10,
        bottom:150,
        right: 5,
        // borderColor: 'rgba(31, 39, 192,.5)',
        backgroundColor: 'rgba(31, 39, 192,.1)',
        // marginTop: '80%',
        // width:'100%'
      },
      showButtonStyle:{
        // alignItems: 'center',
        // justifyContent: 'center',
        position: 'absolute',
        // bottom: 10,
        top:50,
        right: 5,
        // borderColor: 'rgba(31, 39, 192,.5)',
        backgroundColor: 'rgba(31, 39, 192,.1)',
        // marginTop: '80%',
        // width:'100%'
      },
      loginDiv: {
        //backgroundColor: 'grey',
        borderBottomWidth: 5,
        borderColor: 'white',
        fontSize: 20,
        color: 'white'
      },
      statsDivsCulture: {
        backgroundColor: 'rgba(54,133,181,.6)',
        fontSize: 35,
        color: 'white'
      },
      statsDivsAcademic: {
        backgroundColor: 'rgba(111, 159, 237,.6)',
        fontSize: 35,
        color: 'white'
      },
      statsDivsDistance: {
        backgroundColor: 'rgba(15, 70, 158,.6)',
        fontSize: 35,
        color: 'white'
      },
      statsDivsPhysical: {
        backgroundColor: 'rgba(55, 31, 86,0.6)',
        fontSize: 35,
        color: 'white'
      },
      backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        // width: null,
        // height: null,
        //resizeMode:  'stretch' //or 'cover'
      },

      //////CommunityStyles
      questsDiv: {
        fontSize: 30,
        color: 'white'
      },
      profileImage:{
        width: 42, height: 57,
        position: 'absolute',
        top: 5,
        right: 5
      },
      profileImage2:{
        width: 112, height: 150,
        position: 'absolute',
        top: 50,
        // right: 5
      },
      profNameStyle:{
        position: 'absolute',
        fontSize: 15,
        top: 5,
        marginBottom: 100,
      },
      input:{
        backgroundColor:'#fff',padding:10, margin:10,
        borderWidth: 1, borderColor:'#ccc'
      },
      inputDescription:{
        backgroundColor:'#fff',padding:10, margin:10,
        borderWidth: 1, borderColor:'#ccc',
        width:"70%"
      },
      username:{
        top:85,
        right:5,
        position: 'absolute',
        fontSize: 15,
        color: "black"
      },
      description:{
        left: 5,
        top: 250,
        position: 'absolute',
        fontSize: 23,
        width:'90%'
      },
      favquest:{
        position: 'absolute',
        fontSize: 23,
        top: 200,
        left: 5
      },
      cancelButtonStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        // bottom: 10,
        // top:50,
        right: 5,
        bottom: 20,
        width:'100%',
        // borderColor: 'rgba(31, 39, 192,.5)',
        backgroundColor: 'rgba(31, 39, 192,.1)',
        // marginTop: '80%',
        // width:'100%'
      },
      saveButtonStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 70,
        // top:50,
        width:"100%",
        // borderColor: 'rgba(31, 39, 192,.5)',
        backgroundColor: 'rgba(31, 39, 192,.1)',
        // marginTop: '80%',
        // width:'100%'
      },
      shareProfStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom:120,
        // top:50,
        width:"100%",
        // borderColor: 'rgba(31, 39, 192,.5)',
        backgroundColor: 'rgba(31, 39, 192,.1)',
        // marginTop: '80%',
        // width:'100%'
      },
      buttonOne:{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        //bottom:170,
        // top:50,
        width:"100%",
        // borderColor: 'rgba(31, 39, 192,.5)',
        backgroundColor: 'rgba(31, 39, 192,.1)',
        // marginTop: '80%',
        // width:'100%'
      },
      topQuests:{
        //flex:1,
        backgroundColor:'rgba(0, 138, 142,.3)',
        color:'black',
        //textShadowColor:'black',
        textAlign:'center',
        fontWeight: 'bold',
        // position: 'absolute',
        alignItems: 'center',
        // justifyContent: 'center',
        fontSize: 20,
      },
      newloginDiv: {
        //backgroundColor: 'grey',
        borderColor: 'white',
        fontSize: 22,
        color: 'white'
      },
      listButtons:{
        alignItems: 'center',
        justifyContent: 'center',
        // bottom: 10,
        // top:50
        width:'100%',
        height:'15%',
        color:'white',
        // borderColor: 'rgba(31, 39, 192,.5)',
        backgroundColor: 'rgba(0, 89, 91,.3)',
      }



});


//  const styles = StyleSheet.create({
//     tester: {
//       color: 'blue',
//       fontWeight: 'bold',
//       fontSize: 30,
//       textAlign: 'center',
//       marginBottom: '10%'
//     },
//     statsDivs: {
//       fontSize: 20,
//       color: 'red'
//     },
//   });
//
// export default styles
