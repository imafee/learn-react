module.exports = function (api) {
  api.cache(true);
  // Plugins run before Presets.
  // Preset ordering is reversed (last to first).
  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.33.2',
      },
    ],
    '@babel/preset-react',
  ];
  // Plugin ordering is first to last.
  const plugins = [
    // proposal plugins
    ['@babel/plugin-proposal-decorators', { version: '2023-05' }],
    '@babel/plugin-proposal-function-bind',
  ];

  // if (process.env['NODE_ENV'] === 'production') {
  // plugins.push();
  // }

  return {
    presets,
    plugins,
  };
};
