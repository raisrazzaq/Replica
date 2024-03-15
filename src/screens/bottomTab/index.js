import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);
const BottomTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const animatedX = useSharedValue(0);
  const animatedY = useSharedValue(0);

  const animatedBtn1Y = useSharedValue(0);
  const animatedBtn2Y = useSharedValue(0);
  const animatedBtn3Y = useSharedValue(0);
  const animatedBtn4Y = useSharedValue(0);
  useEffect(() => {
    if (selectedTab == 0) {
      animatedY.value = withTiming(0, {duration: 500});
      animatedX.value = withTiming(0, {durration: 500});

      setTimeout(() => {
        animatedBtn1Y.value = withTiming(-200, {duration: 500});
        animatedY.value = withTiming(-200, {duration: 500});
        setTimeout(() => {
          animatedY.value = withTiming(0, {duration: 500});
          animatedBtn1Y.value = withTiming(0, {duration: 500});
        }, 200);
      }, 1000);
    } else if (selectedTab == 1) {
      animatedY.value = withTiming(0, {duration: 500});
      animatedX.value = withTiming(100, {durration: 500});
      setTimeout(() => {
        animatedBtn2Y.value = withTiming(-200, {duration: 500});
        animatedY.value = withTiming(-100, {duration: 500});
        setTimeout(() => {
          animatedBtn2Y.value = withTiming(0, {duration: 500});
          animatedY.value = withTiming(0, {duration: 500});
        }, 200);
      }, 1000);
    } else if (selectedTab == 2) {
      animatedY.value = withTiming(0, {duration: 500});
      animatedX.value = withTiming(200, {durration: 500});
      setTimeout(() => {
        animatedBtn3Y.value = withTiming(-200, {duration: 500});
        animatedY.value = withTiming(-100, {duration: 500});
        setTimeout(() => {
          animatedBtn3Y.value = withTiming(0, {duration: 500});
          animatedY.value = withTiming(0, {duration: 500});
        }, 200);
      }, 1000);
    } else {
      animatedY.value = withTiming(0, {duration: 500});
      animatedX.value = withTiming(300, {durration: 500});
      setTimeout(() => {
        animatedBtn4Y.value = withTiming(-200, {duration: 500});
        animatedY.value = withTiming(-100, {duration: 500});
        setTimeout(() => {
          animatedBtn4Y.value = withTiming(0, {duration: 500});
          animatedY.value = withTiming(0, {duration: 500});
        }, 200);
      }, 1000);
    }
  }, [selectedTab]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animatedX.value}, {translateY: animatedY.value}],
    };
  });

  const animatedBtnStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedBtn1Y.value}],
    };
  });

  const animatedBtnStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedBtn2Y.value}],
    };
  });

  const animatedBtnStyle3 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedBtn3Y.value}],
    };
  });

  const animatedBtnStyle4 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedBtn4Y.value}],
    };
  });

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Animated.View
          style={[
            {
              height: 60,
              width: 60,
              borderRadius: 30,
              backgroundColor: 'orange',
              position: 'absolute',
            },
            animatedStyle,
          ]}></Animated.View>
        <AnimatedBtn
          style={[
            {
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }.animatedBtnStyle1,
          ]}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image style={styles.img} source={require('../../assets/home.png')} />
        </AnimatedBtn>
        <AnimatedBtn
          style={[
            {
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }.animatedBtnStyle2,
          ]}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image style={styles.img} source={require('../../assets/cart.png')} />
        </AnimatedBtn>
        <AnimatedBtn
          style={[
            {
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }.animatedBtnStyle3,
          ]}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            style={styles.img}
            source={require('../../assets/favourite.png')}
          />
        </AnimatedBtn>
        <AnimatedBtn
          style={[
            {
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }.animatedBtnStyle4,
          ]}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            style={styles.img}
            source={require('../../assets/profile.png')}
          />
        </AnimatedBtn>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'pink',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },

  TouchBtn: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },

  wrapper: {},
});
export default BottomTab;
