/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Tech2Flow`,
    description: `Wherever we go the tech flows.`,
    author: `@envytheme`,
    siteUrl: `https://tech2flow.com`,
    siteEmail: `hello@tech2flow.com`,
    address: `1137 Budapest, Szent István körút 22.`,
    country: `Hungary`,
    phoneNumber: `(+36) 20 - 399 - 8867`,
    social: {
      facebook: `tech2flow`,
      twitter: `tech2flow`,
      linkedin: `tech2flow`,
    },
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-transformer-remark',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
