module.exports = {
  options: {
      mergeIntoShorthands: false,
      roundingPrecision: -1
    },
    target: {
      files: {
        './dist/main.min.css': ['./src/css/**/*.css', '.src/vendor/**/*.css']
      }
    }
};
