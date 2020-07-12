import GetImages from "../services/getImages"
import * as React from "react"
import './pages.scss'

export default function GalleryPlug() {
    // const { edges } = GetImages()
    // console.log(edges)
    //   const allImagesSorted = edges.sort()
    //   const allImages = allImagesSorted.map((image, index) => {
    //     // return <div key={index.toString()} className="imgContainerGallery"><img src={image.node.childImageSharp.sizes.src} /></div>
    //     return <div key={index.toString()} className="imgContainerGallery"><img src={image.node.childImageSharp.sizes.src} /></div>
    //   });
    return (<>
         <div ref={this.container} id="galleryProductPage">
         <div ref={this.slider} onDragEnd={this.handleDragEnd} onDragStart={this.handleDragStart} onDrag={this.handleDrag} style={{ left: `${this.state.currentPosition}px` }} id="slides">
          {/* <Images  /> */}
        </div>
      </div>
    </>
    )
}