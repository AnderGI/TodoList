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

const rulesForSVG = {
  test: /\.svg$/,
  use: "svg-url-loader",
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
      rules: [rulesForCss, rulesForJs, rulesForSVG],
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
    devtool: isProduction ? "" : "inline-source-map",
    devServer: {
      open: true,
      port: 3000,
    },
  };
};
