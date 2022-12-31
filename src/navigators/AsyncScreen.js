import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncContainer from '../containers/AsyncContainer';
const AsyncScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AsyncContainer />
    </SafeAreaView>
  );
};

export default AsyncScreen;
