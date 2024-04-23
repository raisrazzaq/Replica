import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const BottomTab = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'pink'}}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Gender</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BottomTab;
