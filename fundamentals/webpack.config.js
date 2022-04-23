const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle[contenthash].js", // gera um novo bundle com um novo hash caso os arquivos tenham sido modificados
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"), // injeta o novo bundle no index.html
    }),
    new CleanWebpackPlugin(), // apaga todos os arquivos gerados a cada novo bundler
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader", // realiza o transpile de todos arquivos com extensão .js antes de gerar o bundle
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
  },
};
