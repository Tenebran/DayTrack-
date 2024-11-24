import type { StorybookConfig } from '@storybook/react-webpack5';
import { Configuration } from 'webpack';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
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
  staticDirs: ['../public'],
  webpackFinal: async (config: Configuration) => {
    config.plugins = config.plugins?.filter(
      (plugin) => plugin?.constructor.name !== 'ESLintWebpackPlugin'
    );

    return config;
  },
};

export default config;
