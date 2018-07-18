module.exports = {
  siteMetadata: {
    title: 'Portfolio: Jebediah Cole'
  },
  pathPrefix: '/portfolio',
  plugins: [
    'gatsby-plugin-react-helmet',
    { resolve: 'gatsby-plugin-typography',
    options: {
      pathToConfigModule: 'src/fonts/typography.js'
    }
  },
  ],


}

