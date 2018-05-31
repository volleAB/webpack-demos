const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        bundle : __dirname + "/app/main.js",    //打包出bundle.js
        // search: __dirname + "/app/js/search.js"

    },
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "./js/[name].js"//打包后输出文件的文件名"[name].js"
    },
    mode: 'development',
    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        historyApiFallback: true,   //出错的内容
        //hot: true,                  //热模块更新作用
        port: 3000                  //开启端口
    },
    module: {
        rules: [
        {
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/,
        },
        {
            test: /\.(less|css)$/,
            use: ExtractTextPlugin.extract({
              use:[ 'css-loader','less-loader'],
              fallback: 'style-loader',
            }),                             //分离css
        },
        { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'},
            { test: /\.png$/, loader: "file-loader?name=images/[hash:8].[name].[ext]" }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename:  (getPath) => {
              return getPath('./css/main.css').replace('css/js', 'css');
            },
            disable: false,
            allChunks: true
        }),
        // new ExtractTextPlugin({
        //     filename: 'main.css',
        //     disable: false,
        //     allChunks: true,
        //     publicPath: __dirname + "./public/css",
        //   }),
    ]
};