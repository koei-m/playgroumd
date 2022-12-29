import keyMirror from 'keymirror';
import {createAction, handleActions} from 'redux-actions';

const ActionTypes = keyMirror({
  UPDATE_SPEED: null,
});
const defaultState = {speed: 0};

const updateSpeed = createAction(ActionTypes.UPDATE_SPEED, payload => payload);

const vehicleActions = {updateSpeed};

const reducer = handleActions(
  {
    [ActionTypes.UPDATE_SPEED]: (state, action) => {
      const newState = {...state};
      newState.speed = action.payload;
      return newState;
    },
  },
  defaultState,
);

const selectSpeed = state => {
  return state.vehicle.speed;
};

export default {reducer, vehicleActions, ActionTypes, selectSpeed};
