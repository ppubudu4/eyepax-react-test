import { todoListTypes, todoDetailTypes } from '../types/todoTypes';

const initialState = {
  todoList: [],
  loading: false,
  errorMessage: null,

  todoDetail: null,
  detailLoading: false,
  detailErrorMessage: false,
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

    case todoDetailTypes.GET_TODO_DETAIL_LOADING:
      return { ...state, detailLoading: true };
    case todoDetailTypes.GET_TODO_DETAIL:
      return {
        ...state,
        detailLoading: false,
        todoDetail: action.payload,
      };
    case todoDetailTypes.GET_TODO_DETAIL_CLEAR:
      return {
        ...state,
        todoDetail: null,
        detailLoading: false,
        detailErrorMessage: false,
      };
    default:
      return state;
  }
};
