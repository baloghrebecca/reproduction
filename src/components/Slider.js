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
      leftEndOfSlider: '',
      currentPosition: '',
      index: 0
    }
    this.container = React.createRef();
    this.slider = React.createRef();
  }

  handleResize = () => {
    this.setCurrentPositionAndLeftAndOfSlider();
  }

  componentDidMount() {
    this.setCurrentPositionAndLeftAndOfSlider();
    this.handleResize();
    //repositions slideshow to the middle of the screen when resizing the browsers window
    window.addEventListener('resize', this.handleResize)
  }

  handleOnLoad = (e) => {
    const slider = this.slider.current
    window.scrollBy(0, 1);
    const firstSlideSize = slider.getElementsByClassName("imgContainerGallery")[0].clientWidth
    const sliderArray = slider.getElementsByClassName("imgContainerGallery")
    this.setCurrentPositionAndLeftAndOfSlider();
    this.setState({
      sliderArray: sliderArray,
      slideSize: firstSlideSize,
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleDrag = (e) => {
    const { posX1 } = this.state
    const slider = this.slider.current
    //difference between first and end position of the mouse (total amount of pixel travelled)
    const posX2 = posX1 - e.clientX;
    this.setState({
      posX2: posX2,
      cursor: 'grabbing'
    })
    //the current left position of the slider 
    const sliderPositionLeft = slider.offsetLeft
    //get new position by subtracting the travelled pixel 
    const position = sliderPositionLeft - posX2
    this.setState({
      currentPosition: position
    })
  }

  handleDragStart = (e) => {
    this.hideOverflow();
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

  handleTouchStart = (e) => {
    const { touches } = e
    if (touches && touches.length === 1) {
      this.hideOverflow();
      const touch = touches[0]
      const startX = touch.clientX
      this.setState({ posX1: startX })
    }
  }

  handleTouchMove = (e) => {
    const slider = this.slider.current
    const posX2 = Math.floor(this.state.posX1 - e.touches[0].clientX)
    const sliderPositionLeft = slider.offsetLeft
    const position = Math.floor(sliderPositionLeft - (posX2 + 60))
    this.setState({
      posX2: posX2,
      currentPosition: position
    })
  }

  handleDragEnd = (e) => {
    const { currentPosition, leftEndOfSlider, rightEndOfSlider } = this.state
    this.showOverflow();
    this.setState({
      cursor: 'pointer'
    })
    const isSliderSmallerThanContainer = this.slider.current.offsetWidth < this.container.current.offsetWidth;
    const hasReachedTheEnd = currentPosition > leftEndOfSlider || rightEndOfSlider < -currentPosition || isSliderSmallerThanContainer
    if (hasReachedTheEnd) {
      setTimeout(() => {
        this.setState({ currentPosition: leftEndOfSlider })
      }, 500)
    }
  }

  render() {
    console.log(this.state.leftEndOfSlider, this.state.rightEndOfSlider, this.state.currentPosition);
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



  setCurrentPositionAndLeftAndOfSlider() {
    if (window.innerWidth < 750) {
      this.setState({
        currentPosition: 0,
        leftEndOfSlider: 0
      });
    }
    else {
      this.setState({
        currentPosition: Math.floor(window.innerWidth / 3),
        leftEndOfSlider: Math.floor(window.innerWidth / 3)
      });
    }
    const end = Math.floor(this.slider.current.scrollWidth - window.innerWidth / 2);
    this.setState({
      containerWidth: window.innerWidth,
      rightEndOfSlider: end,
    });
  }

  showOverflow() {
    document.body.style.overflow = "";
  }

  hideOverflow() {
    document.body.style.overflow = "hidden";
  }
}