const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'kedlfront.js',
  },
  optimization: {
    minimize: true, // Enable minimization
    minimizer: [new TerserPlugin()], // Use TerserPlugin for minification
  },
};
