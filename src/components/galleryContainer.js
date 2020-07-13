import * as React from "react"
import './pages.scss'

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
      slideSize: '',
      endOfRight: '',
      currentPosition: '',
      index: 0
    }
    this.container = React.createRef();
    this.slider = React.createRef();
  }

  handleResize = () => this.setState({
    containerWidth: window.innerWidth,
    currentPosition: window.innerWidth / 2.5,
    endOfLeft: window.innerWidth / 2.5,
    endOfRight: this.slider.current.scrollWidth
  });

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleDrag = (e) => {
    const posX2 = this.state.posX1 - e.clientX;
    const posX1 = e.clientX;
    this.setState({
      posX2: posX2,
      posX1: posX1,
      positionXInitial: posX1,
      cursor: 'grabbing'
    })
    const sliderPositionLeft = this.slider.current.offsetLeft
    const position = sliderPositionLeft - posX2
    this.setState({
      currentPosition: position
    })
    console.log('sliderposition', this.state.currentPosition, 'endOfLeft', this.state.endOfLeft);
  }

  handleDragStart = (e) => {
    this.setState({
      cursor: 'grabbing'
    })
    const sliderLeft = this.slider.current.offsetLeft
    const positionXStart = e.clientX
    this.setState({
      posInitial: sliderLeft,
      posX1: positionXStart,
      positionXInitial: positionXStart
    })
  }

  handleDragEnd = (e) => {
    this.setState({
      cursor: 'pointer'
    })
    e.preventDefault();
    console.log('current Position', this.state.currentPosition, 'initital endright', this.state.endOfRight)
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

  handleDragStartStop = (e) => {
    e.preventDefault()
  }

  handleKeyClick = (e) => {
    console.log('click', e)
  }

  handleOnLoad = (e) => {
    window.scrollBy(0,1);
    const firstSlideSize = this.slider.current.getElementsByClassName("imgContainerGallery")[0].clientWidth
    const sliderArray = this.slider.current.getElementsByClassName("imgContainerGallery")
    const slides = this.slider.current
    const endOfSlider = this.slider.current.scrollWidth-150
    this.setState({
      sliderArray: sliderArray,
      slides: slides,
      slideSize: firstSlideSize,
      endOfRight: endOfSlider
    })
  }

  render() {
    return (<>
      <div onLoad={this.handleOnLoad}
        onTouchStart={this.handleDragStart}
        onTouchMove={this.handleDrag}
        onTouchEnd={this.handleDragEnd}
        onDragStart={this.handleDragStartStop}
        onClick={this.handleDragEnd}
        onMouseUp={this.handleDrag}
        onMouseDown={this.handleDragStart}
        ref={this.container}
        id="galleryProductPage">
        <div
          draggable="false"
          ref={this.slider}
          style={{ left: `${this.state.currentPosition}px`, cursor: this.state.cursor }}
          id="slides">
          {this.props.children}
        </div>
      </div>
    </>)
  }
}

//https://medium.com/@claudiaconceic/infinite-plain-javascript-slider-click-and-touch-events-540c8bd174f2