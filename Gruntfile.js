module.exports = function(grunt) {

  // require('load-grunt-config')(grunt, {
  //   config: {
  //     info: grunt.file.readJSON('bower.json'),
  //     name: 'angular-floating-label'
  //   }
  // });

  grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		jshint : {
			files : ['Gruntfile.js', 'lib/**/*.js', 'test/*.js']
		},
        connect: {
            test: {
              options: {
                port: 9000,
                base: '.'
              }
            },
            server: {
                options: {
                    port: 9001,
                    base: '.'
                }
            }
        },
        uglify : {
			build: {
                src: 'lib/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
		},
		cssmin : {
            css: {
                src: 'lib/<%= pkg.name %>.css',
                dest: 'dist/<%= pkg.name %>.min.css'
            },
			compress : {
				files : {
					"dist/main.min.css" : ['dist/main.css']
				}
			}
		}
	});
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');


  grunt.registerTask('script-dist', ['concat:dist', 'uglify:dist']);
  grunt.registerTask('scripts', ['jshint', 'cssmin', 'uglify']);
  grunt.registerTask('default', ['scripts']);
  grunt.registerTask('dev', ['default', 'connect:server']);
};
