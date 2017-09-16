const path = require('path');

const commonPaths = {
    srcPath: path.join(__dirname, '../src/app'),
    outPath: path.join(__dirname, '../build')
}

const config = {
    target: 'web',
    entry: {
        bundle: path.join(commonPaths.srcPath, 'index')
    },
    devServer: {
        // proxy: { // proxy URLs to backend development server
        //     '/api': 'http://localhost:3000'
        // },
        contentBase: path.join(__dirname, '../public'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [
            path.join(__dirname, '../../node_modules')
        ]
    },
    resolveLoader: {
        modules: [
            path.join(__dirname, '../../node_modules'),
            path.join(__dirname, '../../dist')
        ]
    },
    module: {
        rules: [
            {
                test: /\.(jsx?|tsx?)$/,
                include: [path.join(commonPaths.srcPath, 'components-loadable')],
                loader: 'react-loadable-loader'
            },
            {
                test: /\.(jsx?|tsx?)$/,
                include: [commonPaths.srcPath],
                loader: 'ts-loader'
            }
        ],
    },
    output: {
        path: commonPaths.outPath,
        filename: '[name].js'
    }
}

module.exports = config;