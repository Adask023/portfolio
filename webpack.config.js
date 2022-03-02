const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/app.ts"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "deploy"),
    },
    compress: true,
    port: 9000,
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "deploy"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
    }),
  ],
};
