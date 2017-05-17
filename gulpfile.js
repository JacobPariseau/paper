(function () {
	'use strict';
	const gulp = require("gulp");
	const watch = require("gulp-watch");
	const webpack = require("webpack");
	const webpackConfig = require("./webpack.config.js");
	const gutil = require('gulp-util');

	const patterns = {
		html: 'client/**/*.html',
		template: 'client/**/*.hbs',
		js: 'client/**/*.js',
		scss: 'client/**/*.scss'
	};
	gulp.task("pack", function(callback) {
		// run webpack
		webpack(webpackConfig, function(err, stats) {
			if(err) throw new gutil.PluginError("webpack", err);

			gutil.log("[webpack]", stats.toString({
				// output options
				chunks: false,
				colors: true
			}));

			callback();
		});

		gulp.src('client/index.html')
		.pipe(gulp.dest('dist'));
	});

	gulp.task('watch', () => {
		gulp.start('pack');
		
		watch([
			patterns.js,
			patterns.template,
			patterns.scss
		], () => {
			gulp.start('pack');
		});
	});

})();
