import React from 'react'
import './pages.scss'
import { useStaticQuery, graphql } from "gatsby"
import Book from './book'

const ProductImages = () => {
  const data = useStaticQuery(graphql`
  query ll {
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
    return <div key={index.toString()} className="imgContainerGallery"><img src={image.node.childImageSharp.fluid.src} /></div>
  });
  const allImagesSize = allImages.length
  return (<Book sliderLength={allImagesSize} images={allImages} />)
}

export default ProductImages