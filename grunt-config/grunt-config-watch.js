module.exports = {
  options: {
    livereload: true
  },
  javascripts: {
    files: ['./src/js/**/*.js'],
    tasks: ['jshint']
  },
  sass: {
    files: ['./src/sass/**/*.scss'],
    tasks: ['sass']
  },
  html: {
    files: ['./src/*.html']
  }
};
