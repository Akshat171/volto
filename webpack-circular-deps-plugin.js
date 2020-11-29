const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
  modifyWebpackConfig({ webpackConfig: config }) {
    const plugin = new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /node_modules/,
      // add errors to webpack instead of warnings
      failOnError: false,
      // allow import cycles that include an asyncronous import,
      // e.g. via import(/* webpackMode: "weak" */ './file.js')
      allowAsyncCycles: true,
      // set the current working directory for displaying module paths
      cwd: process.cwd(),
    });
    config.plugins.push(plugin);
    return config;
  },
};
