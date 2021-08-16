const path = require('path');
const WebpackElectronWatchPlugin = require('./webpack-electron-watch.plugin');

const rootDir = path.resolve(__dirname, '../');
const pathHelper = (...paths) => path.resolve(rootDir, ...paths);

module.exports = {
  mode: 'production',
  target: 'electron-main',
  entry: {
    main: pathHelper('main/main.ts'),
    'preload/default': pathHelper('main/preload/default.ts'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: { configFile: pathHelper('tsconfig.electron.json') },
      },
    ],
  },
  plugins: [
    new WebpackElectronWatchPlugin(),
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: '[name].js',
    path: pathHelper('main-release'),
  },
  optimization: {
    minimize: false,
  },
};
