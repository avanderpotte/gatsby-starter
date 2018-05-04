const autoprefixer = require( 'autoprefixer' )
const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter',
    siteUrl: 'http://gatsby.avdp.xyz'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sitemap'
    },
    {
      resolve: 'gatsby-plugin-purify-css',
      options: {
        styleId: 'gatsby-inlined-css',
        purifyOptions: {
          info: true,
          minify: true
        }
      }
    },
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: path.join(__dirname, 'data'),
      },
    }
  ],
}
