import TodoList from './TodoList';
import Form from './Form';
import { getTodos } from '../api/todos';
import { useQuery } from 'react-query';

function TodoContainer() {
  const { data: todos, isLoading, isError } = useQuery('todos', getTodos);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  return (
    <div>
      <Form todos={todos} />
      <h2>📋</h2>
      <TodoList todos={todos} isDone={false} />
      <TodoList todos={todos} isDone={true} />
    </div>
  );
}

export default TodoContainer;
