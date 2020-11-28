
import * as actionTypes from '../actions/types';

const counterReducer = (state = 0, action) => {
  // state yönetimi işleri!
  // apiye bağlanılmaz!
  let newState;
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return (newState = state + action.payload);
    case actionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);
    case actionTypes.SET_COUNTER:
      return (newState = action.payload);
    default:
      return state;
  }
};

export default counterReducer;
