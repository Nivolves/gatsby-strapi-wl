'use strict'

module.exports = {
  siteMetadata: {
    title: 'NodeArt',
    description: 'NodeArt',
    siteUrl: 'https://nodeart.io',
    author: {
      name: '@Nodeart',
    }
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        'fonts': [
          {
            'family': 'Roboto',
            'variants': [
              '400',
              '900',
            ],
            'subsets': [
              'cyrillic',
              'latin'
            ]
          }
        ],
        'formats': [
          'woff',
          'woff2',
          'ttf',
          'eot'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve( './src/components/layout.tsx' )
      }
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public|)/,
        stages: [ 'develop' ],
        options: {
          emitWarning: true,
          failOnError: true
        }
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
