const path = require('path');

module.exports = {
  entry: {
    javascript: "./src/js/app.js",
  },

  output: {
    filename: "app.js",
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader", "babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].html"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ],
  },
}
