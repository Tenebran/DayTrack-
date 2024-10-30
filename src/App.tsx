import React from 'react';
import './App.scss';
import { TodoList } from './TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
      <TodoList />
      <TodoList />
    </div>
  );
}

export default App;
