var path = require('path');
var webpack = require('webpack');

module.exports = {
  devServer: {
    inline: true,
    contentBase: './js',
    port: 3000
  },
  watch: true,
  devtool: 'cheap-module-eval-source-map',
  entry: './code/js/index.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,         // Match both .js and .jsx files
        exclude: /node_modules/,
        loader: "babel",
        query:
          {
            presets:['react', 'es2015']
          }
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  output: {
    path: 'src',
    filename: 'js/bundle.min.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};
