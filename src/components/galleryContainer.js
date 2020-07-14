import * as React from "react"
import './pages.scss'
import { clearConfigCache } from "prettier";

export default class GalleryContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posX1: 0,
      posX2: 0,
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
    endOfRight: this.slider.current.scrollWidth - window.innerWidth / 3
  });

  componentDidMount() {
    const rightEndOfSlider = this.slider.current.getBoundingClientRect().right
    this.setState({rightEnd: rightEndOfSlider})
    //position the slideshow correctly according to window size
    this.handleResize();
    //repositions slideshow to the middle of the screen when resizing the browsers window
    window.addEventListener('resize', this.handleResize)
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleDrag = (e) => {
    //difference between first and end position of the mouse (total amount of pixel travelled)
    const posX2 = this.state.posX1 - e.clientX;
    this.setState({
      posX2: posX2,
      cursor: 'grabbing'
    })
    //the current left position of the slider 
    const sliderPositionLeft = this.slider.current.offsetLeft
    //get new position by subtracting the travelled pixel 
    const position = sliderPositionLeft - posX2
    this.setState({
      currentPosition: position
    })
  }

  handleDragStart = (e) => {
    this.setState({
      cursor: 'grabbing'
    })
    //initital start position of the mouse
    const positionXStart = e.clientX
    this.setState({
      posX1: positionXStart,
    })

  }

  handleDragEnd = (e) => {
    this.setState({
      cursor: 'pointer'
    })
    e.preventDefault();
    //check if end of slider has been reached
    if (this.state.currentPosition < -this.state.endOfRight) {
      const inititalPosition = this.state.endOfLeft
      this.setState({
        currentPosition: inititalPosition,
      })
    }
    //check if start of slider has been reached
    if (this.state.currentPosition > this.state.endOfLeft) {
      const inititalPosition = this.state.endOfLeft
      this.setState({
        currentPosition: inititalPosition,
      })
    }
  }

  handleDragStartStop = (e) => {
    //disable ghost images when dragging the images
    e.preventDefault()
  }

  handleKeyDown = (e) => {
    console.log('offsetRight', this.slider.current.getBoundingClientRect().right);
    const widthOfStep = this.state.containerWidth / (this.props.sliderLength-2)
    const sliderPositionLeft = this.slider.current.offsetLeft
    this.setState({
      step: widthOfStep
    })
    console.log('currentPosition', this.state.currentPosition, 'end left', this.state.endOfLeft, 'end right', -this.state.endOfLeft*this.props.sliderLength-1);
    if (e.keyCode === 39) {
      const endOfRight = this.slider.current.getBoundingClientRect().right
      console.log('left', this.state.endOfLeft, 'right', endOfRight);
      if (this.state.endOfLeft < -endOfRight){
        console.log('enter end');
        return;
      }
      const position = sliderPositionLeft - widthOfStep
      this.setState({
        currentPosition: position
      })
    } 
    if (e.keyCode === 37) {
      if (this.state.endOfLeft < this.state.currentPosition) {
        return;
      }
      const position = sliderPositionLeft + widthOfStep
      this.setState({
        currentPosition: position
      })
    }

  }

  handleOnLoad = (e) => {
    window.scrollBy(0, 1);
    const firstSlideSize = this.slider.current.getElementsByClassName("imgContainerGallery")[0].clientWidth
    const sliderArray = this.slider.current.getElementsByClassName("imgContainerGallery")
    const slides = this.slider.current
    const endOfSlider = this.slider.current.scrollWidth - window.innerWidth / 3
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
        onKeyDown={this.handleKeyDown}
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