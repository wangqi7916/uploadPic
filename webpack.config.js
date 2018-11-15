var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {
    contentBase: "./",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    host:'0.0.0.0',
    port:7001,
    hot:true,
    inline: false,//实时刷新
    hot:true,//Enable webpack's Hot Module Replacement feature
    compress:true,//Enable gzip compression for everything served
    overlay: true, //Shows a full-screen overlay in the browser
    stats: "errors-only" ,//To show only errors in your bundle
    open:true, //When open is enabled, the dev server will open the browser.
    proxy: {
        "/api": {
            target: "http://localhost:3000",
            pathRewrite: {"^/api" : ""}
        }
    }
 }
};