module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {'webDeploy/app.js': ['Scripts/**/*.js']}
      }
    },
    watch: {
    	scripts: {
    	files: ['Scripts/**/*.js'],
    	tasks: ['uglify']
    	}
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify','watch']);

};
