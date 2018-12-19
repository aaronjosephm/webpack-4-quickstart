const HtmlWebPackPlugin = require("html-webpack-plugin");
// const template = require("./src/index.ejs");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: 'production',
  module: {
    rules: [
      { test: /\.ejs$/, 
        loader: 'ejs-loader?variable=data' 
      },
      {
        test:/\.s?css$/,
        use:['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  resolve: {
        extensions: ['.js', '.jsx']
    }
};