import './App.css';

import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <h1>TodoList</h1>
      <form>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="content" />
        <button>click</button>
      </form>
      <TodoList />
    </>
  );
}

export default App;
