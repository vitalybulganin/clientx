var webpack = require('webpack');

var webpackConfig = require('./webpack.config.js');
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = Object.assign({}, webpackConfig, {
    plugins: webpackConfig.plugins.concat([

        // не дает переписать bundle.js если есть ошибки
        new webpack.NoEmitOnErrorsPlugin(),

        // Задаем использование production-кода react: удаляем предупреждения, включаем оптимизации
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),

        // Выравниваем последовательность импортов
        new webpack.optimize.OccurrenceOrderPlugin(true),

//        new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
        new webpack.optimize.AggressiveMergingPlugin(),
        // new CompressionPlugin({
        //     asset: "[path].gz[query]",
        //     algorithm: "gzip",
        //     test: /\.js$|\.css$|\.html$/,
        //     threshold: 10240,
        //     minRatio: 0.8
        // })
    ])
});