import { authTypes } from '../types/authTypes';
const initialState = {
  authenticated: false,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
