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
      secretKey: process.env.STRIPE_KEY || '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',
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
      apiURL: process.env.BACKEND_URL || 'http://pool-backend.herokuapp.com',
      contentTypes: ['product'],
      singleTypes: ['about', 'footer', 'imprint', 'shipping', 'stockists'],
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