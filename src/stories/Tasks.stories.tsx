import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { Task, TaskPropsType } from '../common/components/Task/Task';
import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './storiesTheme';
import { CssBaseline } from '@mui/material';

const meta: Meta<typeof Task> = {
  title: 'TodoLists/Task',
  component: Task,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<TaskPropsType>;

export const TaskStorie = () => {
  const [task, setTask] = useState({
    id: '6',
    status: 0,
    title: 'REACT TEST TASK',
    todoListId: 'todoListId',
  });

  const changeTaskTitleHandler = (title: string) => {
    setTask({ ...task, title });
  };

  const changeTaskStatusHandler = () => {
    setTask({ ...task, status: task.status === 2 ? 0 : 2 });
  };

  return (
    <Provider store={store}>
      <Task task={task} todolistID="todoListId" />
    </Provider>
  );
};

export const TasksIsNotDoneStorie: Story = {
  render: (args: TaskPropsType) => (
    <Provider store={store}>
      <Task {...args} />
    </Provider>
  ),
  args: {
    task: {
      id: '6',
      status: 0,
      title: 'REACT IS NOT DONE',
      deadline: null,
      todoListId: 'todoListId2',
    },
  },
};

export const TasksIsNotDoneDarkThemeStorie: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: (args: TaskPropsType) => (
    <ThemeProvider theme={darkTheme}>
      <Provider store={store}>
        <CssBaseline />
        <Task {...args} />
      </Provider>
    </ThemeProvider>
  ),
  args: {
    task: {
      id: '6',
      status: 0,
      title: 'REACT IS NOT DONE',
      todoListId: 'todoListId3',
    },
  },
};

export const TasksIsDoneStorie: Story = {
  render: (args: TaskPropsType) => (
    <Provider store={store}>
      <Task {...args} />
    </Provider>
  ),
  args: {
    task: {
      id: '5',
      status: 2,
      title: 'REACT IS DONE',
      todoListId: 'todoListId',
    },
  },
};

export const TasksIsDoneDarkThemeStorie: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },

  render: (args: TaskPropsType) => (
    <ThemeProvider theme={darkTheme}>
      <Provider store={store}>
        <CssBaseline />
        <Task {...args} />
      </Provider>
    </ThemeProvider>
  ),
  args: {
    task: {
      id: '5',
      status: 0,
      title: 'REACT IS DONE',
      todoListId: 'todoListId',
    },
  },
};
