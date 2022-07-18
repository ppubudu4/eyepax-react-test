import { authTypes } from '../types/authTypes';
const initialState = {
  authenticated: false,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case authTypes.LOGIN_USER:
      return {
        ...state,
        authenticated: true,
      };
    case authTypes.LOGIN_ERROR:
      return {
        ...state,
        authenticated: false,
        error: action.payload,
      };
    case authTypes.LOGOUT_USER:
      return {
        ...state,
        authenticated: false,
      };
    case authTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
