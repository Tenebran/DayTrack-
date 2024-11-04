import React, { FC } from 'react';
import { FilterTaskType, TaskType, TodoListType } from './App';
import './Todolist.scss';
import { TaskList } from './TaskList';
import { AddItemForm } from './AddItemForm';
import { EditebleSpan } from './EditebleSpan';

type TodoListPropsType = {
  tasks: TaskType[];
  removeTask: (taskId: string, idTodolist: string) => void;
  changeFilter: (nextFilterValue: FilterTaskType, idTodoList: string) => void;
  addTask: (task: string, idTodolist: string) => void;
  changeTaskStatus: (taskId: string, isDone: boolean, idTodolist: string) => void;
  changeTaskTitle: (taskId: string, title: string, idTodolist: string) => void;
  todoLists: TodoListType;
  removeTodolist: (todolistID: string) => void;
  changeTodolistTitle: (title: string, idTodolist: string) => void;
};

export const TodoList: FC<TodoListPropsType> = ({
  todoLists,
  tasks,
  removeTask,
  changeFilter,
  addTask,
  changeTaskStatus,
  changeTaskTitle,
  removeTodolist,
  changeTodolistTitle,
}) => {
  const addNewTask = (title: string) => {
    addTask(title, todoLists.id);
  };

  const handlerCreator = (filter: FilterTaskType) => () => changeFilter(filter, todoLists.id);

  const changeTodolistTitleHandler = (title: string) => {
    changeTodolistTitle(title, todoLists.id);
  };

  return (
    <>
      <div className="todolist" key={todoLists.id}>
        <h3>
          <EditebleSpan title={todoLists.title} changeTitleHandler={changeTodolistTitleHandler} />
          <button onClick={() => removeTodolist(todoLists.id)}>x</button>
        </h3>
        <div className="input-wrapper">
          <AddItemForm todoListsID={todoLists.id} addItem={addNewTask} maxLengthUserMeaasge={15} />
        </div>
        <ul>
          {tasks.length ? (
            tasks.map(t => (
              <TaskList
                task={t}
                todoListsID={todoLists.id}
                changeTaskStatus={changeTaskStatus}
                changeTaskTitle={changeTaskTitle}
                removeTask={removeTask}
              />
            ))
          ) : (
            <span>Your taskList is empty</span>
          )}
        </ul>
        <div>
          <button
            onClick={handlerCreator('all')}
            className={todoLists.filter === 'all' ? 'task-filterBtn_active' : 'task-filterBtn'}
          >
            All
          </button>
          <button
            onClick={handlerCreator('active')}
            className={todoLists.filter === 'active' ? 'task-filterBtn_active' : 'task-filterBtn'}
          >
            Active
          </button>
          <button
            onClick={handlerCreator('completed')}
            className={
              todoLists.filter === 'completed' ? 'task-filterBtn_active' : 'task-filterBtn'
            }
          >
            Completed
          </button>
        </div>
      </div>
    </>
  );
};
