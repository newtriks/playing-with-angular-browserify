var gulp = require('gulp');
var bower = require('bower');
var del = require('del');
var _ = require('lodash');

var deleteDeps = function (deps, cb) {
	var path = bower.config.cwd + "/" + bower.config.directory;
	_.each(deps, function (dep) {
		del(path + "/" + dep, function (e) {});
	});
	cb();
};

var bowerTask = function (fn, cb) {
	var deps = _.chain(require(bower.config.cwd + '/bower.json').dependencies).keys().value();
	var pkgs = [];
	bower.commands[fn](deps)
		.on('log', function (o) {
			if (o.id !== 'install') {
				return;
			}
			pkgs.push(o.data.endpoint.name);
		})
		.on('end', function (installed) {
			deleteDeps(_.difference(pkgs, deps), cb);
		});
};

gulp.task('bowerInstall', function (cb) {
	bowerTask('install', cb);
});

gulp.task('bowerUpdate', function (cb) {
	bowerTask('update', cb);
});