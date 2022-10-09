const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename:'bundle.js',
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, 'src'),
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				type: "asset",
				test: /\.(png|svg|jpg|gif)$/i,
				use:[
					{
						loader:'file-loader',
						options:{
							name: '[name].[ext]',
							outputPath:'img/',
							useRelativePath:true,
						}
					}
				]
			}
		],
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: 'head',
			scriptLoading: 'defer'
		})
	]
}
