import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import WebView from 'react-native-webview';

const DemoWebView = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  const handleNavigationStateChange = navState => {
    setCurrentUrl(navState.url || '');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: 35,
            }}>
            <Image
              source={require('../../assets/home.png')}
              style={{height: 35, width: 35, tintColor: 'black'}}
            />
            <TextInput
              style={{
                height: 30,
                width: 130,
                borderRadius: 30,
                backgroundColor: 'pink',
                padding: 7,
              }}
              value={currentUrl}
              onChangeText={setCurrentUrl}
            />
            <TouchableOpacity>
              <Text
                style={{fontSize: 35, fontWeight: '500', textAlign: 'center'}}>
                +
              </Text>
            </TouchableOpacity>
            <View
              style={{
                height: 20,
                width: 20,
                borderWidth: 2,
                borderColor: 'black',
                borderRadius: 5,
              }}></View>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Image
                source={require('../../assets/cross.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
          <WebView
            source={{
              uri: 'https://www.w3schools.com/REACT/react_getstarted.asp',
            }}
            style={{flex: 1}}
            onNavigationStateChange={handleNavigationStateChange}
          />
        </>
      </Modal>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Open Modal</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '95%',
    // height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  webview: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  closeBtn: {
    marginTop: 75,
    backgroundColor: 'skyblue',
    height: 50,
    width: 120,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default DemoWebView;
