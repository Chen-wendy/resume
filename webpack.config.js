const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ["./src/main.ts", "./styles/main.scss"],
    plugins: [
        new MiniCssExtractPlugin({ filename: 'styles/[name].[hash].css' }),
        new HtmlWebpackPlugin({ template: './index.html' })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'sass-loader']
            },
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[contenthash].[ext]',
                    outputPath: 'assets',
                    esModule: false
                }
            },
            {
                test: /\.(html)$/,
                loader: 'html-loader',
                options: {
                    attrs: ['use:href', 'img:src']
                }
            }
        ]
    },
    output: {
        publicPath: process.env.NODE_ENV === 'production' ? 'https://chen-wendy.github.io/resume/' : 'http://localhost:8000/',
        path: path.resolve(__dirname, './dist'),
        filename: 'scripts/[name].[hash].js'
    }
}
