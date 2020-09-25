module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            AppTheme: './src/theme/',
            AppAssets: './src/assets/',
            AppFirebase: './src/firebase/',
            AppNetwork: './src/network/',
            AppUtils: './src/utils/',
            AppConstants: './src/constants/',
            AppNavigation: './src/navigation/',
            AppComponents: './src/components/',
            AppContainers: './src/containers/',
            AppActions: './src/actions/',
            AppReducers: './src/reducers/',
            AppStore: './src/store/',
            AppModels: './src/models/',
            AppConfig: './app.json',
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
