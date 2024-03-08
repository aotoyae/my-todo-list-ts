import axios from 'axios';

function TodoList({ todos, setTodos }) {
  const deleteTodo = async (id: string) => {
    const isDelete = confirm('삭제하시겠습니까?');
    isDelete && axios.delete(`http://localhost:4000/todos/${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const patchTodo = async (id: string, isDone: boolean) => {
    axios.patch(`http://localhost:4000/todos/${id}`, {
      isDone: !isDone,
    });

    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !isDone } : { todo };
      })
    );
  };

  return (
    <ul className="todo-ul">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-li">
          <h3>{todo.title}</h3>
          <p>{todo.content}</p>
          <section className="btn-section">
            <button
              className="status-btn"
              onClick={() => patchTodo(todo.id, todo.isDone)}
            >
              {todo.isDone ? 'finish' : 'ongoing'}
            </button>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
              delete
            </button>
          </section>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
