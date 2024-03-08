type Todos = {
  id: string;
  content: string;
  title: string;
  isDone: boolean;
};

import axios from 'axios';
import { useEffect, useState } from 'react';
import TodoList from './TodoList';
import Form from './Form';

function TodoContainer() {
  const [todos, setTodos] = useState<Todos[]>([]);

  const fetchTodos = async () => {
    const { data } = await axios.get('http://localhost:4000/todos');
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todos);
  const ongoingTodos = todos.filter((todo) => todo.isDone === false);
  const finishTodos = todos.filter((todo) => todo.isDone === true);

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <h2>📋</h2>
      <TodoList todos={ongoingTodos} setTodos={setTodos} />
      <TodoList todos={finishTodos} setTodos={setTodos} />
    </div>
  );
}

export default TodoContainer;
