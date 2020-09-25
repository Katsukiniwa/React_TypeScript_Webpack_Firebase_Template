const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

require('dotenv').config({ path: `${__dirname}/.env.development` });

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        REACT_APP_API_KEY: JSON.stringify(process.env.REACT_APP_API_KEY),
        REACT_APP_AUTH_DOMAIN: JSON.stringify(process.env.REACT_APP_AUTH_DOMAIN),
        REACT_APP_DATABASE_URL: JSON.stringify(process.env.REACT_APP_DATABASE_URL),
        REACT_APP_PROJECT_ID: JSON.stringify(process.env.REACT_APP_PROJECT_ID),
        REACT_APP_STORAGE_BUCKET: JSON.stringify(process.env.REACT_APP_STORAGE_BUCKET),
        REACT_APP_MESSAGINGSENDERID: JSON.stringify(process.env.REACT_APP_MESSAGINGSENDERID),
        REACT_APP_APP_ID: JSON.stringify(process.env.REACT_APP_APP_ID),
        REACT_APP_MEASUERMENTID: JSON.stringify(process.env.REACT_APP_MEASUERMENTID),
      },
    }),
  ],

  devServer: {
    contentBase: './dist',
    inline: true,
    host: 'localhost',
    port: 8080,
    stats: 'errors-only',
    historyApiFallback: true,
  },
});
