import * as React from "react"
import './pages.scss'

export default class GalleryContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posX1: 0,
      posX2: 0,
      slides: '',
      slideSize: '',
      rightEndOfSlider: '',
      currentPosition: '',
      index: 0
    }
    this.container = React.createRef();
    this.slider = React.createRef();
  }

  handleResize = () => {
      this.setState({
        containerWidth: window.innerWidth,
        currentPosition: window.innerWidth / 3,
        leftEndOfSlider: window.innerWidth / 3,
      });
    }
  
  componentDidMount() {
    this.setState({
      //right end of container
      endSlidesRight: this.slider.current.getBoundingClientRect().right
    })
    //position the slideshow correctly according to window size
    this.handleResize();
    //repositions slideshow to the middle of the screen when resizing the browsers window
    window.addEventListener('resize', this.handleResize)

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)

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

  handleDragStartStop = (e) => {
    //disable ghost images when dragging the images
    e.preventDefault()
  }

  handleOnLoad = (e) => {
    window.scrollBy(0, 1);
    const firstSlideSize = this.slider.current.getElementsByClassName("imgContainerGallery")[0].clientWidth
    const sliderArray = this.slider.current.getElementsByClassName("imgContainerGallery")
    const endOfSlider = this.slider.current.scrollWidth - window.innerWidth / 3
    this.setState({
      sliderArray: sliderArray,
      slideSize: firstSlideSize,
      rightEndOfSlider: endOfSlider
    })
  }

  handleTouchStart = (e) => {
    const { touches } = e
    if (touches && touches.length === 1) {
      document.body.style.overflow = "hidden"
      const touch = touches[0]
      const startX = touch.clientX
      this.setState({ posX1: startX })
    }
  }

  handleTouchMove = (e) => {
    const posX2 = Math.floor(this.state.posX1 - e.touches[0].clientX)
    const sliderPositionLeft = this.slider.current.offsetLeft
    const position = Math.floor(sliderPositionLeft - (posX2 + 60))
    this.setState({
      posX2: posX2,
      currentPosition: position
    })
  }

  handleDragEnd = (e) => {
    this.setState({
      cursor: 'pointer'
    })
    e.preventDefault();
    const { currentPosition, leftEndOfSlider, rightEndOfSlider } = this.state
    const hasReachedTheEnd = currentPosition > leftEndOfSlider || rightEndOfSlider < -currentPosition || this.slider.current.offsetWidth < this.container.current.offsetWidth
    if (hasReachedTheEnd) {
      setTimeout(() => {
        this.setState({ currentPosition: leftEndOfSlider })
      }, 500)
    }
  }


  render() {
    return (<>
      <div onLoad={this.handleOnLoad}
        onTouchMove={this.handleDrag}
        onTouchEnd={this.handleDragEnd}
        onDragStart={this.handleDragStartStop}
        onClick={this.handleDragEnd}
        onMouseUp={this.handleDrag}
        onMouseDown={this.handleDragStart}
        onTouchStart={this.handleTouchStart}
        ref={this.container}
        onTouchMove={this.handleTouchMove}
        style={{ overflow: this.state.overflow }}
        id="galleryProductPage">
        <div
          draggable="false"
          ref={this.slider}
          style={{ left: `${this.state.currentPosition}px`, cursor: this.state.cursor }}
          id="slides">
          {this.props.images}
        </div>
      </div>
    </>)
  }
}