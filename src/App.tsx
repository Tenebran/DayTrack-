import React, { useState } from 'react';
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

const StyledGridInput = styled(Grid2)({
  margin: '10px 0',
});

const StyledPaper = styled(Paper)({
  padding: '15px',
});

export type TaskType = {
  id: string;
  isDone: boolean;
  title: string;
};

export type FilterTaskType = 'all' | 'active' | 'completed';

export type TodoListType = {
  id: string;
  title: string;
  filter: FilterTaskType;
};

export type TasksStateType = {
  [todoListId_1: string]: TaskType[];
};

function App() {
  const todoListId_1 = crypto.randomUUID();
  const todoListId_2 = crypto.randomUUID();

  const [todoLists, setTodolists] = useState<TodoListType[]>([
    { id: todoListId_1, title: 'What to learn', filter: 'all' },
    { id: todoListId_2, title: 'What to buy', filter: 'all' },
  ]);

  const [tasks, setTasks] = useState<TasksStateType>({
    [todoListId_1]: [
      { id: crypto.randomUUID(), isDone: true, title: 'HTML&CSS' },
      { id: crypto.randomUUID(), isDone: true, title: 'JS' },
      { id: crypto.randomUUID(), isDone: false, title: 'React' },
      { id: crypto.randomUUID(), isDone: true, title: 'Redux' },
    ],

    [todoListId_2]: [
      { id: crypto.randomUUID(), isDone: true, title: 'Milk' },
      { id: crypto.randomUUID(), isDone: true, title: 'Bread' },
      { id: crypto.randomUUID(), isDone: false, title: 'Meat' },
    ],
  });

  const removeTask = (taskId: string, idTodolist: string) => {
    setTasks({ ...tasks, [idTodolist]: tasks[idTodolist].filter(t => t.id !== taskId) });
  };

  const addTask = (taskTitle: string, idTodolist: string) => {
    setTasks({
      ...tasks,
      [idTodolist]: [
        { id: crypto.randomUUID(), isDone: false, title: taskTitle },
        ...tasks[idTodolist],
      ],
    });
  };

  const changeTaskStatus = (taskId: string, newIsDoneTaskStatus: boolean, idTodolist: string) => {
    setTasks({
      ...tasks,
      [idTodolist]: tasks[idTodolist].map(t =>
        t.id === taskId ? { ...t, isDone: newIsDoneTaskStatus } : t
      ),
    });
  };

  const changeTaskTitle = (taskId: string, title: string, idTodolist: string) => {
    setTasks({
      ...tasks,
      [idTodolist]: [...tasks[idTodolist].map(t => (t.id === taskId ? { ...t, title: title } : t))],
    });
  };

  const changeTodolistTitle = (title: string, idTodolist: string) => {
    setTodolists(todoLists.map(t => (t.id === idTodolist ? { ...t, title: title } : t)));
  };

  const changeTodoListFilter = (nextFilterValue: FilterTaskType, idTodoList: string) => {
    setTodolists(todoLists.map(t => (t.id === idTodoList ? { ...t, filter: nextFilterValue } : t)));
  };

  const removeTodolist = (todolistID: string) => {
    setTodolists(todoLists.filter(t => t.id !== todolistID));
    // delete tasks[todolistID];
    const copyTasks = { ...tasks };
    delete copyTasks[todolistID];
    setTasks({ ...copyTasks });
  };

  const addTodoList = (title: string) => {
    const newTodoList: TodoListType = {
      id: crypto.randomUUID(),
      title,
      filter: 'all',
    };
    setTodolists([...todoLists, newTodoList]);

    setTasks({ ...tasks, [newTodoList.id]: [] });
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
    <div>
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
    </div>
  );
}

export default App;
