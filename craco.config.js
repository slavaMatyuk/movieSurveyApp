import cracoAlias from 'craco-alias';

export const plugins = [
  {
    plugin: cracoAlias,
    options: {
      baseUrl: './src',
      source: 'tsconfig',
      tsConfigPath: './tsconfig.paths.json',
    },
  },
];
