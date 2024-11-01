import React, { useState } from 'react';
import './App.scss';
import { TodoList } from './TodoList';

export type TaskType = {
  id: string;
  isDone: boolean;
  title: string;
};

export type FilterTaskType = 'all' | 'active' | 'completed';

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: crypto.randomUUID(), isDone: true, title: 'HTML&CSS' },
    { id: crypto.randomUUID(), isDone: true, title: 'JS' },
    { id: crypto.randomUUID(), isDone: false, title: 'React' },
    { id: crypto.randomUUID(), isDone: true, title: 'Redux' },
  ]);

  const [filter, setFilter] = useState<FilterTaskType>('all');

  const todoListTitle_1: string = 'What to learn';

  const removeTask = (taskId: string) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const addTask = (taskTitle: string) => {
    setTasks([...tasks, { id: crypto.randomUUID(), isDone: false, title: taskTitle }]);
  };

  const getFilteredTasksForRender = (allTask: TaskType[], filterValue: FilterTaskType) => {
    switch (filterValue) {
      case 'active':
        return allTask.filter(t => !t.isDone);
      case 'completed':
        return allTask.filter(t => t.isDone);
      default:
        return allTask;
    }
  };

  const filteredTasksForRender: TaskType[] = getFilteredTasksForRender(tasks, filter);

  const changeFilter = (nextFilterValue: FilterTaskType) => {
    setFilter(nextFilterValue);
  };

  return (
    <div className="App">
      <TodoList
        title={todoListTitle_1}
        tasks={filteredTasksForRender}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
      />
    </div>
  );
}

export default App;
