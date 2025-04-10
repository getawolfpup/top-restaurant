import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "production",
  entry: "./src/index.js",

  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
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
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};
