"use strict";

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
var path = require("path");

module.exports = {
  siteMetadata: {
    title: 'POOL Publishing',
    description: 'We are a contemporary publishing house from Vienna with a focus on illustration, graphic design and photography. We reach out to creatives from all over the world to create new and so far unseen publications.',
    author: 'POOL Publishing'
  },
  plugins: [{
    resolve: "gatsby-plugin-favicon",
    options: {
      logo: "./src/favicon.png"
    }
  }, {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        options: {
          include: /assets/,
          props: {
            className: "closeSVG",
            title: "close"
          }
        }
      }
    }
  }, {
    resolve: "gatsby-source-stripe",
    options: {
      objects: ['Event', 'Product', 'Sku', 'Customer', 'Charge', 'Session'],
      secretKey: 'sk_test_51HFijtGb1IG5l2E0vgAGpFzzv9QUdTmXCjn6uUmyTmProXJtqZjvzCEjJQJ72u5qGMlgj6R4NU07ohpzLP3yE75900XZ5vV125',
      //real key needed for graphQL
      downloadFiles: true
    }
  }, {
    resolve: "gatsby-plugin-web-font-loader",
    options: {
      custom: {
        families: ["Nuckle Book"],
        urls: ["/fonts/fonts.css"]
      }
    }
  }, "gatsby-plugin-sass", "gatsby-plugin-smoothscroll", "gatsby-transformer-sharp", "gatsby-plugin-sharp", 'gatsby-plugin-react-helmet', {
    resolve: 'gatsby-source-strapi',
    options: {
      apiURL: process.env.API_URL || 'http://pool-backend.herokuapp.com',
      // apiURL: 'http://localhost:1337',
      contentTypes: [// Collection of the Contentcc Types you want to be able to request from Gatsby.
      'product' // 'user'
      ],
      singleTypes: ['about', 'footer', 'imprint', 'stockists'],
      queryLimit: 1000
    }
  }, 'gatsby-plugin-sharp', {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [{
        resolve: 'gatsby-remark-images',
        options: {
          maxWidth: 970
        }
      }]
    }
  }, 'gatsby-plugin-offline']
};