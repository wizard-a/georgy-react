const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'), // 输出文件夹
        filename: '[name].[hash:8].js',
    },
    module: {
        rules: [
            {
                test: /\.worker\.js$/,
                use: {
                    loader: 'worker-loader',
                    options: {
                        isSharedWorker: true,
                    }
                }
            }
        ]
    },
    plugins: [
        // 清除目录
        new CleanWebpackPlugin([path.join(__dirname, 'dist')]),
        new HtmlWebpackPlugin({
            template: './src/index.html', //模板文件
            filename: 'index.html', // HTML文件
            hash: true,  // 给引入的资源文件夹hash
            title: 'webpack-tutorial',
            // chunks:['index', 'vendor'], // 引入编译后的代码块
            minify: {
                removeAttributeQuotes: true,
            }
        })
    ]
}