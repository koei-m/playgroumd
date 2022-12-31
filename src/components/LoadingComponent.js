import {React, useContext, useMemo} from 'react';
import {View, Text} from 'react-native';
import {UiContext} from '../context/UiContextProvider';
import {getDynamicStyles} from './ControlSpeed.style';
const LoadingComponent = ({onValueChange}) => {
  const uiContext = useContext(UiContext);
  const width = uiContext.WINDOW.DEVICE_WIDTH * 0.8;
  const styles = useMemo(() => getDynamicStyles(width), [width]);

  return (
    <View style={styles.container}>
      <Text>Loading</Text>
    </View>
  );
};

export default LoadingComponent;
