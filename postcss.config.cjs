const fs = require('fs');
const path = require('path');

module.exports = (api) => {
  return {
    plugins: [
      'postcss-preset-env',
      [
        'postcss-sorting',
        {
          order: [
            'custom-properties',
            'dollar-variables',
            'at-variables',
            'declarations',
            'rules',
            'at-rules',
          ],
          'properties-order': 'alphabetical',
          'unspecified-properties-position': 'bottom',
        },
      ],
      'autoprefixer',
    ],
  };
};
