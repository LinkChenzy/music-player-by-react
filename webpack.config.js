const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
	devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.join(__dirname, 'app/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './app/index.tpl.html',
          inject: 'body',
          filename: './index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
	module: {
	     rules: [
	     	{
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets:['react','es2015']
                    }
                }
            },
            {
	            test: /\.less$/,
	            use: [{
	                loader: "style-loader" // creates style nodes from JS strings
	            }, {
	                loader: "css-loader" // translates CSS into CommonJS
	            }, {
	                loader: "less-loader" // compiles Less to CSS
	            }]
	        },
			{
		        test: /\.css$/,
		        use: [
		            'style-loader',
		            'css-loader'
	        	]
	        },
	     ]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'use plugin',
			filename: 'index.html'
		})
	]
};