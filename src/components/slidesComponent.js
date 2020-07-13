import React from 'react'
import './pages.scss'
import { useStaticQuery, graphql } from "gatsby"
import GalleryContainer from './galleryContainer'

//https://codepen.io/cconceicao/pen/PBQawy
const Slides = () => {
  const data = useStaticQuery(graphql`
  query GetAllImages {
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
    return <div key={index.toString()} className="imgContainerGallery"><img src={image.node.childImageSharp.sizes.src} /></div>
  });
  const allImagesSize = allImages.length
  return (<GalleryContainer sliderLength={allImagesSize} allImagesWithContainer={allImages} images={allImagesSorted}> {allImages} </GalleryContainer>)
}

export default Slides