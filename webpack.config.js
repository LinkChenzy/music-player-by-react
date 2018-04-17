const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
	     rules: [
	     	{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',

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