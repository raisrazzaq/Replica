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
import {useRoute, useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';

const CardDetails = () => {
  const route = useRoute();
  const {item} = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.cardPressed}>
          <SharedElement id={`item${item.id}`}>
            <Image style={styles.pressedImage} source={item.Image} />
          </SharedElement>
          <View style={styles.cardContaner}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>by Pocco</Text>
            <Text style={styles.cardDesc}>
              comfortable cushioning, high durability and long term investment
            </Text>
            <View style={styles.bottomCardWrapper}>
              <Text style={styles.Price}>$200</Text>
              <TouchableOpacity
                style={styles.Touchable}
                onPress={() => navigation.goBack()}>
                <Text style={styles.BuyNow}>Go Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
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
    marginTop: 15,
    marginBottom: 10,
    width: 350,
    height: 250,
    borderRadius: 15,
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
    width: 80,
    borderRadius: 20,
  },
  BuyNow: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CardDetails;
