const webpack = require('webpack')
const _ = require('lodash')

const validEnvs = ['development', 'test', 'production']
if (!_.isEmpty(process.env.NODE_ENV) && !_.includes(validEnvs, process.env.NODE_ENV)) {
  throw Error('process.env.NODE_ENV is invalid')
}

module.exports={
  entry: ["./app/assets/javascripts/src/app.js"],
  output: {
    path: __dirname + "/public/scripts",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["react", "es2015", "stage-0"]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],
  devtool: 'inline-source-map'
}
