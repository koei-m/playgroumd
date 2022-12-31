import React, {useState} from 'react';
import {Animated, View, StyleSheet, Button} from 'react-native';

const AnimatedViewContainer = () => {
  const [animations, _setAnimations] = useState({
    fadeAnim: new Animated.Value(1),
    scaleAnim: new Animated.Value(1),
    moveAnim: new Animated.Value(0),
    rotateAnim: new Animated.Value(0),
  });

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(animations.fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(animations.fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const scaleUp = () => {
    Animated.timing(animations.scaleAnim, {
      toValue: 2,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const scaleDown = () => {
    Animated.timing(animations.scaleAnim, {
      toValue: 0.5,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const moveToRight = () => {
    Animated.sequence([
      // decay, then spring to start and twirl
      Animated.spring(animations.moveAnim, {
        toValue: 300, // return to start
        useNativeDriver: true,
        duration: 1000,
      }),
      Animated.parallel([
        // after decay, in parallel:
        Animated.spring(animations.moveAnim, {
          toValue: 50, // return to start
          useNativeDriver: true,
          duration: 1000,
        }),
        Animated.timing(animations.rotateAnim, {
          // and twirl
          toValue: 360,
          useNativeDriver: true,
          duration: 1000,
        }),
      ]),
      Animated.spring(animations.rotateAnim, {
        // and twirl
        toValue: 0,
        useNativeDriver: true,
        duration: 1000,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: animations.fadeAnim,
            transform: [
              {scaleX: animations.scaleAnim},
              {scaleY: animations.scaleAnim},
              {translateX: animations.moveAnim},
              {
                rotate: animations.rotateAnim.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          },
        ]}
      />
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
        <Button title="Scale Up View" onPress={scaleUp} />
        <Button title="Scale Down View" onPress={scaleDown} />
        <Button title="Move" onPress={moveToRight} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
    position: 'absolute',
    left: 10,
    top: 10,
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});

export default AnimatedViewContainer;
