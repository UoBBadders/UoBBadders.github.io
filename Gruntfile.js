module.exports = function(grunt) {
  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

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
        ignores: ['node_modules/**/*.js']
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
      serve: 'node server.js'
    }
  });

  /* Register main tasks.
  **    grunt build           builds the current branch (lints js and compiles less)
  **    grunt serve           build, then locally serve the web app and simultaneously watch for file changes
  */
  grunt.registerTask('build', ['jshint', 'less']);
  grunt.registerTask('serve', ['build', 'concurrent:serve']);
};
