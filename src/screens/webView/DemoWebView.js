import {View, Text} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const DemoWebView = () => {
  return (
    <WebView
      source={{uri: 'https://www.w3schools.com/REACT/react_getstarted.asp'}}
      style={{flex: 1}}
    />
  );
};

export default DemoWebView;
