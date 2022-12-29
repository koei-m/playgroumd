import React from 'react';
import VehicleSpeedContainer from '../containers/VehicleSpeedContainer';
import ControlSpeedContainer from '../containers/ControlSpeedContainer';
import AnimatedViewContainer from '../containers/AnimatedViewContainer';
const VehicleSpeedScreen = () => {
  return (
    <>
      <AnimatedViewContainer />
      <VehicleSpeedContainer />
      <ControlSpeedContainer />
    </>
  );
};

export default VehicleSpeedScreen;
