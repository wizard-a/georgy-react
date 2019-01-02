const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'), // 输出文件夹
        filename: '[name].[hash:8].js'
    },
    resolveLoader: {
        modules: [ 'node_modules', path.resolve(__dirname, 'loadres') ],
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: path.resolve(__dirname, 'loadres', 'log-loader.js'),
                        options: {
                            content: 'testsss'
                        }
                    }
                ]
            }
            , {
                test: /\.less$/,
                use: ['style-loader', 'less-loader'],
            }
        ]
    }
}
