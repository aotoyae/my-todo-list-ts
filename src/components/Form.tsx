import axios from 'axios';
import { useState } from 'react';

function Form({ todos, setTodos }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  console.log(title, content);

  const postTodos = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      title,
      content,
      isDone: false,
    };

    axios.post('http://localhost:4000/todos', newTodo);
    setTitle('');
    setContent('');
    setTodos([...todos, newTodo]);
  };

  return (
    <form onSubmit={postTodos}>
      <input
        type="text"
        value={title}
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={content}
        placeholder="content"
        onChange={(e) => setContent(e.target.value)}
      />
      <button>click</button>
    </form>
  );
}

export default Form;
