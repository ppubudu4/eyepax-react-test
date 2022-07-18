import { todoListTypes } from '../types/todoTypes';

const initialState = {
  todoList: [],
  loading: false,
  errorMessage: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case todoListTypes.GET_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case todoListTypes.GET_TODO:
      return {
        ...state,
        loading: false,
        todoList: action.payload,
      };
    case todoListTypes.GET_TODO_ERROR_SHOW:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    case todoListTypes.GET_TODO_CLEAR:
      return {
        ...state,
        todoList: [],
        loading: false,
        errorMessage: null,
      };
    default:
      return state;
  }
};
