const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'


module.exports = {
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.(s?css|vue)$/,
                    chunks: 'all',
                    priority: 30,
                    enforce: true
                }
            }
        }
    },
    entry: ['./src/index.js','./src/scss/main.scss'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js',        
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.(sa|sc|c)ss$/,
            exclude: /node_modules/,
            use: [
                devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader',
            ]
            },
        {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=100000'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './src/css/main.css'
        })
    ]
}