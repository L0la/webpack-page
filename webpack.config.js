const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    watch: true, // Enable watch mode
    entry: './js/index.js',
    plugins: [
        new CleanWebpackPlugin(),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader' /*, "sass-loader"*/ ]
            },
            {
                test: /index.html$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'index.html'
                    }
                }]
            }
        ]
    }
};