import * as React from "react"
import './pages.scss'
import Images from './slide'

//bildgröße
export default class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderWidth: '',
      translate: 40,
      posX1: 0,
      posX2: 0,
      currentPosition: 40,
      posInitial: '',
      posFinal: ''
    }

    this.slider = React.createRef();
    this.handleClickLeft = this.handleClickLeft.bind(this)
    this.handleClickRight = this.handleClickRight.bind(this)
  }

  componentDidMount() {
    const width = this.slider.current.clientWidth
    this.setState({ sliderWidth: width })
  }

  handleClickRight(e) {
    if (this.state.currentPosition <= parseFloat(-this.state.sliderWidth)) {
      this.setState({
        currentPosition: 40
      })
    } else {
      this.setState(prevstate => ({ currentPosition: prevstate.currentPosition - 45}));
    }
    console.log(e)
    console.log('x position', parseFloat(-this.state.sliderWidth), 'current position', this.state.currentPosition)
  }

  handleClickLeft(e) {
    if (this.state.currentPosition <= 400) {
      this.setState({
        currentPosition: 40
      })
    } else {
      this.setState(prevstate => ({ currentPosition: prevstate.currentPosition + 45}));
    }
  }

  render() {  
    return (<>
      <div id="galleryProductPage">
      <div id="galleryArrowsWrapper">
            <div onClick={this.handleClickLeft} onTouchStart={this.handleClickLeft} id="arrowLeft"></div>
            <div onClick={this.handleClickRight} onTouchStart={this.handleClickRight}  id="arrowRight"></div>
        </div>
          <div draggable="false" ref={this.slider} style={{ transform: `translateX(${this.state.currentPosition}%)` }} id="slides">
            <Images />
        </div>
      </div>
    </>)
  }
}

//https://medium.com/@claudiaconceic/infinite-plain-javascript-slider-click-and-touch-events-540c8bd174f2