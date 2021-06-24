const jsdoc = require("gulp-jsdoc3");
const { jsdocConfigSrc, src } = require ("./../config");
const gulp = require("gulp");


module.exports = () => 
	gulp
		.src ([`${src.js}/**/*.js`], {read: false})
		.pipe (jsdoc (jsdocConfigSrc));