import React from 'react'
import './pages.scss'
import { useStaticQuery, graphql } from "gatsby"
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
    // return <div key={index.toString()} className="imgContainerGallery"><img src={image.node.childImageSharp.sizes.src} /></div>
    return <div draggable="false" key={index.toString()} className="imgContainerGallery"><img draggable="false" src={image.node.childImageSharp.sizes.src} /></div>
  });

  return allImages;
}

export default Images