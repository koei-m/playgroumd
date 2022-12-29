import {React, useContext, useMemo} from 'react';
import {View} from 'react-native';
import Slider from '@react-native-community/slider';
import {UiContext} from '../context/UiContextProvider';
import {getDynamicStyles} from './ControlSpeed.style';
const MAX = 180;
const MIN = 0;
const ControlSpeed = ({onValueChange}) => {
  const uiContext = useContext(UiContext);
  const width = uiContext.WINDOW.DEVICE_WIDTH * 0.8;
  const styles = useMemo(() => getDynamicStyles(width), [width]);

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={MIN}
        maximumValue={MAX}
        minimumTrackTintColor="#d5cfcf"
        maximumTrackTintColor="#000000"
        onValueChange={onValueChange}
      />
    </View>
  );
};

export default ControlSpeed;
