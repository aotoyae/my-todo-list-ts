import axios from 'axios';
import { Todos } from '../types/todo';

// todos 가져오기
export const getTodos = async () => {
  const response = await axios.get(import.meta.env.VITE_APP_SERVER_URL);
  return response.data;
};

// todo 추가
export const addTodo = async (newTodo: Todos) => {
  await axios.post(import.meta.env.VITE_APP_SERVER_URL, newTodo);
};

// todo isDone 수정
export const patchTodo = async (todo: Todos) => {
  await axios.patch(`${import.meta.env.VITE_APP_SERVER_URL}/${todo.id}`, {
    isDone: !todo.isDone,
  });
};

// todo 삭제
export const deleteTodo = async (id: string) => {
  const isDelete = confirm('삭제하시겠습니까?');
  isDelete &&
    (await axios.delete(`${import.meta.env.VITE_APP_SERVER_URL}/${id}`));
};
