module.exports = {
  options: {
      browser: true,
      devel: true,
      esversion: 6,
      node: true,
      reporter: require('jshint-stylish'),
      predef: [
        'angular'
      ],
    },
    build: {
      options: {
        devel: false
      }
    },
    files: ['./src/js/**/*.js']
  };
