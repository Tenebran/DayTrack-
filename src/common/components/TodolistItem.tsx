import React from "react";
import { AddItemForm } from "./AddItemForm";
import { EditebleSpan } from "./EditebleSpan";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { ButtonGroup, IconButton, List } from "@mui/material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import {
  KeyTypeTodolist,
  TodolistDomainType,
  todolistsActions,
  todolistsThunk,
} from "../../features/todolists/todolists-reducer";
import { Task } from "./Task/Task";
import { taskThunks } from "../../features/tasks/tasks-reducer";
import { useAppDispatch } from "../../common/hooks/useAppDispatch";
import { useAppSelector } from "../../common/hooks/useAppSelector";
import { useTranslation } from "react-i18next";

const StyledButton = styled(Button)({
  margin: "0 2px",
  fontSize: "10px",
  height: "30px",
});

const ButtonGroupWrapper = styled("div")({
  maxWidth: "100%",
});
type TodoListItemProps = {
  todoList: TodolistDomainType;
  isLoggedIn: boolean;
};

export const TodoListItem = ({ todoList }: TodoListItemProps): JSX.Element => {
  const tasks = useAppSelector((state) => state.tasks[todoList.id]);
  const filterButtonGroup: KeyTypeTodolist[] = ["all", "active", "completed"];
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  let filteredTask = tasks;

  if (todoList.filter === "active") {
    filteredTask = tasks.filter((list) => list.status === 0);
  } else if (todoList.filter === "completed") {
    filteredTask = tasks.filter((list) => list.status === 2);
  }

  const addNewTask = (todolistID: string, title: string) => {
    dispatch(taskThunks.addTask({ todolistID, title }));
  };

  const deleteTodolist = (todolistId: string) => {
    dispatch(todolistsThunk.deleteTodolist({ todolistId }));
  };

  const changeTodolistTitle = (title: string, todolistId: string) => {
    dispatch(todolistsThunk.updateTodolist({ title, todolistId }));
  };

  const changeFilter = (changeValue: KeyTypeTodolist, todolistId: string) => {
    dispatch(
      todolistsActions.changeTodoListFilter({
        filter: changeValue,
        id: todolistId,
      }),
    );
  };

  return (
    <div>
      <h3>
        <EditebleSpan
          title={todoList.title}
          changeTitleHandler={(title) =>
            changeTodolistTitle(title, todoList.id)
          }
        />
        <IconButton
          size="small"
          color="primary"
          onClick={() => deleteTodolist(todoList.id)}
          disabled={todoList.entityStatus === "loading"}
        >
          <CancelPresentationIcon />
        </IconButton>
      </h3>
      <AddItemForm
        todoListsID={todoList.id}
        addItem={(title) => addNewTask(todoList.id, title)}
        maxLengthUserMeaasge={100}
        disabled={todoList.entityStatus === "loading"}
      />
      <ButtonGroupWrapper>
        <ButtonGroup fullWidth>
          {filterButtonGroup.map((filter) => (
            <StyledButton
              key={filter}
              size="small"
              variant={todoList.filter === filter ? "contained" : "outlined"}
              onClick={() =>
                changeFilter(filter as KeyTypeTodolist, todoList.id)
              }
            >
              {t(`todolist.filter.${filter.charAt(0) + filter.slice(1)}`)}
            </StyledButton>
          ))}
        </ButtonGroup>
      </ButtonGroupWrapper>

      <List>
        {filteredTask?.length ? (
          filteredTask.map((task) => (
            <Task key={task.id} task={task} todolistID={todoList.id} />
          ))
        ) : (
          <span>Your task list is empty</span>
        )}
      </List>
    </div>
  );
};
