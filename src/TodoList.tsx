import React, { ChangeEvent, FC, useState } from 'react';
import { FilterTaskType, TaskType } from './App';
import './Todolist.scss';

type TodoListPropsType = {
  title: string;
  tasks: TaskType[];
  filter: FilterTaskType;
  removeTask: (taskId: string) => void;
  changeFilter: (filter: FilterTaskType) => void;
  addTask: (task: string) => void;
  changeTaskStatus: (taskId: string, isDone: boolean) => void;
  changeTaskTitle: (taskId: string, title: string) => void;
};

export const TodoList: FC<TodoListPropsType> = ({
  title,
  tasks,
  filter,
  removeTask,
  changeFilter,
  addTask,
  changeTaskStatus,
  changeTaskTitle,
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [taskValue, setTaskValue] = useState<string>('');
  const [isInputVisible, setInputVisible] = useState<string>('');
  const [inputError, setInputError] = useState<boolean>(false);
  const userMessage = inputError ? (
    <span style={{ color: 'red' }}>Your tottle is too empty</span>
  ) : inputValue.length < 15 ? (
    <span>Enter New tasks</span>
  ) : (
    <span style={{ color: 'red' }}>Your title is to long</span>
  );

  const handlerInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    inputError && setInputError(false);
    const trimTaskTitle = event.target.value.trim();

    if (trimTaskTitle || event.target.value.length === 0) {
      setInputValue(event.target.value);
    } else {
      setInputError(true);
    }
  };

  const handleDoubleClick = (taskTitle: string, id: string) => {
    setInputVisible(id);
    setTaskValue(taskTitle);
  };

  const handlerTaskTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskValue(event.target.value);
  };

  const handleBlur = (id: string) => {
    changeTaskTitle(id, taskValue);
    setInputVisible('');
  };

  const handlerAddTask = () => {
    addTask(inputValue);

    setInputValue('');
  };
  const onChangeStatusHandler = (e: React.MouseEvent<HTMLInputElement>, id: string) => {
    changeTaskStatus(id, e.currentTarget.checked);
  };

  let taskList: JSX.Element[] = tasks.map(i => {
    const onclickRemoveTaskHandler = () => removeTask(i.id);

    return (
      <li>
        <input
          id={i.id}
          type="checkbox"
          checked={i.isDone}
          onClick={e => onChangeStatusHandler(e, i.id)}
        />
        {isInputVisible !== i.id ? (
          <span
            onDoubleClick={() => handleDoubleClick(i.title, i.id)}
            className={i.isDone ? 'task-done' : 'task'}
          >
            {i.title}
          </span>
        ) : (
          <input
            value={taskValue}
            onChange={handlerTaskTitleChange}
            onBlur={() => handleBlur(i.id)}
            onKeyDown={event => {
              event.key === 'Enter' && handlerAddTask();
            }}
          />
        )}
        <button onClick={onclickRemoveTaskHandler}>x</button>
      </li>
    );
  });

  return (
    <div className="todolist">
      <h3>{title}</h3>
      <div>
        <input
          className={inputError ? 'input-error' : undefined}
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
        <button
          onClick={() => changeFilter('all')}
          className={filter === 'all' ? 'task-filterBtn_active' : 'task-filterBtn'}
        >
          All
        </button>
        <button
          onClick={() => changeFilter('active')}
          className={filter === 'active' ? 'task-filterBtn_active' : 'task-filterBtn'}
        >
          Active
        </button>
        <button
          onClick={() => changeFilter('completed')}
          className={filter === 'completed' ? 'task-filterBtn_active' : 'task-filterBtn'}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
