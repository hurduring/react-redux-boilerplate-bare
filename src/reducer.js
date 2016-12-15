import { combineReducers } from 'redux';

const counterStore = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1100;
    default:
      return state;
  }
};

export default combineReducers({
  counter: counterStore,
});
