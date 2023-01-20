/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-minify`,
    `gatsby-plugin-minify-html`,
    {
      resolve: 'gatsby-plugin-minify-classnames',
      options: {
        /* gatsby-plugin-minify-classnames options here */
      }
    }
  ],
};
