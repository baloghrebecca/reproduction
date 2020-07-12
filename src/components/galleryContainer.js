import * as React from "react"
import './pages.scss'
import Images from './slide'
import { _checkPlugin } from "gsap/gsap-core"

export default class GalleryContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posX1: 0,
      posX2: 0,
      posInitial: '',
      posFinal: '',
      threshold: 100,
      slides: '',
      slidesLength: 0,
      slideSize: '',
      firstSlide: '',
      lastSlide: '',
      cloneFirst: '',
      endOfRight: '',
      cloneLast: '',
      index: 0,
      allowShift: true,
      currentPosition: '',
    }
    this.container = React.createRef();
    this.slider = React.createRef();
    this.handleDragStart = this.handleDragStart.bind(this)
    this.handleDrag = this.handleDrag.bind(this)
    this.handleDragEnd = this.handleDragEnd.bind(this)
    this.handleDragStartStop = this.handleDragStartStop.bind(this)
  }

  handleResize = () => this.setState({
    containerWidth: window.innerWidth,
    currentPosition: window.innerWidth / 2.5,
    endOfLeft: window.innerWidth / 2.5
  });


  componentDidMount() {
    const sliderSize = this.slider.current.getElementsByClassName("imgContainerGallery").length
    const firstSlideSize = this.slider.current.getElementsByClassName("imgContainerGallery")[0].clientWidth
    const firstSlide = this.slider.current.getElementsByClassName("imgContainerGallery")[0]
    const lastSlide = this.slider.current.getElementsByClassName("imgContainerGallery")[sliderSize - 1]
    const cloneFirstSlide = firstSlide.cloneNode(true)
    const cloneLast = lastSlide.cloneNode(true)
    const slides = this.slider.current
    const endOfSlider = window.innerWidth+firstSlideSize
    this.setState({
      slides: slides,
      slidesLength: sliderSize,
      slideSize: firstSlideSize,
      firstSlide: firstSlide,
      lastSlide: lastSlide,
      cloneFirst: cloneFirstSlide,
      cloneLast: cloneLast,
      endOfRight: endOfSlider 
    })
    this.handleResize();
    window.addEventListener('resize', this.handleResize)

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleDrag(e) {
    e.target.style.cursor = 'grabbing';
    const posX2 = this.state.posX1 - e.clientX;
    const posX1 = e.clientX;
    this.setState({
      posX2: posX2,
      posX1: posX1
    })
    console.log('X1 initial', this.state.positionXInitial, 'X1', posX1, 'X2', posX2)
    if (this.state.positionXInitial > posX2) {
      console.log('initial bigger')
    const sliderPositionLeft = this.slider.current.offsetLeft
    const position = sliderPositionLeft - posX2
    this.setState({
      currentPosition: position
    })
    } else {
      console.log('initial smaller')
      const sliderPositionLeft = this.slider.current.offsetLeft
      const position = sliderPositionLeft + posX2
      this.setState({
        currentPosition: position
      })
    }

  }

  handleDragStart(e) {
    // e.preventDefault();
    const sliderLeft = this.slider.current.offsetLeft
    const positionXStart = e.clientX
    this.setState({
      posInitial: sliderLeft,
      posX1: positionXStart,
      positionXInitial: positionXStart
    })
  }

  handleDragEnd(e) {
    e.target.style.cursor = 'pointer';
    e.preventDefault();
    console.log('current Position', this.state.currentPosition, 'initital endright', this.state.endOfRight, 'initial left', this.state.endOfLeft)
    if (this.state.currentPosition < -this.state.endOfRight) {
      const inititalPosition = this.state.endOfLeft
      this.setState({
        currentPosition: inititalPosition,
      })
    }
    if (this.state.currentPosition > this.state.endOfLeft) {
      const inititalPosition = this.state.endOfLeft
      this.setState({
        currentPosition: inititalPosition,
      })
    }
  
  }

  handleDragStartStop(e) {
    e.preventDefault()
  }

  render() {
    return (<>
      <div onDragStart={this.handleDragStartStop} onMouseUp={this.handleDragEnd} onClick={this.handleDragStart} onMouseDown={this.handleDrag} ref={this.container} id="galleryProductPage">
        <div draggable="false" ref={this.slider}  style={{ left: `${this.state.currentPosition}px` }} id="slides">
          {this.props.children}
        </div>
      </div>
    </>)
  }
}

//https://medium.com/@claudiaconceic/infinite-plain-javascript-slider-click-and-touch-events-540c8bd174f2