import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Book from '../components/Book'

const ProductImages = () => {
  const data = useStaticQuery(graphql`
  query ProductImages {
    allFile(filter: {dir: {regex: "/images/product/"}}, sort: {order: DESC, fields: name}) {
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
  const allImagesSize = allImages.length
  return (<Book sliderLength={allImagesSize} images={allImages} />)
}

export default ProductImages