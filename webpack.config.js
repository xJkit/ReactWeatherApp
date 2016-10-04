var path = require('path');


module.exports = {
  entry: path.join(__dirname, 'app', 'app.jsx'),
  output: {
    path: path.resolve(__dirname),
    filename: path.join('public', 'bundle.js')
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: path.join('app', 'components', 'Main.jsx'),
      Nav: path.join('app', 'components', 'Nav.jsx'),
      Weather: path.join('app', 'components', 'Weather.jsx'),
      WeatherForm: path.join('app', 'components', 'WeatherForm.jsx'),
      WeatherMessage: path.join('app', 'components', 'WeatherMessage.jsx'),
      About: path.join('app', 'components', 'About.jsx'),
      Examples: path.join('app', 'components', 'Examples.jsx'),
      openWeatherMap: path.join('app', 'api', 'openWeatherMap.jsx')
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets:['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules | bower_components)/
      }
    ]
  },
  devtool: 'inline-source-map'
};
