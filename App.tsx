// /* eslint-disable react/react-in-jsx-scope */
// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native';
// import HomePage from './src/screens/home';
// import MyTabBar from './src/screens/bottomTab';
// import Cart from './src/screens/carts';
// import Favourite from './src/screens/favourite';
// import Profile from './src/screens/profile';
// import StackSreen from './src/screens/stackScreen';

// const Tab = createBottomTabNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         tabBar={props => <StackSreen {...props} />}
//         screenOptions={{headerShown: false}}>
//         <Tab.Screen name="Home" component={HomePage} />
//         <Tab.Screen name="Cart" component={Cart} />
//         <Tab.Screen name="Favourite" component={Favourite} />
//         <Tab.Screen name="Profile" component={Profile} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// import {NavigationContainer} from '@react-navigation/native';
// import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
// import HomePage from './src/screens/home';
// import CardDetails from './src/screens/FlipCard';

// const Stack = createSharedElementStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         tabBar={props => <MyTabBar {...props} />}
//         screenOptions={{headerShown: false}}>
//         <Stack.Screen name="HomePage" component={HomePage} />
//         <Stack.Screen
//           name="CardDetails"
//           component={CardDetails}
//           sharedElementsConfig={(route, otherRoute, showing) => {
//             const {item} = route.params;
//             return [{id: `item${item.id}`, animation: 'move'}];
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export default App;
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './src/screens/home';
import MyTabBar from './src/screens/bottomTab';
import Cart from './src/screens/carts';
import Favourite from './src/screens/favourite';
import Profile from './src/screens/profile';
import CardDetails from './src/screens/FlipCard';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const Tab = createBottomTabNavigator();
const Stack = createSharedElementStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen
        name="CardDetails"
        component={CardDetails}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const {item} = route.params;
          return [{id: `item${item.id}`, animation: 'move'}];
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <MyTabBar {...props} />}
        screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Favourite" component={Favourite} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
