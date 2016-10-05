var path = require('path');
var webpack = require('webpack')

module.exports = {
  entry: [
    path.join('script!jquery', 'dist', 'jquery.min.js'),
    path.join('script!foundation-sites', 'dist', 'foundation.min.js'),
    path.join(__dirname, 'app', 'app.jsx')
  ],
  externals: {
    //module-name:variable-name that are available inside the external scripts
    //this is set for foundation frameworks
    //make foundation method to attach to jQuery object correctly
    jquery: 'jQuery'
  },
  plugins: [
    // let webpack loads jQuery to process $ syntax
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
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
      openWeatherMap: path.join('app', 'api', 'openWeatherMap.jsx'),
      myRouter: path.join('app', 'myRouter.jsx')
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
