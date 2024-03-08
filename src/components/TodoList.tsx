import { useEffect, useState } from 'react';
import { supabase } from '../supabase/supabaseConfig';

type Todos = {
  content: string | null;
  createdAt: string;
  id: string;
  isDone: boolean | null;
  title: string | null;
};

function TodoList() {
  const supaData = supabase;
  console.log('supaData', supaData);

  const [todos, setTodos] = useState<Todos[]>([]);
  console.log('todos', todos);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      console.log('hi');
      const { data, error } = await supabase.from('todos').select('*');
      console.log(data);
      if (error) throw error;
      if (data !== null) setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      TodoList
      <ul>
        {todos.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
