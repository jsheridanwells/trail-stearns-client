module.exports = {
  js: {
    src: ['./src/**/*.js'],
    dest: './src/hold-js/browserified.js'
  },
  options: {
    paths: ["./node_modules"],
    exclude: ['./src/vendor/popper.js']
  }
};
