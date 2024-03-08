import { useMutation, useQueryClient } from 'react-query';
import { deleteTodo, patchTodo } from '../api/todos';
import { Todos } from '../types/todo';

function TodoList({ todos, isDone }) {
  const queryClient = useQueryClient();
  const mutation = useMutation(patchTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos'); // todos 무효화
    },
  });

  const isDoneHandler = (id, isDone) => {
    mutation.mutate(id, isDone);
  };

  const deletHandler = (id: string) => {
    deleteTodo(id);
  };

  return (
    <ul className="todo-ul">
      {todos
        .filter((todo: Todos) => todo.isDone === isDone)
        .map((todo: Todos) => (
          <li key={todo.id} className="todo-li">
            <h3>{todo.title}</h3>
            <p>{todo.content}</p>
            <section className="btn-section">
              <button
                className="status-btn"
                onClick={() => isDoneHandler(todo.id, todo.isDone)}
              >
                {todo.isDone ? 'finish' : 'ongoing'}
              </button>
              <button
                className="delete-btn"
                onClick={() => deletHandler(todo.id)}
              >
                delete
              </button>
            </section>
          </li>
        ))}
    </ul>
  );
}

export default TodoList;
