import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
export const useWindowDimensions = () => {
  const [windowData, setWindowData] = useState(Dimensions.get('window'));
  useEffect(() => {
    const onWindowChange = result => {
      setWindowData(result.window);
    };

    const handler = Dimensions.addEventListener('change', onWindowChange);
    const cleanUp = () => {
      handler.remove();
    };
    return cleanUp;
  }, []);

  return {
    ...windowData,
    isLandscape: windowData.width > windowData.height,
  };
};
