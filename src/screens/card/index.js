import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SofaDetails} from '../../utlis/constants';
import {SharedElement} from 'react-navigation-shared-element';
import {useNavigation} from '@react-navigation/native';

const Card = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      {SofaDetails.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate('CardDetails', {item: item});
          }}>
          <View style={styles.Container}>
            <View style={styles.cardWrapper}>
              <SharedElement id={`item${item.id}`}>
                <Image style={styles.cardImg} source={item.Image} />
              </SharedElement>
              <View style={styles.cardContaner}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDesc}>by Pocco</Text>
                <Text style={styles.cardDesc}>
                  comfortable cushioning, high durability and long term
                  investment
                </Text>
                <View style={styles.bottomCardWrapper}>
                  <Text style={styles.Price}>$200</Text>
                  <TouchableOpacity style={styles.Touchable}>
                    <Text style={styles.BuyNow}>Buy</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  Container: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    zIndex: 1,
    marginTop: 20,
    left: (Width - Width * 0.9) / 2,
    justifyContent: 'center',
    padding: 10,
  },
  cardWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 8,
  },
  cardPressed: {
    height: Height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cardImg: {
    width: 120,
    height: 130,
    borderRadius: 15,
  },
  pressedImage: {
    marginTop: 10,
    marginBottom: 10,
    width: 350,
    height: 250,
  },
  cardContaner: {
    marginLeft: 10,
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardDesc: {
    color: 'gray',
    marginLeft: 2,
    marginRight: 10,
    lineHeight: 22,
  },
  bottomCardWrapper: {
    justifyContent: 'space-between',
    marginTop: 20,
    flexDirection: 'row',
  },
  Price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  Touchable: {
    backgroundColor: 'green',
    width: 50,
    borderRadius: 20,
  },
  BuyNow: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Card;
