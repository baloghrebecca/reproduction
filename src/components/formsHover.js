import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/forms.module.scss'
import { shapes, shapesMobile } from './shapes'
import { showOverflow, hideOverflow } from '../services/manageOverflow'
import Div100vh from 'react-div-100vh';

const FormsHover = (props) => {
    const [index, setIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState()
    const [windowHeight, setWindowHeight] = useState()
    const forms = useRef()

    const handleMouseOver = (e) => {
        console.log('enter toucnmove');
        const sliderLength = shapes.length
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
        setWindowHeight(window.innerHeight)
        if (window.innerHeight != windowHeight) {
            setWindowHeight(window.innerHeight)
        }

        //this fixes the -1 index bug
        if (index === 0) {
            setIndex(0)
        }
    });

    const handleTouchMove = (e) => {
        hideOverflow();
        const sliderLength = shapes.length
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
            if (index > 0 && index < shapes.length) {
                setIndex(prevIndex => prevIndex - 1)
            }
        }, 10, index - 1)

        function setIntervalLimited(callback, interval, x) {
            for (var i = 0; i < x; i++) {
                setTimeout(callback, i * interval);
            }
        }
    }


    const whichViewBox = windowWidth > 600 ? `0 0 1920 1080` : `0 0 397 870`
    const whatShapes = windowWidth > 600 ? shapes : shapesMobile


    return (
        <div ref={forms} style={{ overflow: 'hidden' }} 
        onClick={props.handleScroll} 
        id={styles.formsDiv}
        style={{ opacity: props.opacity, display: props.displayForms }}
            onTouchEnd={handleMouseLeave}
            onTouchMove={handleTouchMove}
            onMouseMove={handleMouseOver}>
            <section id={styles.forms} >
                <svg 
                    className={styles.formItem} xmlns="http://www.w3.org/2000/svg" 
                    viewBox={whichViewBox} preserveAspectRatio="none meet"
                    >
                    <path id={styles.form} d={whatShapes[index]} /></svg>
            </section>
        </div>
    )
}

export default FormsHover