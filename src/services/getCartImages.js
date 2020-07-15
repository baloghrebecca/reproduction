import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const CartImages = () => {
  const data = useStaticQuery(graphql`
  query CartImages {
    allFile(filter: {dir: {regex: "/images/cart/"}}, sort: {order: DESC, fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              src
              originalName
            }
          }
        }
      }
    }
  }  
    `)
  const imageList = data.allFile.edges
  const allImages = imageList.map((image, index) => {
    return <div key={index.toString()} className="imgContainerGallery"><img aria-label={image.node.childImageSharp.fluid.originalName} src={image.node.childImageSharp.fluid.src} /></div>
  });
  return allImages
}

export default CartImages