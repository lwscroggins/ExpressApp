module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-casper');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      //define the files to lint
      files: ['gruntfile.js', 'expressapp.js', 'expressapp/**/*.js'],
      //configure jshint
      options: {
        //options here to override jshint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['jshint']);
};