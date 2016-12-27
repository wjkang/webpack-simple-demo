
module.exports = {
  entry: 
  {
    main:'./main.js',
  },
  output: {
    path:__dirname+'/dist',
    filename: '[name].js'
  },
  resolve:{
    //配置别名，在项目中可缩减引用路径
    alias: {
      jquery: "./lib/jquery"
    }
  },
  plugins: [
   
  ]
};