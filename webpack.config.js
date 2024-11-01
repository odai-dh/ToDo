const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Set to 'development' for development, or 'production' for production builds
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // This will clean the output directory before each build
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Specify your HTML template file
        }),
    ],
    resolve: {
        extensions: ['.js', '.json'],
    },
    devServer: {
        static: './dist', // Serve static files from the 'dist' folder
        open: true, // Automatically open the browser
    },
};