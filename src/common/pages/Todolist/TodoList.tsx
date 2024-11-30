import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Grid2, Paper } from "@mui/material";
import { TodoListItem } from "../../../common/components/TodolistItem";
import { Navigate } from "react-router-dom";
import {
  SetTodolistsTC,
  todolistsThunk,
} from "../../../features/todolists/todolists-reducer";
import { AddItemForm } from "../../../common/components/AddItemForm";
import { useAppSelector } from "../../../common/hooks/useAppSelector";
import { useAppDispatch } from "../../../common/hooks/useAppDispatch";

const StyledPaper = styled(Paper)({
  padding: "16px",
  marginBottom: "16px",
  width: "312px",
});

const StyledGridInput = styled(Grid2)({
  margin: "10px 0",
});

export type TodolistFilterValue = "all" | "active" | "completed";

export type TodolistFilterType = {
  id: string;
  filter: TodolistFilterValue;
};

export const TodoList = (): JSX.Element => {
  const todoLists = useAppSelector((state) => state.todolists);
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

  return (
    <>
      <StyledGridInput container>
        <AddItemForm maxLengthUserMeaasge={100} addItem={addTodoList} />
      </StyledGridInput>
      <Grid2 container spacing={4} alignItems="stretch" justifyContent="center">
        {todoLists.map((todoList) => {
          return (
            <StyledPaper elevation={3} key={todoList.id}>
              <TodoListItem todoList={todoList} isLoggedIn={isLoggedIn} />
            </StyledPaper>
          );
        })}
      </Grid2>
    </>
  );
};
