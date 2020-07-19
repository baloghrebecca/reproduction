import React, { useState, useEffect, useRef } from 'react'
import './books.scss'
import { Link } from 'gatsby'

const Book = (props) => {
    const [index, setIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState()
    const bookRender = useRef()

    const handleMouseOver = (e) => {
        const { sliderLength } = props
        showOverflow();
        //get the x position of the element 
        const x = e.nativeEvent.offsetX
        //get elements width
        const width = e.target.offsetWidth
        //base to calculate how much the mouse is on the way across 
        const percentage = x / width
        //split images across the width of the element with the base
        //so we devide the element and set an image according to the percentage the mouse is moving across the element
        const imageNumber = Math.floor(percentage * sliderLength)

        if (imageNumber > sliderLength - 1 || imageNumber === sliderLength) {
            setIndex(sliderLength - 1)
            return;
        }
        if (x < 0) {
            setIndex(0)
            return;
        } else {
            setIndex(imageNumber)
        }
    }

    //update on window width resize
    useEffect(() => {
        setWindowWidth(window.innerWidth)
        if (window.innerWidth != windowWidth) {
            setWindowWidth(window.innerWidth)
        }
    });

    const handleTouchMove = (e) => {
        hideOverFlow();
        //Refactor, maybe? It didn't work putting it all in the handleMouseOver
        const { sliderLength } = props
        const x = e.touches[0].clientX
        const width = e.currentTarget.offsetWidth
        const percentage = x / width
        const imageNumber = Math.floor(percentage * sliderLength)
        if (imageNumber > sliderLength - 1 || imageNumber === sliderLength) {
            setIndex(sliderLength - 1)
            return;
        }
        if (x < 0) {
            setIndex(0)
            return;
        } else {
            setIndex(imageNumber)
        }
    }

    //go back to original position, slowly
    const handleMouseLeave = () => {
        showOverflow();
        //only repeat x number of times
        setIntervalLimited(function () {
            if (index > 0 && index < props.sliderLength) {
                setIndex(prevIndex => prevIndex - 1)
            }
        }, 10, index-1)

        function setIntervalLimited(callback, interval, x) {
            for (var i = 0; i < x; i++) {
                setTimeout(callback, i * interval);
            }
        }
    }

    return (
        <div className="book">
            <div onTouchEnd={handleMouseLeave} onTouchMove={handleTouchMove} onMouseMove={handleMouseOver} ref={bookRender} className="bookRenderingContainer">
                <img onMouseLeave={handleMouseLeave} src={props.images[index].props.children.props.src} />
            </div>
            <div>
                <h2 className="bookTitle">FOUNTAIN’S EDIT</h2>
                <p><span className="priceMobile"><strike>€25.00</strike> €20.00<br /></span>
                    <Link to='/product-details'>DISCIPLIN</Link> <span className="priceDesktop"><span id="strike"><sup>€25.00</sup></span><sup> €20.00</sup></span></p>
            </div>
        </div>
    )
}
export default Book


function showOverflow() {
    document.body.style.overflow = "";
}

function hideOverFlow() {
    document.body.style.overflow = "hidden";
}
