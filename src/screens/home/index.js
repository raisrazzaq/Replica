import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import Card from '../card';

const HomePage = () => {
  const [selectedItem, setSelectedItem] = useState('All');

  const handleItemPress = item => {
    setSelectedItem(item);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'whitesmoke'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Furniture </Text>
        <Text style={styles.textyourchoice}>Your Furniture </Text>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.inputWrapper}>
          <Image
            style={styles.img}
            source={require('../../assets/search.png')}
          />
          <TextInput placeholder="Search" style={styles.textInput} />
        </View>
        <Image
          style={styles.imgfilter}
          source={require('../../assets/filterIC.png')}
        />
      </View>
      <View style={styles.item}>
        <TouchableOpacity
          style={[
            styles.touchableItem,
            selectedItem === 'All' && {backgroundColor: 'gray'},
          ]}
          onPress={() => {
            handleItemPress('All');
          }}>
          <Text
            style={[
              styles.textitem,
              selectedItem === 'All' && {color: 'white'},
            ]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.touchableItem,
            selectedItem === 'Chair' && {backgroundColor: 'gray'},
          ]}
          onPress={() => {
            handleItemPress('Chair');
          }}>
          <Text
            style={[
              styles.textitem,
              selectedItem === 'Chair' && {color: 'white'},
            ]}>
            Chair
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.touchableItem,
            selectedItem === 'Table' && {backgroundColor: 'gray'},
          ]}
          onPress={() => handleItemPress('Table')}>
          <Text
            style={[
              styles.textitem,
              selectedItem === 'Table' && {color: 'white'},
            ]}>
            Table
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.touchableItem,
            selectedItem === 'Lamp' && {backgroundColor: 'gray'},
          ]}
          onPress={() => handleItemPress('Lamp')}>
          <Text
            style={[
              styles.textitem,
              selectedItem === 'Lamp' && {color: 'white'},
            ]}>
            Lamp
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.touchableItem,
            selectedItem === 'Floor' && {backgroundColor: 'gray'},
          ]}
          onPress={() => handleItemPress('Floor')}>
          <Text
            style={[
              styles.textitem,
              selectedItem === 'Floor' && {color: 'white'},
            ]}>
            Floor
          </Text>
        </TouchableOpacity>
      </View>

      <Card />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: 'center',
    marginLeft: 20,
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textyourchoice: {
    fontSize: 17,
    color: 'gray',
    marginLeft: 7,
  },
  wrapper: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'space-between',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    flex: 1,
  },
  img: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  imgfilter: {
    height: 40,
    width: 40,
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
    marginLeft: 5,
    fontSize: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  touchableItem: {
    padding: 5,
    borderRadius: 12,
  },
  textitem: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '600',
  },
});

export default HomePage;
