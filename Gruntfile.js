/*jshint node: true */

"use strict";

module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		qunit: {
			all: ["test/index.html"]
		},
		jshint: {
			files: [
				"Gruntfile.js",
				"jquery.contextmenu.js"
			],
			options: {
				jshintrc: ".jshintrc"
			}
		},
		uglify: {
			options: {
//				banner: "/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.license %> */\n"
	            banner: "/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - " +
                "<%= grunt.template.today('yyyy-mm-dd') %> | " +
                "<%= pkg.homepage ? ' ' + pkg.homepage + ' | ' : '' %>" +
                " Copyright (c) <%= grunt.template.today('yyyy') %> <%= pkg.author.name %>;" +
                " Licensed <%= _.pluck(pkg.licenses, 'type').join(', ') %> */\n"
			},
			build: {
				src: "jquery.contextmenu.js",
//                dest: "build/jquery.contextmenu-<%= pkg.version %>.min.js"
                dest: "jquery.contextmenu.min.js"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-qunit");

    grunt.registerTask("ci", ["jshint", "qunit"]);
	grunt.registerTask("default", ["jshint", "qunit", "uglify"]);
};
