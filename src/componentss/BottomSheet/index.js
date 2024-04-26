import React from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';

const BottomSheet = ({visible, onClose, children, title, DoneText}) => {
  return (
    <SafeAreaView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}>
        <Pressable style={styles.BackgroundVision} onPress={onClose}>
          <View style={styles.modal}>
            <View style={styles.bottomModelView}>
              <Text style={styles.title}>{title}</Text>
              <TouchableOpacity onPress={onClose}>
                <Image
                  source={require('../../assets/cross.png')}
                  style={styles.crossImg}
                />
              </TouchableOpacity>
            </View>
            {children}
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>{DoneText}</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'red',
    height: 400,
    bottom: 0,
    marginTop: 450,
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
  bottomModelView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    paddingVertical: 20,
    borderBottomColor: '#D3D3D3,',
    borderBottomWidth: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  crossImg: {
    height: 25,
    width: 25,
  },
  btn: {
    height: 40,
    width: '90%',
    backgroundColor: '#194595',
    borderRadius: 10,
    marginTop: 40,
    alignSelf: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
});

export default BottomSheet;
