import React, { FC, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Grid2, Paper } from '@mui/material';
import { useAppDispatch, useAppSelector } from './redux/store';
import { TodoListItem } from 'TodolistItem';
import { Navigate } from 'react-router-dom';
import {
  addTodolistTC,
  DelteTodolistTC,
  KeyTypeTodolist,
  SetTodolistsTC,
  todolistsActions,
  UpdateTodolistTC,
} from 'state/todolists-reducer';
import { AddItemForm } from 'AddItemForm';
import {
  changeTasksStatusTC,
  changeTasksTitleTC,
  removeTasksTC,
  taskThunks,
} from 'state/tasks-reducer';

const StyledPaper = styled(Paper)({ padding: '16px', marginBottom: '16px' });

const StyledGridInput = styled(Grid2)({
  margin: '10px 0',
});

export type TodolistFilterValue = 'all' | 'active' | 'completed';

export type TodolistFilterType = {
  id: string;
  filter: TodolistFilterValue;
};

export const TodoList: FC = () => {
  const todoLists = useAppSelector((state) => state.todolists);
  const tasks = useAppSelector((state) => state.tasks);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoggedIn) return;
    dispatch(SetTodolistsTC());
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const addTodoList = (title: string) => {
    dispatch(addTodolistTC(title));
  };

  const deleteTodolist = (todoListId: string) => {
    dispatch(DelteTodolistTC(todoListId));
  };

  const addNewTask = (todolistID: string, title: string) => {
    dispatch(taskThunks.addTask({ todolistID, title }));
  };

  const changeTodolistTitle = (title: string, todolistID: string) => {
    dispatch(UpdateTodolistTC(todolistID, title));
  };

  const changeFilter = (changeValue: KeyTypeTodolist, todolistId: string) => {
    dispatch(todolistsActions.changeTodoListFilter({ filter: changeValue, id: todolistId }));
  };

  const changeTaskStatus = (
    todoListID: string,
    taskID: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(changeTasksStatusTC(todoListID, taskID, event.target.checked ? 2 : 0));
  };

  const changeTasksTitle = (todolistID: string, taskID: string, title: string) => {
    dispatch(changeTasksTitleTC(todolistID, taskID, title));
  };

  const removeTask = (todolistID: string, taskID: string) => {
    dispatch(removeTasksTC(todolistID, taskID));
  };

  return (
    <>
      <StyledGridInput container>
        <AddItemForm maxLengthUserMeaasge={15} addItem={addTodoList} />
      </StyledGridInput>
      <Grid2 container spacing={4} alignItems="stretch">
        {todoLists.map((todoList) => {
          return (
            <StyledPaper elevation={3} key={todoList.id}>
              <TodoListItem
                todoList={todoList}
                tasks={tasks[todoList.id]}
                isLoggedIn={isLoggedIn}
                deleteTodolist={deleteTodolist}
                addNewTask={addNewTask}
                changeTodolistTitle={changeTodolistTitle}
                changeFilter={changeFilter}
                changeTaskStatus={changeTaskStatus}
                changeTasksTitle={changeTasksTitle}
                removeTask={removeTask}
              />
            </StyledPaper>
          );
        })}
      </Grid2>
    </>
  );
};
