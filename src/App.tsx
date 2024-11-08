import React, { Reducer, useReducer } from 'react';
import './App.scss';
import { TodoList } from './TodoList';
import { AddItemForm } from './AddItemForm';
import {
  AppBar,
  Button,
  Container,
  Grid2,
  IconButton,
  Paper,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { v1 } from 'uuid';
import {
  ActionTypeTodolists,
  addTodolistAC,
  ChangeTodoListFilterAC,
  ChangeTodoListTitleAC,
  FilterTaskType,
  RemoveTodoListAC,
  todolistsReducer,
  TodoListType,
} from './reduces/todolists-reducer';
import {
  ActionTasksType,
  AddTaskTitleAC,
  ChangeTaskStatusAC,
  ChangeTaskTitleAC,
  RemoveTasksAC,
  tasksReducer,
  TasksStateType,
  TaskType,
} from './reduces/tasks-reducer';

const StyledGridInput = styled(Grid2)({
  margin: '10px 0',
});

const StyledPaper = styled(Paper)({
  padding: '15px',
});

function App() {
  const todoListId_1 = v1();
  const todoListId_2 = v1();

  const [todoLists, dispatchTodolists] = useReducer<Reducer<TodoListType[], ActionTypeTodolists>>(
    todolistsReducer,
    [
      { id: todoListId_1, title: 'What to learn', filter: 'all' },
      { id: todoListId_2, title: 'What to buy', filter: 'all' },
    ]
  );

  const [tasks, dispatchTasks] = useReducer<Reducer<TasksStateType, ActionTasksType>>(
    tasksReducer,
    {
      [todoListId_1]: [
        { id: v1(), isDone: true, title: 'HTML&CSS' },
        { id: v1(), isDone: true, title: 'JS' },
        { id: v1(), isDone: false, title: 'React' },
        { id: v1(), isDone: true, title: 'Redux' },
      ],

      [todoListId_2]: [
        { id: v1(), isDone: true, title: 'Milk' },
        { id: v1(), isDone: true, title: 'Bread' },
        { id: v1(), isDone: false, title: 'Meat' },
      ],
    }
  );

  const removeTask = (taskId: string, idTodolist: string) => {
    dispatchTasks(RemoveTasksAC(taskId, idTodolist));
  };

  const addTask = (taskTitle: string, idTodolist: string) => {
    dispatchTasks(AddTaskTitleAC(taskTitle, idTodolist));
  };

  const changeTaskStatus = (taskId: string, newIsDoneTaskStatus: boolean, idTodolist: string) => {
    dispatchTasks(ChangeTaskStatusAC(newIsDoneTaskStatus, taskId, idTodolist));
  };

  const changeTaskTitle = (taskId: string, title: string, idTodolist: string) => {
    dispatchTasks(ChangeTaskTitleAC(title, taskId, idTodolist));
  };

  const changeTodolistTitle = (title: string, idTodolist: string) => {
    dispatchTodolists(ChangeTodoListTitleAC(title, idTodolist));
  };

  const changeTodoListFilter = (nextFilterValue: FilterTaskType, idTodoList: string) => {
    dispatchTodolists(ChangeTodoListFilterAC(nextFilterValue, idTodoList));
  };

  const removeTodolist = (todolistID: string) => {
    dispatchTodolists(RemoveTodoListAC(todolistID));
  };

  const addTodoList = (title: string) => {
    dispatchTodolists(addTodolistAC(title));
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

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todolists
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container>
        <StyledGridInput container>
          <AddItemForm maxLengthUserMeaasge={15} addItem={addTodoList} />
        </StyledGridInput>
        <Grid2 container spacing={4}>
          {todoLists.map(t => {
            const filterdTasks: TaskType[] = getFilteredTasks(tasks[t.id], t.filter);
            return (
              <StyledPaper elevation={3} variant="outlined">
                <TodoList
                  key={t.id}
                  todoLists={t}
                  tasks={filterdTasks}
                  removeTask={removeTask}
                  changeFilter={changeTodoListFilter}
                  addTask={addTask}
                  changeTaskStatus={changeTaskStatus}
                  changeTaskTitle={changeTaskTitle}
                  removeTodolist={removeTodolist}
                  changeTodolistTitle={changeTodolistTitle}
                />
              </StyledPaper>
            );
          })}
        </Grid2>
      </Container>
    </>
  );
}

export default App;
