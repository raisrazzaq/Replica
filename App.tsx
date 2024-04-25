// // /* eslint-disable react/react-in-jsx-scope */
// // import React from 'react';
// // import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// // import {NavigationContainer} from '@react-navigation/native';
// // import HomePage from './src/screens/home';
// // import MyTabBar from './src/screens/bottomTab';
// // import Cart from './src/screens/carts';
// // import Favourite from './src/screens/favourite';
// // import Profile from './src/screens/profile';
// // import StackSreen from './src/screens/stackScreen';

import {RNSVGForeignObject} from 'react-native-svg';

// // const Tab = createBottomTabNavigator();

// // const App = () => {
// //   return (
// //     <NavigationContainer>
// //       <Tab.Navigator
// //         tabBar={props => <StackSreen {...props} />}
// //         screenOptions={{headerShown: false}}>
// //         <Tab.Screen name="Home" component={HomePage} />
// //         <Tab.Screen name="Cart" component={Cart} />
// //         <Tab.Screen name="Favourite" component={Favourite} />
// //         <Tab.Screen name="Profile" component={Profile} />
// //       </Tab.Navigator>
// //     </NavigationContainer>
// //   );
// // };

// // export default App;

// // import {NavigationContainer} from '@react-navigation/native';
// // import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
// // import HomePage from './src/screens/home';
// // import CardDetails from './src/screens/FlipCard';

// // const Stack = createSharedElementStackNavigator();

// // const App = () => {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator
// //         tabBar={props => <MyTabBar {...props} />}
// //         screenOptions={{headerShown: false}}>
// //         <Stack.Screen name="HomePage" component={HomePage} />
// //         <Stack.Screen
// //           name="CardDetails"
// //           component={CardDetails}
// //           sharedElementsConfig={(route, otherRoute, showing) => {
// //             const {item} = route.params;
// //             return [{id: `item${item.id}`, animation: 'move'}];
// //           }}
// //         />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // };
// // export default App;
// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native';
// import HomePage from './src/screens/home';
// import MyTabBar from './src/screens/bottomTab';
// import Cart from './src/screens/carts';
// import Favourite from './src/screens/favourite';
// import Profile from './src/screens/profile';
// import CardDetails from './src/screens/FlipCard';
// import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
// import BottomSheet from './src/screens/bottomSheet';

// const Tab = createBottomTabNavigator();
// const Stack = createSharedElementStackNavigator();

// const HomeStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen name="BottomSheet" component={BottomSheet} />
//       <Stack.Screen name="HomePage" component={HomePage} />
//       <Stack.Screen
//         name="CardDetails"
//         component={CardDetails}
//         sharedElementsConfig={(route, otherRoute, showing) => {
//           const {item} = route.params;
//           return [{id: `item${item.id}`, animation: 'move'}];
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         tabBar={props => <MyTabBar {...props} />}
//         screenOptions={{headerShown: false}}>
//         {/* <Tab.Screen name="BottomSheet" component={BottomSheet} /> */}
//         <Tab.Screen name="Home" component={HomeStack} />
//         <Tab.Screen name="Cart" component={Cart} />
//         <Tab.Screen name="Favourite" component={Favourite} />
//         <Tab.Screen name="Profile" component={Profile} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import React, {useState} from 'react';
// import BottomSheet from './src/componentss/BottomSheet';
// import {
//   Button,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
// } from 'react-native';

// const App = () => {
//   const [visible, setVisible] = useState(false);

//   return (
//     <GestureHandlerRootView>
//       <SafeAreaView>
//         <BottomSheet visible={visible} onClose={() => setVisible(false)}>
//           <View style={styles.bottomModelView}>
//             <Text style={styles.title}>Select Gender</Text>
//             <TouchableOpacity onPress={() => setVisible(false)}>
//               <Image
//                 source={require('./src/assets/cross.png')}
//                 style={styles.crossImg}
//               />
//             </TouchableOpacity>
//           </View>
//           <View style={styles.wrapper}>
//             <TouchableOpacity>
//               <Image
//                 source={require('./src/assets/circle.png')}
//                 style={styles.circleBox}
//               />
//             </TouchableOpacity>

//             <Text style={styles.heading}>Male</Text>
//           </View>
//           <View style={styles.wrapper}>
//             <TouchableOpacity>
//               <Image
//                 source={require('./src/assets/circle.png')}
//                 style={styles.circleBox}
//               />
//             </TouchableOpacity>

