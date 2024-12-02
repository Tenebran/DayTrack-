import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AddItemForm } from '../common/components/AddItemForm';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './storiesTheme';

const meta = {
  title: 'TodoLists/AddItemForm',
  component: AddItemForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    addItem: { action: 'clicked' },
    maxLengthUserMeaasge: { control: { type: 'number' } },
  },
} satisfies Meta<typeof AddItemForm>;

export default meta;
type Story = StoryObj<typeof AddItemForm>;

export const AddItemFormStorie: Story = {
  args: {
    addItem: action('Clicked '),
    maxLengthUserMeaasge: 15,
  },
};

export const AppDarkThemeStorie: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => (
    <>
      <ThemeProvider theme={darkTheme}>
        <AddItemForm addItem={action('Clicked ')} maxLengthUserMeaasge={15} disabled={false} />
      </ThemeProvider>
    </>
  ),
};

export const AddItemFormErrorLongStories: Story = {
  args: {
    maxLengthUserMeaasge: 0,
  },
};

export const AppDarkThemeErrorStorie: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: (args) => (
    <>
      <ThemeProvider theme={darkTheme}>
        <AddItemForm {...args} />
      </ThemeProvider>
    </>
  ),
};
