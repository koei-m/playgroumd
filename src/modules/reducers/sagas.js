import {call, put, takeEvery, all} from 'redux-saga/effects';
import {createAction, handleActions} from 'redux-actions';
import keyMirror from 'keymirror';
import Api from '../api/api';
const SagaActionTypes = keyMirror({
  GET_TIME_SUCCEEDED: null,
  GET_NAME_SUCCEEDED: null,
  GET_TIME_REQUESTED: null,
  GET_NAME_REQUESTED: null,
  GET_TIME_FAILED: null,
  GET_NAME_FAILED: null,
});

const defaultState = {name: null, time: null, isLoading: false};

const getTimeRequested = createAction(
  SagaActionTypes.GET_TIME_REQUESTED,
  payload => payload,
);

const getNameRequested = createAction(
  SagaActionTypes.GET_NAME_REQUESTED,
  payload => payload,
);

const getTimeSuceeded = createAction(
  SagaActionTypes.GET_TIME_SUCCEEDED,
  payload => payload,
);

const getNameSuceeded = createAction(
  SagaActionTypes.GET_NAME_SUCCEEDED,
  payload => payload,
);

const getTimeFailed = createAction(
  SagaActionTypes.GET_TIME_FAILED,
  payload => payload,
);

const getNameFailed = createAction(
  SagaActionTypes.GET_NAME_FAILED,
  payload => payload,
);

const asyncActions = {
  getTimeRequested,
  getNameRequested,
  getNameSuceeded,
  getTimeSuceeded,
  getTimeFailed,
  getNameFailed,
};

const reducer = handleActions(
  {
    [SagaActionTypes.GET_TIME_REQUESTED]: (state, action) => {
      const newState = {...state};
      newState.isLoading = true;
      return newState;
    },
    [SagaActionTypes.GET_NAME_REQUESTED]: (state, action) => {
      const newState = {...state};
      newState.isLoading = true;
      return newState;
    },
    [SagaActionTypes.GET_NAME_SUCCEEDED]: (state, action) => {
      const newState = {...state};
      newState.isLoading = false;
      newState.name = action.payload;
      return newState;
    },
    [SagaActionTypes.GET_NAME_SUCCEEDED]: (state, action) => {
      const newState = {...state};
      newState.isLoading = false;
      newState.time = action.payload;
      return newState;
    },
    [SagaActionTypes.GET_TIME_FAILED]: (state, action) => {
      const newState = {...state};
      newState.isLoading = false;
      console.log(action.payload);
      return newState;
    },
    [SagaActionTypes.GET_NAME_FAILED]: (state, action) => {
      const newState = {...state};
      newState.isLoading = false;
      console.log(action.payload);
      return newState;
    },
  },
  defaultState,
);

function* fetchName(action) {
  try {
    console.log('waiting...');
    const name = yield call(Api.get_name, action.payload.name);
    console.log('finished');
    yield put(getNameSuceeded(name));
  } catch (e) {
    yield put(getTimeFailed(e));
  }
}

function* fetchTime(action) {
  try {
    console.log('waiting...');
    const time = yield call(Api.get_time, action.payload.flag);
    console.log('finished');
    yield put(getTimeSuceeded(time));
  } catch (e) {
    yield put(getTimeFailed(e));
  }
}

function* watchTimeAsync() {
  yield takeEvery(SagaActionTypes.GET_TIME_REQUESTED, fetchTime);
}

function* watchNameAsync() {
  yield takeEvery(SagaActionTypes.GET_NAME_REQUESTED, fetchName);
}

function* rootSaga() {
  yield all([watchTimeAsync(), watchNameAsync()]);
}

export default {rootSaga, reducer, asyncActions, SagaActionTypes};
