const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'transpiled', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[hash].js', // gera um nobo bundle com um novo hash caso os arquivos tenham sido modificados
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html') // injeta o novo bundle no index.html
    }),
    new CleanWebpackPlugin(), // apaga todos os arquivos gerados a cada novo bundler
  ]
};