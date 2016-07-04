import types from '../actions/types';

export default function(state = false, action){
  switch (action.type) {
    case types.AUTHENTICATE:
      return action.status;

    default:
      return state;
  }
}