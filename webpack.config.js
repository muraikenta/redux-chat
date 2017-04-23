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
  devtool: 'inline-source-map'
}
