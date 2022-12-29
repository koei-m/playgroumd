import React from 'react';
import {Provider} from 'react-redux';
import store from './src/modules/redux/store';
import VehicleSpeedScreen from './src/navigators/VehicleSpeedScreen';
import UiContextProvider from './src/context/UiContextProvider';

export default function App() {
  return (
    <Provider store={store}>
      <UiContextProvider>
        <VehicleSpeedScreen />
      </UiContextProvider>
    </Provider>
  );
}
