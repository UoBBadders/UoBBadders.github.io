module.exports = function(grunt) {
  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-ng-constant');

  // Configure tasks
  grunt.initConfig({
    // javascript linting
    jshint: {
      files: ['**/*.js'],
      options: {
        node: true,
        globals: {  // list of global variables and whether they are assignable
          "angular": false,
          "Promise": false,
          "alert": false
        },
        ignores: ['node_modules/**/*.js', 'bower_components/**/*.js']
      }
    },
    // Compile Less to CSS
    less: {
      dist: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2,
          strictMath: true,
          strictUnits: true
        },
        files: {
          // destination file and source file
          "assets/styles/app.css": "assets/styles/less/app.less"
        }
      }
    },
    // File watching
    watch: {
      styles: {
        files: ['assets/styles/less/**/*.less'],
        tasks: ['less'],
        options: {
          spawn: false,
          maxListeners: 99
        }
      },
      js: {
        files: ['!node_modules', '**/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
          maxListeners: 99
        }
      }
    },
    // Live reload server (for local development)
    nodemon: {
      dev: {
        script: 'server.js'
      }
    },
    // concurrently run the server and watch for file changes
    concurrent: {
      serve: {
        options: {
          logConcurrentOutput: true
        },
        tasks: ['watch:styles', 'watch:js', 'exec:serve']
      }
    },
    // execute shell commands
    exec: {
      serve: 'node server.js',
      commit: 'git add -u && git commit -m "automatic build commit"',
      publish: 'git checkout gh-pages && git merge master && git push origin gh-pages && git checkout master'
    },
    // generate an 'config' angular module which defines the
    // local/production variables for use by the angular app
    ngconstant: {
      options: {
        space: ' ',
        wrap: '"use strict";\n\n {\%= __ngModule %}',
        name: 'config',
      },
      // local environment
      local: {
        options: {
          dest: 'config.js'
        },
        constants: {
          ENV: {
            name: 'local',
            baseUrl: '/'
          }
        }
      },
      production: {
        options: {
          dest: 'config.js'
        },
        constants: {
          ENV: {
            name: 'production',
            baseUrl: '/UoBBadminton'
          }
        }
      }
    }
  });

  /* Register main tasks.
  **    grunt build:<env>     builds the current branch for the specified environment
  **                          (creates config module, lints js and compiles less)
  **    grunt serve           build, then locally serve the web app and simultaneously watch for file changes
  **    grunt publish         build for production, merge to gh-pages and push to the repo
  */
  grunt.registerTask('build:local', ['ngconstant:local', 'jshint', 'less']);
  grunt.registerTask('build:production', ['ngconstant:production', 'jshint', 'less']);
  grunt.registerTask('serve', ['build:local', 'concurrent:serve']);
  grunt.registerTask('publish', ['build:production', 'exec:commit', 'exec:publish']);
};
