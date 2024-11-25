import React, { FC, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Grid2, Paper } from '@mui/material';
import { TodoListItem } from 'common/components/TodolistItem';
import { Navigate } from 'react-router-dom';
import {
  KeyTypeTodolist,
  SetTodolistsTC,
  todolistsActions,
  todolistsThunk,
} from 'common/pages/Todolist/todolists-reducer';
import { AddItemForm } from 'common/components/AddItemForm';
import { taskThunks } from 'common/components/Task/tasks-reducer';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { useAppDispatch } from 'common/hooks/useAppDispatch';

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
    dispatch(todolistsThunk.addTodolist({ title }));
  };

  const deleteTodolist = (todolistId: string) => {
    dispatch(todolistsThunk.deleteTodolist({ todolistId }));
  };

  const addNewTask = (todolistID: string, title: string) => {
    dispatch(taskThunks.addTask({ todolistID, title }));
  };

  const changeTodolistTitle = (title: string, todolistId: string) => {
    dispatch(todolistsThunk.updateTodolist({ title, todolistId }));
  };

  const changeFilter = (changeValue: KeyTypeTodolist, todolistId: string) => {
    dispatch(todolistsActions.changeTodoListFilter({ filter: changeValue, id: todolistId }));
  };

  const changeTaskStatus = (
    todoListId: string,
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(
      taskThunks.updateTask({
        id,
        todoListId,
        status: event.target.checked ? 2 : 0,
      })
    );
  };

  const changeTasksTitle = (todoListId: string, id: string, title: string) => {
    dispatch(taskThunks.updateTask({ todoListId, id, title }));
  };

  const removeTask = (todolistID: string, taskID: string) => {
    dispatch(taskThunks.removeTask({ todolistID, taskID }));
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
