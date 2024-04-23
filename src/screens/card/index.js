// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   Image,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import {SofaDetails} from '../../utlis/constants';
// import {SharedElement} from 'react-navigation-shared-element';
// import {useNavigation} from '@react-navigation/native';

// const Card = () => {
//   const navigation = useNavigation();

//   return (
//     <ScrollView>
//       {SofaDetails.map((item, index) => (
//         <TouchableOpacity
//           key={index}
//           onPress={() => {
//             navigation.navigate('CardDetails', {item: item});
//           }}>
//           <View style={styles.Container}>
//             <View style={styles.cardWrapper}>
//               <SharedElement id={`item${item.id}`}>
//                 <Image style={styles.cardImg} source={item.Image} />
//               </SharedElement>
//               <View style={styles.cardContaner}>
//                 <Text style={styles.cardTitle}>{item.title}</Text>
//                 <Text style={styles.cardDesc}>by Pocco</Text>
//                 <Text style={styles.cardDesc}>
//                   comfortable cushioning, high durability and long term
//                   investment
//                 </Text>
//                 <View style={styles.bottomCardWrapper}>
//                   <Text style={styles.Price}>$200</Text>
//                   <TouchableOpacity style={styles.Touchable}>
//                     <Text style={styles.BuyNow}>Buy</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// };

// const Width = Dimensions.get('window').width;
// const Height = Dimensions.get('window').height;

// const styles = StyleSheet.create({
//   Container: {
//     width: '90%',
//     backgroundColor: 'white',
//     borderRadius: 15,
//     alignItems: 'center',
//     zIndex: 1,
//     marginTop: 20,
//     left: (Width - Width * 0.9) / 2,
//     justifyContent: 'center',
//     padding: 10,
//   },
//   cardWrapper: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     marginLeft: 8,
//   },
//   cardPressed: {
//     height: Height,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'column',
//   },
//   cardImg: {
//     width: 120,
//     height: 130,
//     borderRadius: 15,
//   },
//   pressedImage: {
//     marginTop: 10,
//     marginBottom: 10,
//     width: 350,
//     height: 250,
//   },
//   cardContaner: {
//     marginLeft: 10,
//     flex: 1,
//   },
//   cardTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   cardDesc: {
//     color: 'gray',
//     marginLeft: 2,
//     marginRight: 10,
//     lineHeight: 22,
//   },
//   bottomCardWrapper: {
//     justifyContent: 'space-between',
//     marginTop: 20,
//     flexDirection: 'row',
//   },
//   Price: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'gray',
//   },
//   Touchable: {
//     backgroundColor: 'green',
//     width: 50,
//     borderRadius: 20,
//   },
//   BuyNow: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default Card;

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import {SofaDetails} from '../../utlis/constants';
import {SharedElement} from 'react-navigation-shared-element';
import {useNavigation} from '@react-navigation/native';

const Card = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = item => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <ScrollView>
      {SofaDetails.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => openModal(item)}>
          <View style={styles.Container}>
            <View style={styles.cardWrapper}>
              <SharedElement id={`item${item.id}`}>
                <Image style={styles.cardImg} source={item.Image} />
              </SharedElement>
              <View style={styles.cardContaner}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDesc}>{item.by}</Text>
                <Text style={styles.cardDesc}>{item.Description}</Text>
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          {selectedItem && (
            <View style={styles.modalContent}>
              <Image style={styles.modalImage} source={selectedItem.Image} />
              <Text style={styles.modalTitle}>{selectedItem.title}</Text>
              <Text style={styles.ModelcardDesc}>{selectedItem.by}</Text>
              <Text style={styles.ModelcardDesc}>
                {selectedItem.Description}
              </Text>
              <View style={styles.CollorBottomWrapper}>
                <View style={styles.ColorTabe}>
                  <Text style={styles.ColorText}>Colors</Text>
                  <View style={styles.CollorBox}></View>
                  <View style={styles.CollorBoxPink}></View>
                  <View style={styles.CollorBoxPurple}></View>
                </View>
                <View style={styles.CounterDiv}>
                  <TouchableOpacity onPress={() => increment()}>
                    <Text style={styles.PlusSign}> + </Text>
                  </TouchableOpacity>
                  <Text style={styles.counting}> {count} </Text>
                  <TouchableOpacity onPress={decrement}>
                    <Text style={styles.MinusSign}> - </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.ModelbottomCardWrapper}>
                <Text style={styles.ModelPrice}>$200</Text>
                <TouchableOpacity style={styles.ModelTouchable}>
                  <Text style={styles.ModelBuyNow}>Buy</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
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
  cardImg: {
    width: 120,
    height: 130,
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
    width: 50,
    borderRadius: 20,
  },
  BuyNow: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    height: '90%',
  },
  modalImage: {
    width: 350,
    height: 250,
    borderRadius: 15,
    alignSelf: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  ModelcardDesc: {
    color: 'gray',
    // marginLeft: 2,
    marginRight: 10,
    lineHeight: 22,
  },
  ModelbottomCardWrapper: {
    justifyContent: 'space-between',
    marginTop: 40,
    flexDirection: 'row',
    marginBottom: 20,
  },
  ModelPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  ModelTouchable: {
    backgroundColor: 'green',
    width: 50,
    borderRadius: 20,
  },
  ModelBuyNow: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 15,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  CollorBottomWrapper: {
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 40,
  },
  ColorTabe: {
    flexDirection: 'row',
  },
  ColorText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
    marginRight: 15,
  },
  CollorBox: {
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    marginLeft: 3,
  },
  CollorBoxPink: {
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: 'lightpink',
    justifyContent: 'center',
    marginLeft: 3,
  },
  CollorBoxPurple: {
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: 'purple',
    justifyContent: 'center',
    marginLeft: 3,
  },
  CounterDiv: {
    backgroundColor: 'lightgray',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  PlusSign: {
    fontSize: 20,
    fontWeight: '600',
  },
  MinusSign: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Card;
