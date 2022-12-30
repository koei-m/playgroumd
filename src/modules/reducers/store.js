import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import vehicleReducer from './vehicle-reducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {vehicle: vehicleReducer.reducer, async: sagas.reducer},
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(sagas.rootSaga);

export default store;
