import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Content = ({selectedGender, setSelectedGender, closeModal}) => {
  const handleGenderSelection = gender => {
    setSelectedGender(gender);
  };

  const handleDone = () => {
    console.log('Selected Gender:', selectedGender);
    closeModal();
  };

  return (
    <View style={styles.content}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Select Gender</Text>
        <TouchableOpacity onPress={closeModal}>
          <Text style={styles.closeButton}>Close</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => handleGenderSelection('Male')}
        style={styles.checkboxContainer}>
        <Text style={styles.genderText}>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleGenderSelection('Female')}
        style={styles.checkboxContainer}>
        <Text style={styles.genderText}>Female</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleGenderSelection('Others')}
        style={styles.checkboxContainer}>
        <Text style={styles.genderText}>Others</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.DoneBtn} onPress={handleDone}>
        <Text style={styles.doneText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Content;
