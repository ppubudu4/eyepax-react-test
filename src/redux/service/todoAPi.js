import axiosHttp from '../../http/axioshttp';

export const fetchTodoList = async () => {
  const res = await axiosHttp.get('/todos');
  return res;
};

export const fetchTodoDetail = async (id) => {
  const res = await axiosHttp.get(`/todos/${id}`);
  return res;
};
