import React, { FC } from 'react';
import { FilterTaskType, TaskType } from './App';

type TodoListPropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (taskId: string) => void;
  changeFilter: (filter: FilterTaskType) => void;
};

export const TodoList: FC<TodoListPropsType> = ({ title, tasks, removeTask, changeFilter }) => {
  let taskList: JSX.Element[] = tasks.map(i => {
    const onclickRemoveTaskHandler = () => removeTask(i.id);

    return (
      <li>
        <input id={i.id} type="checkbox" checked={i.isDone} /> <span>{i.title}</span>
        <button onClick={onclickRemoveTaskHandler}>x</button>
      </li>
    );
  });

  return (
    <div className="todolist">
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>{tasks.length ? taskList : <span>Your taskList is empty</span>}</ul>
      <div>
        <button onClick={() => changeFilter('all')}>All</button>
        <button onClick={() => changeFilter('active')}>Active</button>
        <button onClick={() => changeFilter('completed')}>Completed</button>
      </div>
    </div>
  );
};
