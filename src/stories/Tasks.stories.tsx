import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { TaskList, TaskListProps } from '../TaskList';

const meta: Meta<typeof TaskList> = {
  title: 'TodoLists/Task',
  component: TaskList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    todoListsID: 'todolist1',
  },
};

export default meta;

type Story = StoryObj<TaskListProps>;

export const TasksStorie: Story = {
  render: (args: TaskListProps) => (
    <Provider store={store}>
      <TaskList {...args} />
    </Provider>
  ),
  args: {
    task: { id: '6', isDone: false, title: 'TEST REACT' },
  },
};

export const TasksIsDoneStorie: Story = {
  render: (args: TaskListProps) => (
    <Provider store={store}>
      <TaskList {...args} />
    </Provider>
  ),
  args: {
    task: { id: '5', isDone: true, title: 'REACT IS DONE' },
  },
};
