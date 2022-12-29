import {React, createContext} from 'react';
import {Dimensions} from 'react-native';
export const UiContext = createContext();

const COLORS = {
  accentColor: '#130b89',
  accentColor500: '#15c3ed',
  primaryColor: '#262626',
  primaryColor500: '#b2b2b2',
  backgroundColorDark: '#000000',
  backgroudColorLight: '#d7d7d7',
};
const {width: DEVICE_WIDTH, height: DEVICE_HEIGHT} = Dimensions.get('window');
const UiContextProvider = ({children}) => {
  return (
    <UiContext.Provider value={{COLORS, WINDOW: {DEVICE_WIDTH, DEVICE_HEIGHT}}}>
      {children}
    </UiContext.Provider>
  );
};

export default UiContextProvider;
