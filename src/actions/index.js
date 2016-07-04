import types from './types';

export function authenticate(status){
  return {type: types.AUTHENTICATE, status}
};