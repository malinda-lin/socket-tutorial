module.exports = {
  mode: 'development',
  entry: `${__dirname}/server/index.js`,
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  externals: ['express', 'socket.io'],
  target: 'node'
};
