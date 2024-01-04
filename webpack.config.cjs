const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const envFile = require('./env.json');

module.exports = (env, args) => {
  process.env.NODE_ENV = process.env.BROWSERSLIST_ENV = env.mode;
  const ASSET_PATH = envFile[env.mode]['ASSET_PATH'];
  console.log('[[[ASSET_PATH]]]:::', ASSET_PATH);
  const isProduction = env.mode === 'production';
  const stylesHandler = isProduction
    ? MiniCssExtractPlugin.loader
    : 'style-loader';

  const config = {
    entry: {
      index: './src/index.js',
      // another: './src/another.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash:10].js',
      chunkFilename: 'chunk.[contenthash:10].js',
      clean: true, // clean dist folder before build
      publicPath: ASSET_PATH, // public path for assets
    },
    devServer: {
      static: './dist',
      host: 'localhost',
      historyApiFallback: true,
      open: true,
      hot: true,
    },
    devtool: 'inline-source-map',
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        minSize: 2000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 244 * 1024,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            filename: 'vendor.[contenthash:10].js',
            priority: -10,
            reuseExistingChunk: true,
          },
          commons: {
            filename: 'common.[contenthash:10].js',
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@asset': path.resolve(__dirname, './src/asset'),
        '@util': path.resolve(__dirname, './src/util'),
        '@comp': path.resolve(__dirname, './src/component'),
        '@demo': path.resolve(__dirname, './src/demo'),
      },
    },
    module: {},
  };

  // loader chain从右往左执行的，默认支持的文件类型：json、cjs、esm
  config.module.rules = [
    {
      test: /\.(mjs|js|jsx)$/i,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader',
    },
    {
      test: /\.css$/i,
      exclude: /node_modules/i,
      use: [
        stylesHandler,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[local]_[hash:base64:5]',
            },
          },
        },
        'postcss-loader',
      ],
    },
    {
      test: path.resolve(
        __dirname,
        './node_modules/modern-normalize/modern-normalize.css',
      ),
      use: [stylesHandler, 'css-loader'],
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
      exclude: /node_modules/i,
      type: 'asset',
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      exclude: /node_modules/i,
      type: 'asset',
    },
    {
      test: /\.xml$/i,
      exclude: /node_modules/i,
      use: ['xml-loader'],
    },
    {
      test: /\.(csv|tsv)$/i,
      exclude: /node_modules/i,
      use: ['csv-loader'],
    },
    {
      test: /\.toml$/i,
      exclude: /node_modules/i,
      type: 'json',
      parser: {
        parse: toml.parse,
      },
    },
    {
      test: /\.yaml$/i,
      exclude: /node_modules/i,
      type: 'json',
      parser: {
        parse: yaml.parse,
      },
    },
    {
      test: /\.json$/i,
      exclude: /node_modules/i,
      type: 'json',
      parser: {
        parse: json5.parse,
      },
    },
  ];
  config.plugins = [
    new HtmlWebpackPlugin({
      title: env.mode,
      filename: '[name].html',
      template: 'public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/favicon.ico'),
          to: 'favicon.ico',
        },
      ],
    }),
    new webpack.DefinePlugin({
      // 为运行环境注入ASSET_PATH
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),
  ];
  config.mode = env.mode;

  if (isProduction) {
    config.plugins.push(new MiniCssExtractPlugin());
  } else {
  }
  return config;
};
