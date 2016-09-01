var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
  entry: 
  {
    a:'./a.js',
    main:'./main.js'
  },
  output: {
    filename: 'dist/[name].js'
  },
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
  },
  plugins: [
    new CommonsChunkPlugin('dist/init.js')
  ]
};