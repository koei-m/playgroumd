import React from 'react';
import {SafeAreaView} from 'react-native';
import VehicleSpeedContainer from '../containers/VehicleSpeedContainer';
import ControlSpeedContainer from '../containers/ControlSpeedContainer';
const VehicleSpeedScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <VehicleSpeedContainer />
      <ControlSpeedContainer />
    </SafeAreaView>
  );
};

export default VehicleSpeedScreen;
