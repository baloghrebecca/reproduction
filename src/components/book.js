import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/books.module.scss'
import { Link } from 'gatsby'
import { showOverflow, hideOverflow } from '../services/manageOverflow'

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

        //this fixes the -1 index bug
        if (index === 0) {
            setIndex(1)
        }
    });

    const handleTouchMove = (e) => {
        hideOverflow();
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
        }, 10, index - 1)

        function setIntervalLimited(callback, interval, x) {
            for (var i = 0; i < x; i++) {
                setTimeout(callback, i * interval);
            }
        }
    }

    //Refactor this: 
    const hasOldPrice = props.oldPrice !== '0.0'
        ? <strike>€{props.oldPrice}</strike>
        : ''

    console.log(index);

    return (
        <div className={styles.book}>
            <div
                onTouchEnd={handleMouseLeave}
                onTouchMove={handleTouchMove}
                onMouseMove={handleMouseOver}
                ref={bookRender}
                className={styles.bookRenderingContainer}>
                <Link to={props.slug}>
                    <div className={styles.imageContainer}>
                        <img className="bookImage"
                            onMouseLeave={handleMouseLeave}
                            alt={props.images[index].alternativeText}
                            src={props.images[index].url} />
                    </div>
                </Link>
            </div>
            <div>
                <p className={styles.priceBook}>
                    <span className={styles.priceBook}>{hasOldPrice} €{props.price}</span><br />
                    <Link to={props.slug}>{props.title}</Link> </p>
            </div>
        </div>
    )
}
export default Book