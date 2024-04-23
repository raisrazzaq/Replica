import React from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

const BottomSheet = ({visible, onClose, children}) => {
  <>
    <View style={styles.bottomModelView}>
      <Text style={styles.title}>Select Gender</Text>
      <TouchableOpacity>
        <Image
          source={require('../../assets/cross.png')}
          style={styles.crossImg}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.modal}>{children}</View>
  </>;
  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}>
        <TouchableOpacity style={styles.BackgroundVision}>
          <View style={styles.modal}>{children}</View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    height: 400,
    // justifyContent: 'space-between',
    // alignItems: 'center',
    bottom: 0,
    marginTop: 400,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  TouchableContent: {
    justifyContent: 'center',
  },
  BackgroundVision: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
});

export default BottomSheet;
