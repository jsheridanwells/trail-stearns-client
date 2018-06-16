module.exports = {
  options: {
      browser: true,
      devel: true,
      esversion: 6,
      jquery: true,
      node: true,
      reporter: require('jshint-stylish'),
      predef: [],
    },
    build: {
      options: {
        devel: false
      }
    },
    files: ['./src/js/**/*.js']
  };
