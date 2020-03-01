module.exports = {
  siteMetadata: {
    title: 'Code Network',
    description: "Build anything, as long as it's awsome",
    author: 'Code Network Members',
    email: 'team@codenetwork.co'
  },
  plugins: [
    'gatsby-transformer-yaml',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/data`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Code Network Website',
        short_name: 'Code Network',
        start_url: '/',
        background_color: '#0d0f2e',
        theme_color: '#01d60',
        display: 'minimal-ui',
        icon: 'src/images/favicon.svg'
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Open Sans'],
        display: 'swap'
      }
    },
    'gatsby-plugin-styled-components'
  ]
}
