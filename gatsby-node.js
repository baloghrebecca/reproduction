// //https://www.gatsbyjs.org/docs/node-apis/#onCreateNode

// const path = require('path')

// //Our function runs when a new node is created.
// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions

//     //here we only target the nodes types that we want to manipulate.
//     if (node.internal.type == 'MarkdownRemark') {
//         //here we are getting the path of the file
//         const absolutePath = node.fileAbsolutePath

//         //here we are extracting the filename from the path and also removing their filename
//         //we are useing a node.js core module that we defined in const path = require('path')
//         const slug = path.basename(absolutePath, '.md')
//         // console.log('@@@@@@@@@@@@@@@@@', slug)

//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//         //this only prints our MarkdownRemark type files:
//         // console.log(JSON.stringify(node, undefined, 4))
//     }
// }

// //in this case the 'graphql' is a function, and therefore it works slightly different then we used to
// module.exports.createPages = async ({ graphql, actions }) => {
//     //this is called destructuring from the object 'actions'
//     const { createPage } = actions
//     //the resolve will create the absolute path. (everything that comes before 'src')
//     const blogTemplatePath = path.resolve('./src/templates/blog.js')
//     //we don't need the 'useStaticQuery' here. It returns a 'promise'.
//     const responses = await graphql(`
//     query {
//         allMarkdownRemark {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `)

//     const responseList = responses.data.allMarkdownRemark.edges;
 
//     responseList.forEach(response => {
//         const blogPostSlug = response.node.fields.slug;
//         createPage({
//             //Blogposts will be rendered in the template we defined
//             component: blogTemplatePath,
//             //this path will be created for each
//             path: `/shop/${blogPostSlug}`,
//             //extra data to pull everything they need out of the 
//             context: {
//                 slug: blogPostSlug
//             }
//         })
//     })

// }