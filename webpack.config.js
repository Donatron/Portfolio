const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: ""
  },
  mode: "development",
  devServer: {
    contentBase: "dist",
    index: "index.html",
    port: 9000,
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].html"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "html-loader",
            options: {
              attr: ["img:src"]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|svg|gif|ico)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "assets/[folder]/[name].[ext]"
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin("dist")]
};
