var
gulp        = require('gulp'),
browserSync = require('browser-sync'),
changed     = require('gulp-changed');

gulp.task('server-tdd', function() {
	browserSync.init(null, {
		open: true,
		server: {
			baseDir: './',
			index: "index.html"
		},
		reloadDelay: 2000,
		watchOptions: {
			debounceDelay: 1000
		},
		port: 8080
	});
});

gulp.task('watch', function() {
	gulp.watch(['js/**/*', 'spec/**/*', '*.html', 'css/*.css'], function(file) {
		if (file.type === "changed") {
			browserSync.reload(file.path);
		}
	});
});

gulp.task('tdd', ['watch', 'server-tdd']);