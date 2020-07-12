// import * as React from "react"
// import './pages.scss'
// import Images from './slide'
// import { getImages } from "../services/getImages"


// //bildgröße
// export default class GalleryPlug extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       sliderWidth: '',
//       initialPositionX: '',
//       sliderInititalPosition: '',
//       containerWidth: '',
//       currentPosition: '',
//       steps: '',
//       drag: '',
//       emptyImage: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
//     }
//     this.container = React.createRef();
//     this.slider = React.createRef();
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
//     const position = e.clientX
//     const steps = this.state.initialPositionX - position;
//     const what = this.slider.offsetLeft - steps
//     console.log('what???', what)
//     this.setState({currentPosition: what})
//   }

//   handleDragStart(e) {
//     const initialPosition = e.clientX
//     this.setState({initialPositionX: initialPosition})
//   }

//   handleDragEnd(event) {
//     console.log(event)
//     const position = this.state.containerWidth - (this.state.currentPosition + this.state.sliderWidth)
//     const sliderPositionLeft = window.innerWidth
//     const sliderInititalPosition = window.innerWidth / 2.5
//     console.log('initi', sliderPositionLeft, 'end position', position, 'current Position', this.state.currentPosition, 'container', this.state.containerWidth)
    
//     if (this.state.currentPosition < parseInt(-sliderInititalPosition) ) {
//       this.setState({currentPosition: sliderInititalPosition })
//     }
//     // this.setState(prevstate => ({ currentPosition: prevstate.currentPosition - this.state.steps }));
//   }

//   render() {
//     const images = getImages()
//     console.log(images)
//     return (<>
//       <div ref={this.container} id="galleryProductPage">
//         <div ref={this.slider} onDragEnd={this.handleDragEnd} onDragStart={this.handleDragStart} onDrag={this.handleDrag} style={{ left: `${this.state.currentPosition}px` }} id="slides">
//           <Images  />
//         </div>
//       </div>
//     </>)
//   }
// }

// //https://medium.com/@claudiaconceic/infinite-plain-javascript-slider-click-and-touch-events-540c8bd174f2