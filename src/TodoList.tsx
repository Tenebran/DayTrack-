import React, { FC } from 'react';
import { TaskType } from './App';

type TodoListPropsType = {
  title: string;
  tasks: TaskType[];
};

export const TodoList: FC<TodoListPropsType> = ({ title, tasks }) => {
  return (
    <div className="todolist">
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {tasks.map(i => (
          <li>
            <input id={i.id} type="checkbox" checked={i.isDone} /> <span>{i.title}</span>
          </li>
        ))}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};
