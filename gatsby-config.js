require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'NodeArt',
    description: 'NodeArt',
    siteUrl: 'https://nodeart.io',
    author: {
      name: '@Nodeart',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://content.nodeart.app',
        queryLimit: 1000,
        contentTypes: [
          'address',
          'contacts',
          'defaultpages',
          'languages',
          'menu',
          'pagetypes',
          'phone',
          'secondaryheader',
          'setting',
          'tabs',
        ],
        loginData: {
          identifier: process.env.LOGIN,
          password: process.env.PASSWORD,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                danger: {
                  classes: 'danger',
                },
                info: {
                  classes: 'info',
                  title: 'optional',
                },
              },
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Montserrat',
            variants: ['400', '500', '600', '700', '800', '900'],
            subsets: ['cyrillic'],
          },
        ],
        formats: ['woff', 'woff2', 'ttf', 'eot'],
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layout.tsx'),
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public|)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
  ],
};
