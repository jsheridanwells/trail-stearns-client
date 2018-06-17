module.exports = (grunt) => {

  grunt.initConfig(
    {
      jshint: require('./grunt-config/grunt-config-jshint'),
      browserify: require('./grunt-config/grunt-config-browserify'),
      ngAnnotate: require('./grunt-config/grunt-config-ngAnnotate'),
      babel: require('./grunt-config/grunt-config-babel'),
      sasslint: require('./grunt-config/grunt-config-sasslint'),
      sass: require('./grunt-config/grunt-config-sass'),
      uglify: require('./grunt-config/grunt-config-uglify'),
      processhtml: require('./grunt-config/grunt-config-processhtml'),
      cssmin: require('./grunt-config/grunt-config-cssmin'),
      watch: require('./grunt-config/grunt-config-watch'),
      connect: require('./grunt-config/grunt-config-connect')
    }
  );

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'sasslint', 'sass', 'connect', 'watch']);
  grunt.registerTask('serve', ['connect']);
  grunt.registerTask(
    'build',
    [
      'sasslint',
      'sass',
      'cssmin',
      'jshint',
      'browserify',
      'ngAnnotate',
      'babel',
      'uglify',
      'processhtml'
    ]
  );

};
