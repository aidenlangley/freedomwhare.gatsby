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
    logo: 'https://freedomwhare.co.nz/logo.png',
  },
  plugins: [
    /* Meta */
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/logo.png',
      },
    },

    /* Hosting */
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cms',

    /* Analytics */
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-NN9D7G85W7',
      },
    },

    /* CSS */
    'gatsby-plugin-sass',

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
