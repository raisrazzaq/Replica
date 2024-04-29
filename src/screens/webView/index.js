import React, {useState} from 'react';
import {SafeAreaView, Modal, ActivityIndicator, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import {
  Container,
  TextinputModal,
  Wrapper,
  PlusSign,
  Box,
  CrossImgContainer,
  Button,
  ButtonText,
  HomeLogo,
  CloseImage,
} from './styles';

const DemoWebView = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const HomeImge = require('../../assets/home.png');
  const CrossImge = require('../../assets/cross.png');
  const handleNavigationStateChange = navState => {
    setCurrentUrl(navState.url || '');
  };
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <>
            <Container>
              <HomeLogo source={HomeImge} />

              <TextinputModal>
                {currentUrl}
                {setCurrentUrl}
              </TextinputModal>
              <Wrapper>
                <PlusSign>+</PlusSign>
              </Wrapper>
              <Box></Box>
              <CrossImgContainer onPress={() => setModalVisible(false)}>
                <CloseImage source={CrossImge} />
              </CrossImgContainer>
            </Container>
            {isLoading && (
              <ActivityIndicator
                size={'large'}
                color={'blue'}
                style={styles.loader}
              />
            )}
            <WebView
              source={{
                uri: 'https://www.w3schools.com/REACT/react_getstarted.asp',
              }}
              style={styles.webView}
              onNavigationStateChange={handleNavigationStateChange}
              onLoadStart={() => setIsLoading(true)}
              onLoadEnd={() => setIsLoading(false)}
            />
          </>
        </Modal>
        <Button onPress={() => setModalVisible(true)}>
          <ButtonText>Open Modal</ButtonText>
        </Button>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  webView: {
    flex: 1,
  },
});
export default DemoWebView;
