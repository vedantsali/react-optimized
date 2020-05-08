const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginInst = new HtmlWebpackPlugin({
  template: 'index.html',
  title: 'Caching',
});
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: ['./src/app.js', 'bootstrap/dist/css/bootstrap.min.css', './style.less'],
  output: {
    path: path.resolve('./dist'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    publicPath: '/'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: false,
        default: false,
        vendor: {
          name: 'vendor',
          chunks: 'all',
          test: /node_modules/
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'babel-loader']
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
        use: 'file-loader?name=[name].[ext]?[hash]'
      },
    ]
  },
  devServer: {
    port: 8080,
    contentBase: path.resolve('./dist'),
    // open: true,
    historyApiFallback: true
  },
  plugins: [HtmlWebpackPluginInst]
}