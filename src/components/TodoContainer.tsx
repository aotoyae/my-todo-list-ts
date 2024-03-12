import TodoList from './TodoList';
import Form from './Form';
import { getTodos } from '../api/todos';
import { useQuery } from 'react-query';
import { Todo } from '../types/todo';

function TodoContainer() {
  const { data: todos, isLoading, isError } = useQuery('todos', getTodos);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  const ongoingTodos = todos.filter((todo: Todo) => todo.isDone === false);
  const finishTodos = todos.filter((todo: Todo) => todo.isDone === true);

  return (
    <div>
      <Form />
      <h2>📋</h2>
      <TodoList todos={ongoingTodos} isDone={false} />
      <TodoList todos={finishTodos} isDone={true} />
    </div>
  );
}

export default TodoContainer;
