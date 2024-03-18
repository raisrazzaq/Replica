import {View} from 'react-native';
import React from 'react';
import BottomTab from './src/screens/bottomTab';
import HomePage from './src/screens/home';

const App = () => {
  return (
    <>
      <HomePage />
      <BottomTab />
    </>
  );
};

export default App;