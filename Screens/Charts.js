import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
//import {  TouchableOpacity} from 'react-native'
const data = [
    {
        labels:'o',
        key: 1,
        amount: 90,
        svg: { fill: '#600080' }
    },
    {
        label:'r',
        key: 2,
        amount: 50,
        svg: { fill: '#9900cc' }
    },
    {   label:'y',
        key: 3,
        amount: 40,
        svg: { fill: '#c61aff' }
    },
    {
        label:'t',
        key: 4,
        amount: 95,
        svg: { fill: '#d966ff' }
    },
    {
       label:'j',
        key: 5,
        amount: 35,
        svg: { fill: '#ecb3ff' }
    }
]
class PieChartWithCenteredLabels extends React.PureComponent {
alertItemName = (item) => {
      alert("amount="+item.amount)
   }
    render() {



        return (
            <PieChart
                style={{ height: 600 }}
                valueAccessor={({ item }) => item.amount}
                data={data}
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
        )
    }

}

export default PieChartWithCenteredLabels

// //https://www.flaticon.com/free-icon/settings_263074
// import React, { Component } from 'react';
// import { Image, View, Text, StyleSheet } from 'react-native';
//
// import { Icon, Button, Container, Header, Content, Left } from 'native-base';
//   // const data = [
//   //     [0, 1],
//   //     [1, 3],
//   //     [3, 7],
//   //     [4, 9],
//   // ];
// const dummyGraphData = [
//   { name: 'culture', y: 50, },
//   { name: 'distance', y: 20, },
//   { name: '本', y: 10, },
//   { name: '娯楽', y: 15, },
//   { name: '生活費', y: 5, },
// ];
//
// class SettingsScreen extends Component {
//   static navigationOptions = {
//     drawerIcon: (
//       <Image source={require('../assets/settingsIcon.png')}
//              style={{height:24, width:24}} />
//     )
//   }
//
//   render() {
//     return (
//       <Container>
//         <Header style={{backgroundColor:'#246A73'}}>
//           <Left>
//             <Button transparent>
//               <Icon name='menu' onPress={()=>this.props.navigation.navigate('DrawerOpen')} />
//             </Button>
//           </Left>
//         </Header>
//         <Content contentContainerStyle={{
//           flex : 1,
//           alignItems : 'center',
//           justifyContent : 'center'
//         }}>
//         <Text> Settings Screen </Text>
//         </Content>
//       </Container>
//     );
//   }
// }
//
// export class Graph extends Component {
//    static navigationOptions = {
//     title: 'サマリー',
//     tabBarIcon: ({tintColor}) => <Foundation size={32} name="graph-pie" color={tintColor} />,
//     headerStyle: {
//       backgroundColor: '#aaaaff',
//     },
//     headerTintColor: '#333333',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//     },
//   };
//
//   render() {
//     var Highcharts='Highcharts';
//     var conf={
//       chart: {
//         backgroundColor: 'gray',
//         plotShadow: false,
//         type: 'pie',
//         animation: Highcharts.svg,
//       },
//       title: {
//         text: '費目別割合'
//       },
//       tooltip: {
//         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//       },
//       plotOptions: {
//         pie: {
//           allowPointSelect: true,
//           cursor: 'pointer',
//           dataLabels: {
//             enabled: true,
//             format: '<b>{point.name}</b>: {point.percentage:.1f} %',
//             style: {
//               color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'gray'
//             }
//           }
//         }
//       },
//       exporting: {
//         enabled: false
//       },
//       series: [{
//         name: '割合',
//         colorByPoint: true,
//         data: dummyGraphData
//       }],
//       credits: {
//         text: '',
//         href: '',
//       }
//     };
//
//     const options = {
//         global: {
//             useUTC: false
//         },
//         lang: {
//             decimalPoint: ',',
//             thousandsSep: '.'
//         }
//     };
//
//     return (
//       <ChartView style={styles.chart} config={conf} options={options} />
//     );
//   }
// }
//
// export default SettingsScreen;
//
//
// // //https://www.flaticon.com/free-icon/settings_263074
// // import React, { Component } from 'react';
// // import { Image, View, Text, StyleSheet } from 'react-native';
// //
// // import { Icon, Button, Container, Header, Content, Left } from 'native-base';
// // import Chart from 'react-native-chart';
// // class SettingsScreen extends Component {
// //   static navigationOptions = {
// //     drawerIcon: (
// //       <Image source={require('../assets/settingsIcon.png')}
// //              style={{height:24, width:24}} />
// //     )
// //   }
// //   const styles = StyleSheet.create({
// //       container: {
// //           flex: 1,
// //           justifyContent: 'center',
// //           alignItems: 'center',
// //           backgroundColor: 'white',
// //       },
// //       chart: {
// //           width: 200,
// //           height: 200,
// //       },
// //   });
// //
// //   const data = [
// //       [0, 1],
// //       [1, 3],
// //       [3, 7],
// //       [4, 9],
// //   ];
// //   render() {
// //     return (
// //       <View style={styles.container}>
// //           <Chart
// //               style={styles.chart}
// //               data={data}
// //               verticalGridStep={5}
// //               type="line"
// //            />
// //       </View>
// //     );
// //   }
// // }
// //
// // export default SettingsScreen;
