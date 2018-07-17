var postcss = require('postcss');
postcss.plugin('postcss-warn-cleaner', function () {
  return function (css, result) {
      result.messages = [];
  };
});

module.exports = {
  siteMetadata: {
    title: 'Portfolio: Jebediah Cole'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    { resolve: 'gatsby-plugin-typography',
    options: {
      pathToConfigModule: 'src/fonts/typography.js'
    }
  },
  ],


}