//             <Text style={styles.heading}>Female</Text>
//           </View>
//           <View style={styles.wrapper}>
//             <TouchableOpacity>
//               <Image
//                 source={require('./src/assets/circle.png')}
//                 style={styles.circleBox}
//               />
//             </TouchableOpacity>

//             <Text style={styles.heading}>Prefer not to identify</Text>
//           </View>
//           <TouchableOpacity style={styles.btn}>
//             <Text style={styles.btnText}>Done</Text>
//           </TouchableOpacity>
//         </BottomSheet>
//         <Button title="Open Bottom Sheet" onPress={() => setVisible(true)}>
//           Open Bottom Sheet
//         </Button>
//       </SafeAreaView>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   bottomModelView: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     gap: 20,
//     paddingVertical: 20,
//     borderBottomColor: 'gray',
//     borderBottomWidth: 2,
//     width: '100%',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   crossImg: {
//     height: 25,
//     width: 25,
//   },
//   wrapper: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     gap: 10,
//     paddingVertical: 20,
//     borderBottomColor: 'gray',
//     borderBottomWidth: 2,
//     marginHorizontal: 15,
//   },
//   circleBox: {
//     height: 25,
//     width: 25,
//   },
//   heading: {
//     fontSize: 20,
//   },
//   btn: {
//     height: 40,
//     width: '90%',
//     backgroundColor: 'blue',
//     borderRadius: 10,
//     marginTop: 40,
//     alignSelf: 'center',
//   },
//   btnText: {
//     color: 'white',
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     padding: 5,
//   },
// });

// export default App;

// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import React, {useState} from 'react';
// import BottomSheet from './src/componentss/BottomSheet';
// import {
//   Button,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
// } from 'react-native';
// import WebView from './src/screens/webView/WebView';

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   const [selectedGender, setSelectedGender] = useState(null);

//   const handleGenderSelection = gender => {
//     setSelectedGender(gender === selectedGender ? null : gender);
//   };

//   return (
//     <GestureHandlerRootView>
//       <SafeAreaView>
//         <BottomSheet
//           visible={visible}
//           onClose={() => setVisible(false)}
//           title={'Select Gender'}
//           DoneText={'Done'}>
//           <View style={styles.wrapper}>
//             <TouchableOpacity onPress={() => handleGenderSelection('male')}>
//               <View
//                 style={[
//                   styles.circleBox,
//                   selectedGender === 'male' && styles.selectedCircle,
//                 ]}
//               />
//             </TouchableOpacity>
//             <Text style={styles.heading}>Male</Text>
//           </View>
//           <View style={styles.wrapper}>
//             <TouchableOpacity onPress={() => handleGenderSelection('female')}>
//               <View
//                 style={[
//                   styles.circleBox,
//                   selectedGender === 'female' && styles.selectedCircle,
//                 ]}
//               />
//             </TouchableOpacity>
//             <Text style={styles.heading}>Female</Text>
//           </View>
//           <View style={styles.wrapper}>
//             <TouchableOpacity onPress={() => handleGenderSelection('other')}>
//               <View
//                 style={[
//                   styles.circleBox,
//                   selectedGender === 'other' && styles.selectedCircle,
//                 ]}
//               />
//             </TouchableOpacity>
//             <Text style={styles.heading}>Prefer not to identify</Text>
//           </View>
//         </BottomSheet>
//         <Button title="Open Bottom Sheet" onPress={() => setVisible(true)}>
//           Open Bottom Sheet
//         </Button>
//       </SafeAreaView>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   wrapper: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     gap: 10,
//     paddingVertical: 20,
//     borderBottomColor: '#D3D3D3,',
//     borderBottomWidth: 1,
//     marginHorizontal: 20,
//   },
//   circleBox: {
//     height: 15,
//     width: 15,
//     borderRadius: 12.5,
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   selectedCircle: {
//     backgroundColor: '#194595',
//     borderColor: '#194595',
//   },
//   heading: {
//     fontSize: 15,
//   },
// });

// export default App;

import {View, Text} from 'react-native';
import React from 'react';
import DemoWebView from './src/screens/webView/DemoWebView';

const App = () => {
  return <DemoWebView />;
};

export default App;
