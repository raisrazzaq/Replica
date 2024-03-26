import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import HomePage from './src/screens/home';
import CardDetails from './src/screens/FlipCard';

const Stack = createSharedElementStackNavigator();

const StackSreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        tabBar={props => <MyTabBar {...props} />}
        screenOptions={{headerShown: false}}>
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
    </NavigationContainer>
  );
};
export default StackSreen;
