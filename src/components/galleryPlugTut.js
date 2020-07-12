// import * as React from "react"
// import './pages.scss'
// import Images from './slide'
// import Carousel, { Dots } from '@brainhubeu/react-carousel';

// //https://codepen.io/cconceicao/pen/PBQawy
// export default class GalleryPlugTut extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       posX1 = 0,
//       posX2 = 0,
//       posInitial,
//       posFinal,
//       threshold = 100,
//       slides = items.getElementsByClassName('slide'),
//       slidesLength = slides.length,
//       slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
//       firstSlide = slides[0],
//       lastSlide = slides[slidesLength - 1],
//       cloneFirst = firstSlide.cloneNode(true),
//       cloneLast = lastSlide.cloneNode(true),
//       index = 0,
//       allowShift = true,
//       emptyImage: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
//     }
//     this.container = React.createRef();
//     this.slider = React.createRef();
//     this.images = React.createRef();
//     this.handleDragStart = this.handleDragStart.bind(this)
//     this.handleDrag = this.handleDrag.bind(this)
//     this.handleDragEnd = this.handleDragEnd.bind(this)
//   }

//   handleResize = () => this.setState({
//     containerWidth: window.innerWidth,
//     currentPosition: window.innerWidth / 2.5
//   });


//   componentDidMount() {
//     this.handleResize();
//     window.addEventListener('resize', this.handleResize)
//     const sliderWidth = this.slider.current.getBoundingClientRect().width
//     const sliderPositionLeft = window.innerWidth / 2.5
//     const steps = sliderWidth / 2
//     this.setState({
//       sliderInititalPosition: sliderPositionLeft,
//       sliderWidth: sliderWidth,
//     })
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.handleResize)
//   }

//   // function dragAction (e) {
//   //   e = e || window.event;
    
//   //   if (e.type == 'touchmove') {
//   //     posX2 = posX1 - e.touches[0].clientX;
//   //     posX1 = e.touches[0].clientX;
//   //   } else {
//   //     posX2 = posX1 - e.clientX;
//   //     posX1 = e.clientX;
//   //   }
//   //   items.style.left = (items.offsetLeft - posX2) + "px";
//   // }

//   handleDrag(e) {
  
//   }

//   handleDragStart(e) {
    
//   }

//   handleDragEnd(event) {
   
//   }

//   render() {
//     return (<>
//       <div ref={this.container} id="galleryProductPage">
//         <div ref={this.slider} onDragEnd={this.handleDragEnd} onDragStart={this.handleDragStart} onDrag={this.handleDrag} style={{ left: `${this.state.currentPosition}px` }} id="slides">
//         <Images />
//         </div>
//       </div>
//     </>)
//   }
// }

// //https://medium.com/@claudiaconceic/infinite-plain-javascript-slider-click-and-touch-events-540c8bd174f2