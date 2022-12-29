import {configureStore} from '@reduxjs/toolkit';
import vehicleReducer from './vehicle-reducer';

const store = configureStore({
  reducer: {vehicle: vehicleReducer.reducer},
});

export default store;
