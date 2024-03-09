export type Todos = {
  map(
    arg0: (todo: Todos) => import('react/jsx-runtime').JSX.Element
  ): import('react').ReactNode;
  id: string;
  content: string;
  title: string;
  isDone: boolean;
};
