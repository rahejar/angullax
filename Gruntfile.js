module.exports = function( grunt ) {

	'use strict';

	require( 'load-grunt-tasks' )( grunt );

	var banner = '/*! <%= pkg.name %> (v<%= pkg.version %>) - Copyright: 2015, <%= pkg.author %> - <%= pkg.license %> */\n';

	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'bower.json' ),

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'src/**/*.js'
			]
		}

	} );

	grunt.registerTask( 'build', [
		'jshint'
	] );
}