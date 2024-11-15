import React, { ChangeEvent, FC, useEffect } from 'react';
import './Todolist.scss';
import { Task } from './Task';
import { AddItemForm } from './AddItemForm';
import { EditebleSpan } from './EditebleSpan';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { ButtonGroup, IconButton, List } from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import {
  ChangeTodoListFilterAC,
  ChangeTodoListTitleAC,
  FilterTaskType,
  RemoveTodoListAC,
  TodoListType,
} from './state/todolists-reducer';
import {
  AddTaskTitleAC,
  ChangeTaskStatusAC,
  ChangeTaskTitleAC,
  getTasksTC,
  RemoveTasksAC,
  TaskType,
} from './state/tasks-reducer';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from './redux/store';

const SyledButton = styled(Button)({
  margin: '0 2px 0 0',
});

type TodoListPropsType = {
  todoLists: TodoListType;
};

export const TodoList: FC<TodoListPropsType> = ({ todoLists }) => {
  const tasks = useAppSelector<TaskType[]>((state) => state.tasks[todoLists.id]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTasksTC(todoLists.id));
  }, []);

  const addNewTask = (title: string) => {
    dispatch(AddTaskTitleAC(title, todoLists.id));
  };

  const handlerCreator = (filter: FilterTaskType) => () =>
    dispatch(ChangeTodoListFilterAC(filter, todoLists.id));

  const changeTodolistTitleHandler = (title: string) => {
    dispatch(ChangeTodoListTitleAC(title, todoLists.id));
  };

  const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>, taskID: string) => {
    dispatch(ChangeTaskStatusAC(e.currentTarget.checked, taskID, todoLists.id));
  };

  const changeTaskTitleHandler = (title: string, taskID: string) => {
    dispatch(ChangeTaskTitleAC(title, taskID, todoLists.id));
  };

  const removeTaskHandler = (taskID: string) => {
    dispatch(RemoveTasksAC(taskID, todoLists.id));
  };

  const getFilteredTasks = (tasks: TaskType[], filter: FilterTaskType) => {
    switch (filter) {
      case 'active':
        return tasks.filter((t) => !t.isDone);
      case 'completed':
        return tasks.filter((t) => t.isDone);
      default:
        return tasks;
    }
  };
  const filterdTasks: TaskType[] = getFilteredTasks(tasks, todoLists.filter);

  return (
    <>
      <div className="todolist" key={todoLists.id}>
        <h3>
          <EditebleSpan title={todoLists.title} changeTitleHandler={changeTodolistTitleHandler} />
          <IconButton
            size={'small'}
            color="primary"
            onClick={() => dispatch(RemoveTodoListAC(todoLists.id))}>
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
            onClick={handlerCreator('all')}>
            All
          </SyledButton>
          <SyledButton
            size="small"
            variant={todoLists.filter === 'active' ? 'contained' : 'outlined'}
            onClick={handlerCreator('active')}>
            Active
          </SyledButton>
          <SyledButton
            size="small"
            variant={todoLists.filter === 'completed' ? 'contained' : 'outlined'}
            onClick={handlerCreator('completed')}>
            Completed
          </SyledButton>
        </ButtonGroup>
        <List>
          {tasks.length ? (
            filterdTasks.map((t) => (
              <Task
                key={t.id}
                task={t}
                changeStatusHandler={changeStatusHandler}
                changeTaskTitleHandler={changeTaskTitleHandler}
                removeTaskHandler={removeTaskHandler}
              />
            ))
          ) : (
            <span>Your taskList is empty</span>
          )}
        </List>
      </div>
    </>
  );
};
