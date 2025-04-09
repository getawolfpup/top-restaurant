const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Change to 'production' for production builds
  entry: "./src/index.js", // Your main JavaScript entry point

  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Cleans the dist folder before each build
  },

  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/index.html"],
  },

  module: {
    rules: [
      // CSS files
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // Images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      // HTML
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Path to your HTML template
      filename: "index.html",
    }),
  ],
};
