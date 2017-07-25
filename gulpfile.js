var gulp = require("gulp");
var fs = require('fs');
var browserify = require('browserify');

gulp.task('es6', function(){
    browserify("./src/moduloPrincipal.js")
    .transform('babelify', {presets:['es2015', 'react']})
    .bundle()
    .pipe(fs.createWriteStream("./public/react.js"))
});