const path = require("path");
const concatOrder = require("./concat-order.config");
const beautifyConfig = require("./beautifyrc.json");
const jsdocConfig = require("./jsdocConfig.json");
const jsdocConfigSrc = require("./jsdocConfigSrc.json");

const root = path.join(__dirname, "../");
const build_dir = path.join(root, "build");
const src_dir = path.join(root, "src");

const sourceFiles = {
	root: src_dir,
	img: path.join(src_dir, "images"),
	html: path.join(src_dir, "html"),
	pug: path.join(src_dir, "pug"),
	css: path.join(src_dir, "css"),
	sass: path.join(src_dir, "sass"),
	js: path.join(src_dir, "js"),
	doc: path.join(src_dir, "doc"),
	encoding: path.join(src_dir, "encode"),
};

const config = {
	/**
	 * Tinypng api-key
	 */
	TINYPNG_API_KEY: [
		"API-KEY"
	][0],
	/**
	 * Root dir
	 */
	root,
	/**
	 * Lighthouse report
	 */
	report: path.join(build_dir, "lighthouse-report"),
	/**
	 * Concat order config
	 */
	order: concatOrder,
	/**
	 * Config gulp-beautify
	 */
	beautify: beautifyConfig,
	/**
	 * JSDoc config
	 */
	jsdocConfig: jsdocConfig,
	/**
	 * JSDoc config 2
	 */
	jsdocConfigSrc: jsdocConfigSrc,
	/**
	 * Build folder
	 */
	build: {
		root: build_dir,
		img: path.join(build_dir, "images"),
		html: build_dir,
		css: path.join(build_dir, "css"),
		js: path.join(build_dir, "js"),
		encoding: path.join(build_dir, "encode"),
	},
	/**
	 * Source folder
	 */
	src: sourceFiles,
	/**
	 * Watching folders/files
	 */
	watch: [
		{
			enable: true,
			glob: `${sourceFiles.pug}/**/*.pug`,
			options: {},
			watch: ["pug"],
			stream: true,
		},
		{
			enable: true,
			glob: `${sourceFiles.sass}/**/*.{scss,sass}`,
			options: {},
			watch: ["sass"],
			stream: false,
		},
		{
			enable: true,
			glob: `${sourceFiles.js}/**/*.js`,
			options: {},
			watch: ["js"],
			stream: true,
		},
		{
			enable: true,
			glob: `${sourceFiles.img}/**/*.{png,jpg,jpeg,svg,webp,gif}`,
			options: {},
			watch: ["copy-images"],
			notReload: true,
		},
		{
			enable: false,
			glob: `${sourceFiles.img}/**/*.{png,jpg,jpeg,svg,webp}`,
			options: {},
			watch: ["imagemin"],
			parallel: true,
		},
	],
	/**
	 * Tasks for building project
	 */
	buildTasks: {
		series: ["clean"],
		parallel: ["html", "css", "js", "tinypng"],
	}
};

module.exports = config;
