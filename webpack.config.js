const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const rulesForCss = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};

const rulesForJs = {
  test: /\.js$/,
  loader: "babel-loader",
  options: {
    presets: [["@babel/preset-env"]],
  },
};

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";
  return {
    // entry: './src/index.js', por defecto
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "build.js",
      path: path.resolve(__dirname, "build"),
      clean: true,
    },
    module: {
      rules: [rulesForCss, rulesForJs],
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
    devServer: {
      open: true,
      port: 3000,
    },
  };
};
