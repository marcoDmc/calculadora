const miniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path : path.resolve(__dirname , './dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [miniCssExtractPlugin.loader , 'css-loader']
            }
        ]
    }, 
    plugins : [
        new miniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
}