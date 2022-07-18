import { fetchTodoList, fetchTodoDetail } from '../service/todoAPi';
import { todoListTypes, todoDetailTypes } from '../types/todoTypes';

export const getTodoListAction = () => async (dispatch) => {
  try {
    dispatch(todoLoading());

    const response = await fetchTodoList();

    dispatch({ type: todoListTypes.GET_TODO, payload: response.data });
  } catch (error) {
    dispatch({
      type: todoListTypes.GET_TODO_ERROR_SHOW,
      payload: error.response.message,
    });
  }
};

export const todoLoading = () => async (dispatch) => {
  dispatch({ type: todoListTypes.GET_TODO_LOADING });
};
export const todoListClear = () => async (dispatch) => {
  dispatch({ type: todoListTypes.GET_TODO_CLEAR });
};

/**
 *
 * action for get todo details
 */
export const getTodoDetailAction = (id) => async (dispatch) => {
  try {
    dispatch(todoDetailLoading());

    const response = await fetchTodoDetail(id);
    console.log(response);
    dispatch({ type: todoDetailTypes.GET_TODO_DETAIL, payload: response.data });
  } catch (error) {
    dispatch({
      type: todoDetailTypes.GET_TODO_DETAIL_ERROR_SHOW,
      payload: error.response.message,
    });
  }
};

export const todoDetailLoading = () => async (dispatch) => {
  dispatch({ type: todoDetailTypes.GET_TODO_DETAIL_LOADING });
};
export const todoDetailClear = () => async (dispatch) => {
  dispatch({ type: todoDetailTypes.GET_TODO_DETAIL_CLEAR });
};
