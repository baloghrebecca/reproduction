import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styles from '../styles/pages.module.scss'
//https://codepen.io/cconceicao/pen/PBQawy

const Images = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allFile(filter: {dir: {regex: "/images/gallery/"}}) {
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

    return <div draggable="false" key={index.toString()} className={styles.imgContainerGallery}><img draggable="false" aria-label={image.node.childImageSharp.sizes.originalName} src={image.node.childImageSharp.sizes.src} /></div>
  });

  return allImages;
}

export default Images