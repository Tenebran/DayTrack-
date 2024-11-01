import React, { ChangeEvent, FC, useState } from 'react';
import { FilterTaskType, TaskType } from './App';

type TodoListPropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (taskId: string) => void;
  changeFilter: (filter: FilterTaskType) => void;
  addTask: (task: string) => void;
};

export const TodoList: FC<TodoListPropsType> = ({
  title,
  tasks,
  removeTask,
  changeFilter,
  addTask,
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const userMessage =
    inputValue.length < 15 ? (
      <span style={{ color: 'red' }}>Enter New tasks</span>
    ) : (
      <span style={{ color: 'red' }}>Your title is to long</span>
    );

  const handlerInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handlerAddTask = () => {
    if (inputValue === '') {
      return;
    }
    addTask(inputValue.trim());
    setInputValue('');
  };

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
        <input
          value={inputValue}
          onChange={handlerInputChange}
          onKeyDown={event => {
            event.key === 'Enter' && handlerAddTask();
          }}
        />
        <button onClick={handlerAddTask} disabled={!inputValue.length || inputValue.length >= 15}>
          +
        </button>
        <div>{userMessage}</div>
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
