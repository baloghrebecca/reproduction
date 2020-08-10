/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'POOL Publishing',
    description: 'We are a contemporary publishing house from Vienna with a focus on illustration, graphic design and photography. We reach out to creatives from all over the world to create new and so far unseen publications.',
    author: 'POOL Publishing'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png"
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /forms/ // See below to configure properly
        }
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Nuckle Book"],
          urls: ["/fonts/fonts.css"],
        },
      }
    }, 
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        contentTypes: [ // Collection of the Content Types you want to be able to request from Gatsby.
          'product',
          // 'user'
        ],
        singleType: [
          //`home-page`,
          //`contact`,
        ], 
        queryLimit: 1000,
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 970,
            },
          },
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
}
