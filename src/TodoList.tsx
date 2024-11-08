import React, { FC } from 'react';
import './Todolist.scss';
import { TaskList } from './TaskList';
import { AddItemForm } from './AddItemForm';
import { EditebleSpan } from './EditebleSpan';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { ButtonGroup, IconButton } from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { FilterTaskType, TodoListType } from './reduces/todolists-reducer';
import { TaskType } from './reduces/tasks-reducer';

const SyledButton = styled(Button)({
  margin: '0 2px 0 0',
});

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
          <IconButton size={'small'} color="primary" onClick={() => removeTodolist(todoLists.id)}>
            <CancelPresentationIcon />
          </IconButton>
        </h3>
        <div className="input-wrapper">
          <AddItemForm todoListsID={todoLists.id} addItem={addNewTask} maxLengthUserMeaasge={15} />
        </div>
        <ButtonGroup fullWidth>
          <SyledButton
            size="small"
            variant={todoLists.filter === 'all' ? 'contained' : 'outlined'}
            onClick={handlerCreator('all')}
          >
            All
          </SyledButton>
          <SyledButton
            size="small"
            variant={todoLists.filter === 'active' ? 'contained' : 'outlined'}
            onClick={handlerCreator('active')}
          >
            Active
          </SyledButton>
          <SyledButton
            size="small"
            variant={todoLists.filter === 'completed' ? 'contained' : 'outlined'}
            onClick={handlerCreator('completed')}
          >
            Completed
          </SyledButton>
        </ButtonGroup>
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
      </div>
    </>
  );
};
