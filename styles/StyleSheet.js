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
      statsDivsCulture: {
        backgroundColor: 'rgba(54,133,181,.6)',
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
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center'
        // width: null,
        // height: null,
        //resizeMode:  'stretch' //or 'cover'
      },

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
