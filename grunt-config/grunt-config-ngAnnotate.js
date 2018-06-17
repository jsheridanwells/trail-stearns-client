module.exports = {
  options: {
    singleQuotes: true
  },
  app: {
    files: {
      './src/hold-js/annotated.js': ['./src/hold-js/browserified.js']
    }
  }
};
