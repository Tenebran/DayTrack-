import React from 'react';
import './App.scss';
import { TodoList } from './TodoList';

type TaskType = {
  id: string;
  isDone: boolean;
  title: string;
};

function App() {
  const todoListTitle_1: string = 'What to learn';
  const todoListTitle_2: string = 'What to buy';

  const tasks_1: TaskType[] = [
    { id: '1', isDone: true, title: 'HTML&CSS' },
    { id: '2', isDone: true, title: 'JS' },
    { id: '3', isDone: false, title: 'React' },
    { id: '4', isDone: true, title: 'Redux' },
  ];

  const tasks_2: TaskType[] = [
    { id: '5', isDone: true, title: 'Bread' },
    { id: '6', isDone: false, title: 'Chocolate' },
    { id: '7', isDone: false, title: 'Tea' },
    { id: '8', isDone: true, title: 'Cofe' },
  ];

  return (
    <div className="App">
      <TodoList title={todoListTitle_1} input={tasks_1} />
      <TodoList title={todoListTitle_2} input={tasks_2} />
    </div>
  );
}

export default App;
