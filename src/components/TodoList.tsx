import { useMutation, useQueryClient } from 'react-query';
import { deleteTodo, patchTodo } from '../api/todos';
import { Todos } from '../types/todo';

function TodoList({ todos, isDone }: { todos: Todos; isDone: boolean }) {
  const queryClient = useQueryClient();
  const patchMutation = useMutation(patchTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos'); // todos 무효화
    },
  });

  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos'); // todos 무효화
    },
  });

  return (
    <>
      <h4>{isDone ? 'finish' : 'ongoing'}</h4>
      <ul className="todo-ul">
        {todos.map((todo: Todos) => (
          <li key={todo.id} className="todo-li">
            <h3>{todo.title}</h3>
            <p>{todo.content}</p>
            <section className="btn-section">
              <button
                className="status-btn"
                onClick={() => patchMutation.mutate(todo)}
              >
                {todo.isDone ? 'finish' : 'ongoing'}
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteMutation.mutate(todo.id)}
              >
                delete
              </button>
            </section>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
