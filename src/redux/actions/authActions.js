import { authTypes } from '../types/authTypes';

export const login = (data, navigate) => async (dispatch) => {
  try {
    const user = { username: 'admin', password: 'admin' };
    if (user.username === data?.username && user?.password === data?.password) {
      dispatch({ type: authTypes.LOGIN_USER });
      navigate('/');
    } else {
      dispatch({
        type: authTypes.LOGIN_ERROR,
        payload: 'Please Enter Correct Username or Password',
      });
    }
  } catch (error) {
    dispatch({
      type: AuthTypes.LOGIN_ERROR,
      payload: error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: authTypes.LOGOUT_USER });
};
