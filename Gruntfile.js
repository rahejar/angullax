module.exports = function( grunt ) {

	'use strict';

	require( 'load-grunt-tasks' )( grunt );

	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'bower.json' ),

		meta: {
			banner: '/**\n' +
		      ' * <%= pkg.description %>\n' +
		      ' * @version v<%= pkg.version %> \n' +
		      ' * @author <%= pkg.author %>\n' +
		      ' * @license MIT License \n' +
		      ' */\n'
		},

		clean: [ 'dist' ],

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'src/**/*.js'
			]
		},

		concat: {
			options: {
				banner: '<%= meta.banner %>'
			},
			dist: {
				src: 'src/script/*.js',
				dest: 'dist/js/<%= pkg.name %>.js'
			}
		},

		copy: {
			dist: {
				files: [
					{
						cwd: 'src',
						expand: true,
						src: 'views/angullax.html',
						dest: 'dist'
					},
					{
						cwd: 'src',
						expand: true,
						src: 'styles/angullax.css',
						dest: 'dist'
					}
				]
			}
		}

	} );

	grunt.registerTask( 'build', [
		'clean',
		'jshint',
		'concat',
		'copy'
	] );
};