import React, { FC } from 'react';

type TodoListPropsType = {
  title: string;
  input: Array<{ id: string; isDone: boolean; title: string }>;
};

export const TodoList: FC<TodoListPropsType> = props => {
  return (
    <div className="todolist">
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {props.input.map(i => (
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
