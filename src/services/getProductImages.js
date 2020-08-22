import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styles from '../styles/pages.module.scss'
import Book from '../components/book'

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
    return <div key={index.toString()} className={styles.imgContainerGallery}><img aria-label={image.node.childImageSharp.fluid.originalName} src={image.node.childImageSharp.fluid.src} /></div>
  });
  const allImagesSize = allImages.length
  return (<Book sliderLength={allImagesSize} images={allImages} />)
}

export default ProductImages