import { useState } from 'react';
import { addTodo } from '../api/todos';
import { useMutation, useQueryClient } from 'react-query';

function Form() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const queryClient = useQueryClient();
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos'); // todos 무효화
    },
  });

  const postTodos = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      title,
      content,
      isDone: false,
    };

    mutation.mutate(newTodo);
    setTitle('');
    setContent('');
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
