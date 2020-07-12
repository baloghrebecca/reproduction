// import * as React from "react"
// import './pages.scss'
// import Images from './slide'

// //bildgröße
// export default class GalleryDiv extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       counter: 0,
//       sliderWidth: '',
//       xPosition: '',
//       xEndPosition: 30,
//       endSlider: -30,
//       startSlider: 30,
//       currentPosition: 30,
//       emptyImage: ''
//     }
//     this.slider = React.createRef();
//     this.handleDragStart = this.handleDragStart.bind(this)
//     this.handleDrag = this.handleDrag.bind(this)
//     this.handleDragEnd = this.handleDragEnd.bind(this)
//   }

//   componentDidMount() {
//     const sliderWidth = this.slider.current.offsetWidth / 3
//     this.setState({
//       emptyImage: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
//     })
//   }

//   handleDrag(event) {
//     const clickX = event.clientX
//     this.setState({ xPosition: event.clientX })
//     const oldXPosition = this.state.xPosition
//       if (clickX > oldXPosition ) {
//         console.log('left slide')
//         this.setState(prevstate => ({ currentPosition: prevstate.currentPosition - 30 }));
//       } else {
//         console.log('right slide')
//         this.setState(prevstate => ({ currentPosition: prevstate.currentPosition + 30 }));
//       }
    
//   }

//   handleDragStart(event) {
//     this.setState({ xPosition: event.clientX })
//   }

//   handleDragEnd(event) {
//     this.setState({ xEndPosition: event.clientX })
//     console.log('currentPosition', this.state.currentPosition, 'start', this.state.startSlider, 'end', this.state.endSlider)
//     if (this.state.currentPosition > this.state.startSlider || this.state.currentPosition < this.state.endSlider) {
//       console.log('FIRED DRAG END!!!!!!!!')
//       this.setState({currentPosition: 30})
//     }

//   }

//   componentDidUpdate() {
//     // if (this.state.currentPosition > 30 || this.state.currentPosition === parseInt(-60)) {
//     //   this.setState({ currentPosition: 30 })
//     // }
//   }

//   render() {
//     return (<>
//       <div ref={this.slider} id="galleryProductPage">
//         <div id="dragLayer"></div>
//         <div onDragEnd={this.handleDragEnd} onDragStart={this.handleDrag} style={{ transform: `translateX(${this.state.currentPosition}%)` }} id="slides">
//           <Images />
//         </div>
//       </div>
//     </>)
//   }
// }

// //https://medium.com/@claudiaconceic/infinite-plain-javascript-slider-click-and-touch-events-540c8bd174f2