module.exports = {
  siteMetadata: {
    siteUrl: 'https://freedomwhare.co.nz',
    title: 'Freedom Whare',
    author: {
      name: 'Aiden Langley',
    },
    pathPrefix: '/',
    description:
      'Freedom Whare; Whare to the Whenua. Housing solutions for tangata ' +
      'whenua and Aotearoa.',
    // logo: 'https://freedomwhare.co.nz/logo.png',
  },
  plugins: [
    /* Meta */
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    // 'gatsby-plugin-manifest',
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     icon: 'static/logo.png',
    //   },
    // },

    /* Hosting */
    'gatsby-plugin-netlify',

    /* Analytics */
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-NN9D7G85W7',
      },
    },

    /* PostCSS */
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('postcss-import'),
          require(`postcss-preset-env`),
          // require('postcss-nesting'),
          process.env.NODE_ENV !== 'development' &&
            require('cssnano')({
              preset: 'default',
            }),
        ],
      },
    },

    /* Images */
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
      __key: 'images',
    },

    /* Pages */
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
      __key: 'pages',
    },
  ],
}
