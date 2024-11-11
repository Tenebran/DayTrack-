import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Task, TaskProps } from '../Task';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';

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
    todoListsID: 'todolist1',
  },
};

export default meta;

type Story = StoryObj<TaskProps>;

export const TaskStorie = () => {
  const [task, setTask] = useState({ id: '6', isDone: false, title: 'REACT TEST TASK' });

  const changeTaskTitleHandler = (title: string, taskID: string) => {
    setTask({ ...task, title });
  };

  const changeTaskStatusHandler = (e: React.ChangeEvent<HTMLInputElement>, taskID: string) => {
    setTask({ ...task, isDone: !task.isDone });
  };

  return (
    <Task
      task={task}
      todoListsID="todolist1"
      changeStatusHandler={changeTaskStatusHandler}
      changeTaskTitleHandler={changeTaskTitleHandler}
      removeTaskHandler={action('Remove Task')}
    />
  );
};

export const TaskDarkThemeStorie = () => {
  const [task, setTask] = useState({ id: '6', isDone: false, title: 'REACT TEST TASK' });

  const changeTaskTitleHandler = (title: string, taskID: string) => {
    setTask({ ...task, title });
  };

  const changeTaskStatusHandler = (e: React.ChangeEvent<HTMLInputElement>, taskID: string) => {
    setTask({ ...task, isDone: !task.isDone });
  };

  return (
    <Task
      task={task}
      todoListsID="todolist1"
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
