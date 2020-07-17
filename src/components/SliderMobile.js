import React, { useState, useEffect, useRef } from "react"
import './pages.scss'

const SliderMobile = (props) => {
  const [currentPosition, setCurrentPosition] = useState(0)
  const [counter, setCounter] = useState(1)
  const [sliderLength, setSliderLength] = useState()
  const [posX1, setPosX1] = useState()
  const [windowWidth, setWindowWith] = useState()
  const slider = useRef()

  useEffect(() => {
    const slideLength = document.querySelector('#slidesMobile').childNodes.length
    setSliderLength(slideLength)
    const windowSize = window.innerWidth
    setWindowWith(windowSize)
  }, []);

  const handleDragStart = (e) => {
    const { clientX, type, touches } = e
    if (type === 'touchstart') {
      const touch = touches[0]
      const startX = touch.clientX
      setPosX1(startX)
    } else {
      setPosX1(clientX)
    }
  }

  const handleDragEnd = () => {
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
    return dots
  }

  const dots = getDots(sliderLength)

  return (<>
    <div
      // onLoad={handleOnLoad}
      onTouchEnd={handleDragEnd}
      onDragStart={handleDragStartStop}
      onTouchStart={handleDragStart}
      // onClick={handleDragEnd}
      onMouseUp={handleDragEnd}
      onMouseDown={handleDragStart}
      id="galleryProductPageMobile">
      <div
        draggable="false"
        ref={slider}
        style={{ transform: `translateX(${currentPosition}%)` }}
        id="slidesMobile">
        {props.images}
      </div>
    </div>
    <div id="sliderDots">
      {dots}
    </div>
  </>)
}

export default SliderMobile