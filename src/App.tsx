import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import TodoContainer from './components/TodoContainer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>TodoList</h1>
      <TodoContainer />
    </QueryClientProvider>
  );
}

export default App;
