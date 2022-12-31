import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AnimatedViewContainer from '../containers/AnimatedViewContainer';
const AnimatedViewScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AnimatedViewContainer />
    </SafeAreaView>
  );
};

export default AnimatedViewScreen;
