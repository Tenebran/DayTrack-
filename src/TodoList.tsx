import React, { FC } from 'react';
import './Todolist.scss';
import { TaskList } from './TaskList';
import { AddItemForm } from './AddItemForm';
import { EditebleSpan } from './EditebleSpan';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { ButtonGroup, IconButton } from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import {
  ChangeTodoListFilterAC,
  ChangeTodoListTitleAC,
  FilterTaskType,
  RemoveTodoListAC,
  TodoListType,
} from './reduces/todolists-reducer';
import { AddTaskTitleAC, TaskType } from './reduces/tasks-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from './redux/store';

const SyledButton = styled(Button)({
  margin: '0 2px 0 0',
});
console.log('test');
type TodoListPropsType = {
  todoLists: TodoListType;
};

export const TodoList: FC<TodoListPropsType> = ({ todoLists }) => {
  let tasks = useSelector<AppRootStateType, TaskType[]>(state => state.tasks[todoLists.id]);

  const dispatch = useDispatch();

  const addNewTask = (title: string) => {
    dispatch(AddTaskTitleAC(title, todoLists.id));
  };

  const handlerCreator = (filter: FilterTaskType) => () =>
    dispatch(ChangeTodoListFilterAC(filter, todoLists.id));

  const changeTodolistTitleHandler = (title: string) => {
    dispatch(ChangeTodoListTitleAC(title, todoLists.id));
  };

  const getFilteredTasks = (tasks: TaskType[], filter: FilterTaskType) => {
    switch (filter) {
      case 'active':
        return tasks.filter(t => !t.isDone);
      case 'completed':
        return tasks.filter(t => t.isDone);
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
            onClick={() => dispatch(RemoveTodoListAC(todoLists.id))}
          >
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
            filterdTasks.map(t => <TaskList task={t} todoListsID={todoLists.id} />)
          ) : (
            <span>Your taskList is empty</span>
          )}
        </ul>
      </div>
    </>
  );
};
