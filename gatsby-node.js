// //https://www.gatsbyjs.org/docs/node-apis/#onCreateNode

const path = require('path')

//utility function
const makeRequest = (graphql, request) => new Promise((resolve, reect) => {
    resolve(
        graphql(request).then(result => {
            if (result.error) {
                reject(result.errors)
            }

            return result
        })
    )
})

//Gatsby API: 
exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions //deconstruct,createPage is a method in actions
    const generateProductPages = makeRequest(graphql, `
    query getId {
        allStrapiProduct {
          edges {
            node {
              id
              slug
            }
          }
        }
      }      
    `).then(result => { //this takes the result from line 17
        result.data.allStrapiProduct.edges.forEach(({node}) => {
            createPage({
                path: `books/${node.slug}`,
                component: path.resolve(`src/pages/product-details.js`),
                context: {
                    id: node.id
                }
            })
        })
    }) 

    return Promise.all([generateProductPages])
}

