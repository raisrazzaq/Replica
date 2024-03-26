/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Svg from 'react-native-svg';
import Home1SVG from '../../assets/home1.svg';
import Cart1SVG from '../../assets/cart1.svg';
import Person1SVG from '../../assets/person1.svg';
import FavouriteSVG from '../../assets/star.svg';
import Animated, {
  withTiming,
  Easing,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const MyTabBar = ({state, descriptors, navigation}) => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const iconComponents = [Home1SVG, Cart1SVG, FavouriteSVG, Person1SVG];
    setIcons(iconComponents);
  }, []);

  const translateX = useSharedValue(0);
  const config = {
    duration: 300,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };
  const style = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withTiming(translateX.value, config)}],
    };
  });
  useEffect(() => {
    translateX.value = state.index * 99;
  }, [state.index]);

  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <>
            <Animated.View style={[styles.animatedView, style]} />
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 12,
                paddingTop: 2,
              }}>
              <View
                style={[
                  styles.activeIcon,
                  {
                    backgroundColor: isFocused ? '#C53635' : 'transparent',
                    position: isFocused ? 'relative' : '',
                    bottom: isFocused ? 20 : 0,
                  },
                ]}>
                <Svg
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  {icons[index] &&
                    icons[index]({
                      width: 28,
                      height: 28,
                      fill: isFocused ? '#fff' : '#222',
                    })}
                </Svg>
              </View>
              <Text style={{color: isFocused ? '#000' : '#333'}}>{label}</Text>
            </TouchableOpacity>
          </>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  activeIcon: {
    width: 45,
    height: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyTabBar;
