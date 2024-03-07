const HtmlWebpackPlugin = require('html-webpack-plugin');
const { error } = require("jquery");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'development',
  entry:{
    app: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: false,
    port: 9000,
    devMiddleware:{
      writeToDisk: true,
    }
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
            minimize: true,
          }, 
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options :{
            esModule: false
          },
        } 
        ,"css-loader",
         "sass-loader"],
      },

      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
      


      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator : {
          filename: "./fonts/[name][ext]"
        }
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator : {
          filename: "./images/[name][ext]"
        }
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
        filename : "index.html",
        template: "./src/index.html"
    }),
    new HtmlWebpackPlugin({
        filename : "travel.html",
        template: "./src/travel.html"
    }),
    new HtmlWebpackPlugin({
      filename : "travel-2.html",
      template: "./src/travel-2.html"
  }),

  new HtmlWebpackPlugin({
    filename : "login.html",
    template: "./src/login.html"
}),

new HtmlWebpackPlugin({
  filename : "sign-up.html",
  template: "./src/sign-up.html"
}),
    new MiniCssExtractPlugin ({
      filename: 'css/style.css'
    }),
    new CssMinimizerPlugin(),

   
  ]
};