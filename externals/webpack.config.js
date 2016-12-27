var webpack=require("webpack");
module.exports = {
  entry: 
  {
    main:'./main.js',
  },
  output: {
    path:__dirname+'/dist',
    filename: '[name].js'
  },
  externals: { $: "window.jQuery" },
  plugins: [
    //提供全局的变量，在模块中使用无需用require引入
    new webpack.ProvidePlugin({
      $: "$"
    })
  ]
};