const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        index: './src/js/index.js',
        other: './src/js/other.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'index',
            inject: true,
            hash: true,
            chunks: ['index'],
            minify: { //压缩HTML文件    
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        new HtmlWebpackPlugin({
            title: 'other',
            inject: true,
            hash: true,
            chunks: ['other'],
            minify: { //压缩HTML文件    
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        })
    ],
    modules: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}