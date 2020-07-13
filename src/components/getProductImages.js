import React from 'react'
import './pages.scss'
import { useStaticQuery, graphql } from "gatsby"
import Book from './book'

const ProductImages = () => {
  const data = useStaticQuery(graphql`
  query ProductImages {
    allFile(filter: {dir: {regex: "/images/product/"}}) {
      edges {
        node {
          childImageSharp {
            sizes {
              src
              originalName
            }
          }
        }
      }
    }
  }  
    `)
  const allImagesSorted = data.allFile.edges.sort()
  const allImages = allImagesSorted.map((image, index) => {
    return <div key={index.toString()} className="imgContainerGallery"><img src={image.node.childImageSharp.sizes.src} /></div>
  });
  const allImagesSize = allImages.length
  return (<Book sliderLength={allImagesSize} images={allImagesSorted} />)
}

export default ProductImages