import { fetchTodoList } from '../service/todoAPi';
import { todoListTypes } from '../types/todoTypes';

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
