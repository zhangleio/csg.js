var path = require('path');
var webpack = require('webpack');
module.exports = {
    devtool: 'source-map',
    entry: {
        "app": './csg.js'
    },
    output: {
        filename: 'csg.js',
        path: path.resolve(__dirname, 'build'),
        libraryTarget: 'umd',
        library: 'csg'
    }
};
