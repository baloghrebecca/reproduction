import React, { useState, useEffect, useRef } from "react"
import './pages.scss'
import { showOverflow, hideOverflow } from '../services/manageOverflow'

const SliderMobile = (props) => {
  const [currentPosition, setCurrentPosition] = useState(0)
  const [counter, setCounter] = useState(1)
  const [sliderLength, setSliderLength] = useState(props.items)
  const [posX1, setPosX1] = useState()
  const [windowWidth, setWindowWith] = useState()
  const [dots, setDots] = useState()

  const slider = useRef()

  const cartLength = props.items
  useEffect(() => {
    setSliderLength(cartLength)

    const windowSize = window.innerWidth
    setWindowWith(windowSize)

    getDots(cartLength)

  }, [cartLength]); //re-renders when CartLength changes so the right amount of dots are displayed

  const handleDragStart = (e) => {
    const { clientX, type, touches } = e

    hideOverflow()

    if (type === 'touchstart') {
      const touch = touches[0]
      const startX = touch.clientX

      setPosX1(startX)
    } else {
      setPosX1(clientX)
    }
  }

  const handleDragEnd = () => {
    showOverflow()

    const halfOfWindowWith = windowWidth / 2

    if (posX1 < halfOfWindowWith && counter <= sliderLength) {

      if (counter === 1) {
        const endPosition = 100 * (sliderLength)
        setCounter(sliderLength + 1)
        setCurrentPosition(-endPosition)
      }

      setCounter(prevCounter => prevCounter - 1)
      setCurrentPosition(prevCurrentPosition => prevCurrentPosition + 100)
    }

    if (posX1 > halfOfWindowWith && counter <= sliderLength) {

      setCounter(prevCounter => prevCounter + 1)
      setCurrentPosition(prevCurrentPosition => prevCurrentPosition - 100)

      if (counter === sliderLength) {
        setCounter(1)
        setCurrentPosition(0)
      }
    }
  }

  const handleDragStartStop = (e) => {
    //disable ghost images when dragging the images
    e.preventDefault()
  }

  const getDots = (numberOfSlides) => {
    let dots = []
    for (var i = 1; i <= numberOfSlides; i++) {
      dots.push(<div key={i} className={counter === i ? 'dot dotActive' : 'dot'}></div>)
    }

    setDots(dots)
  }

  return (<>
    <div
      onTouchEnd={handleDragEnd}
      onDragStart={handleDragStartStop}
      onTouchStart={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseDown={handleDragStart}
      id="gallery-product-page-mobile">
      <div
        draggable="false"
        ref={slider}
        style={{ transform: `translateX(${currentPosition}%)` }}
        id="slides-mobile">
        {props.images}
      </div>
    </div>
    <div id="slider-dots" key={props.items}>
      {dots}
    </div>
  </>)
}

export default SliderMobile
