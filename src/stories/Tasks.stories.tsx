import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Task, TaskProps } from '../Task';
import { action } from '@storybook/addon-actions';
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
  argTypes: {
    changeStatusHandler: { action: 'status changed' },
    changeTaskTitleHandler: { action: 'title changed' },
    removeTaskHandler: { action: 'task removed' },
  },
  args: {
  },
};

export default meta;

type Story = StoryObj<TaskProps>;

export const TaskStorie = () => {
  const [task, setTask] = useState({ id: '6', isDone: false, title: 'REACT TEST TASK' });

  const changeTaskTitleHandler = (title: string) => {
    setTask({ ...task, title });
  };

  const changeTaskStatusHandler = () => {
    setTask({ ...task, isDone: !task.isDone });
  };

  return (
    <Task
      task={task}
      changeStatusHandler={changeTaskStatusHandler}
      changeTaskTitleHandler={changeTaskTitleHandler}
      removeTaskHandler={action('Remove Task')}
    />
  );
};





export const TasksIsNotDoneStorie: Story = {

  render: (args: TaskProps) => (
    <Provider store={store}>
      <Task {...args} />
    </Provider>
  ),
  args: {
    task: { id: '6', isDone: false, title: 'REACT IS NOT DONE' },
  },
};


export const TasksIsNotDoneDarkThemeStorie: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: (args: TaskProps) => (
    <ThemeProvider theme={darkTheme}>
    <Provider store={store}>
      <CssBaseline />
      <Task {...args} />
    </Provider>
    </ThemeProvider>
  ),
  args: {
    task: { id: '6', isDone: false, title: 'REACT IS NOT DONE' },
  },
};

export const TasksIsDoneStorie: Story = {
  render: (args: TaskProps) => (
    <Provider store={store}>
      <Task {...args} />
    </Provider>
  ),
  args: {
    task: { id: '5', isDone: true, title: 'REACT IS DONE' },
  },
};

export const TasksIsDoneDarkThemeStorie: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },

  render: (args: TaskProps) => (
    <ThemeProvider theme={darkTheme}>
    <Provider store={store}>
    <CssBaseline />
      <Task {...args} />
    </Provider>
    </ThemeProvider>
  ),
  args: {
    task: { id: '5', isDone: true, title: 'REACT IS DONE' },
  },
};