const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/script.js',
    output: {
        filename: './script.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },

}