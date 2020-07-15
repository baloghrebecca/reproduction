import React, { useState, useEffect, useRef } from 'react'
import './books.scss'
import '../styles/boockup.css'
import { Link } from 'gatsby'
import ProductImages from './getProductImages'

const Book = (props) => {
    const [index, setIndex] = useState(0);
    const bookRender = useRef()

    const handleMouseOver = (e) => {
        const { sliderLength } = props
        const x = e.nativeEvent.offsetX
        const width = e.target.offsetWidth
        const percentage = x / width
        const imageNumber = Math.floor(percentage * props.sliderLength)
        console.log('img nr', imageNumber, '%', percentage, 'length', sliderLength-1);
        if (imageNumber > sliderLength-1 || imageNumber === sliderLength) {
            setIndex(sliderLength-1)
            return;
        }
        if (x < 0) {
            setIndex(0)
            return;
        } else {
            setIndex(imageNumber)
        }
    }

    const handleMouseOut = () => {
        const { sliderLength, images } = props
    }

    const handleTouchStart = () => {

    }

    return (
        <div className="book">
            <div onTouchStart={handleTouchStart} onMouseOut={handleMouseOut}  onMouseMove={handleMouseOver} ref={bookRender} className="bookRenderingContainer">
                <img src={props.images[index].props.children.props.src} />
            </div>
            <h2 className="bookTitle">FOUNTAIN’S EDIT</h2>
            <p><span className="priceMobile"><strike>€25.00</strike> €20.00<br /></span>
                <Link to='/product-details'>DISCIPLIN</Link> <span className="priceDesktop"><sup><strike>€25.00</strike> €20.00</sup></span></p>
        </div>
    )
}
export default Book