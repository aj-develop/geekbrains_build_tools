const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './public/src/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.mp3$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: resolve(__dirname, './public/index.html')
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename: '[name].[contenthash].css'
            }
        ),
    ],
};