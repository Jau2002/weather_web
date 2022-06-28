const DotEnv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const serve = {
	hot: true,
	open: true,
	port: 3000,
	compress: true
};

const rulesCSS = {
	test: /\.css$/,
	exclude: /node_modules/,
	use: ['style-loader', 'css-loader']
};

const rulesIMG = {
	type: 'asset',
	test: /\.(png|svg)$/,
	exclude: /node_modules/
};

const rulesJS = {
	test: /\.(js|jsx)$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: [
				'@babel/preset-env',
				['@babel/preset-react', { runtime: 'automatic' }]
			]
		}
	}
};

const rules = [rulesJS, rulesCSS, rulesIMG];

module.exports = {
	output: { filename: 'bundle.js' },
	resolve: { extensions: ['.jsx', '.js'] },
	module: { rules },
	devServer: serve,
	plugins: [
		new DotEnv(),
		new HtmlWebpackPlugin({
			template: 'src/main.html',
			favicon: 'src/assets/favicon.png',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true,
				removeStyleLinkTypeAttributese: true,
				removeOptionalTags: true,
				removeEmptyAttributes: true,
				removeAttributeQuotes: true,
				minifyJS: true,
				minifyCSS: true
			}
		})
	]
};
