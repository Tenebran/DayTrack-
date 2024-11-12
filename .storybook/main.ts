import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const config: StorybookConfig = {
  stories: [path.join(__dirname, '../src/**/*.mdx'), path.join(__dirname, '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)')],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: [path.join(__dirname, '../public')],
};

export default config;
