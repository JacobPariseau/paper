// Webpack configuration file
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var resolve = require("path").resolve;

module.exports = {
	entry: "./client/main.js",
	output: {
		path: resolve("./dist"),
		filename: "[name].bundle.js",
		chunkFilename: "[hash].js",
		publicPath: "dist/"
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			loader: "babel",
			query: {
				presets: ["es2015"]
			}
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap")
		}, {
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!sass-loader?sourceMap")
		}, {
			test: /\.(hbs)$/, loader: "handlebars-loader", query: {
				knownHelpersOnly: false
			}
		},{
			test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader:"url?limit=10000&mimetype=application/font-woff"
		}, {
			test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file"
		}]
	},
	plugins: [
    new ExtractTextPlugin("[name].css")
  ],
	devtool: "#source-map"
};
