import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AddItemForm } from '../common/components/AddItemForm';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './storiesTheme';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'TodoLists/AddItemForm',
  component: AddItemForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    addItem: { action: 'clicked' },
    maxLengthUserMeaasge: { control: { type: 'number' } },
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof AddItemForm>;

export default meta;
type Story = StoryObj<typeof AddItemForm>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
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
