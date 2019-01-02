const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cssExtract = new MiniCssExtractPlugin({
    filename: "[name].[hash:8].css",
    chunkFilename:'[id].css'
});
// const lessExtract = new MiniCssExtractPlugin('css/less.css');
// const sassExtract = new MiniCssExtractPlugin('css/sass.css');

module.exports = {
    mode: 'development',
    // 入口文件
    entry: {
        index: './src/index.js',
        base: './src/base.js',
        vendor: 'lodash',
    },
    //输出
    output: {
        path: path.join(__dirname, 'dist'), // 输出文件夹
        filename: '[name].[hash:8].js',
    },
    // 监听源文件的变化，当源文件发生变化，则重新打包
    // watch: true,
    // watchOptions: {
    //     exclude: /node_modules/,
    //     poll: 1000,
    // },
    // 输出 source map
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            // 处理js 包含es6 react
            {
                test: /\.js$/, //正则匹配
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            // {   // 处理 css
            //     test: /\.css$/, //正则匹配
            //     loader: ["style-loader", "css-loader"] //loader 加载(多个loader从右往左写)
            // },
            {   // 抽离单独 css 文件
                test: /\.css$/, //正则匹配
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                      }
                    },
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {   // 处理 less
                test: /\.less$/, //正则匹配
                loader: ["style-loader", "css-loader", "less-loader"]
            },
            {   // 处理 scss
                test: /\.scss$/, //正则匹配
                loader: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|bmp)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000 * 1024, // 小于文件大小转换成base64
                            // 文件输出路径
                            outputPath: 'image/'
                        }
                    }
                ]
            }
        ]
    },
    // 插件
    plugins: [
        // 清除目录
        new CleanWebpackPlugin([path.join(__dirname, 'dist')]),
        // 像模块内注入变量
        // new webpack.ProvidePlugin({
        //     _: 'lodash'
        // }),
        // 生成html文件
        new HtmlWebpackPlugin({
            template: './src/index.html', //模板文件
            filename: 'index.html', // HTML文件
            hash: true,  // 给引入的资源文件夹hash
            title: 'webpack-tutorial',
            chunks:['index', 'vendor'], // 引入编译后的代码块
            minify: {
                removeAttributeQuotes: true,
            }
        }),
        // 生成base html文件
        new HtmlWebpackPlugin({
            template: './src/index.html', //模板文件
            filename: 'base.html', // HTML文件
            hash: true,  // 给引入的资源文件夹hash
            title: 'webpack-tutorial-base',
            chunks: ['base', 'vendor'],
            minify: {
                removeAttributeQuotes: true,
            }
        }),
        // 拷贝文件目录
        new CopyWebpackPlugin([{
            from: path.join(__dirname, 'public'),
            to: path.join(__dirname, 'dist', 'public'),
        }]),
        cssExtract,
    ],
    // 配置静态文件服务器
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 8080,
        compress: true, //服务器返回是否启动gzipy压缩
    },
}