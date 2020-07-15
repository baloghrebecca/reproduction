import React, { useState, useEffect, useRef } from 'react'
import './books.scss'
import '../styles/boockup.css'
import { Link } from 'gatsby'
import ProductImages from './getProductImages'

const Book = (props) => {
    const [index, setIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const bookRender = useRef()

    const handleMouseOver = (e) => {
        const { sliderLength } = props
        //get the x position of the element 
        const x = e.nativeEvent.offsetX
        //get elements width
        const width = e.target.offsetWidth
        //base to calculate how much the mouse is on the way across 
        const percentage = x / width
        //split images across the width of the element with the base
        //so we devide the element and set an image according to the percentage the mouse is moving across the element
        const imageNumber = Math.floor(percentage * sliderLength)
        
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

    //update on window width resize
    useEffect(() => {
        if (window.innerWidth != windowWidth) {
            setWindowWidth(window.innerWidth)
        }
    });

    const handleTouchMove = (e) => {
        const { sliderLength } = props
        //get the x position of the element 
        const x = e.touches[0].clientX
        //get elements width
        const width = e.currentTarget.offsetWidth
        console.log('width',);
        //base to calculate how much the mouse is on the way across 
        const percentage = x / width
        const imageNumber = Math.floor(percentage * sliderLength)
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

    return (
        <div className="book">
            <div onTouchMove={handleTouchMove} onMouseMove={handleMouseOver} ref={bookRender} className="bookRenderingContainer">
                <img src={props.images[index].props.children.props.src} />
            </div>
            <h2 className="bookTitle">FOUNTAIN’S EDIT</h2>
            <p><span className="priceMobile"><strike>€25.00</strike> €20.00<br /></span>
                <Link to='/product-details'>DISCIPLIN</Link> <span className="priceDesktop"><sup><strike>€25.00</strike> €20.00</sup></span></p>
        </div>
    )
}
export default Book