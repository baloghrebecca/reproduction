import React, { useState, useEffect, useRef } from 'react'
import './books.scss'
import '../styles/boockup.css'
import { Link } from 'gatsby'
import ProductImages from './getProductImages'

const Book = (props) => {
    const [index, setIndex] = useState(0);
    const [posX, setPosX] = useState(0);
    const [bookContainerWidth, setBookContainerWidth] = useState(0);
    const bookRender = useRef()

    useEffect(() => {
        const booksContainerWidthHalf = bookRender.current.clientWidth / 2
        setBookContainerWidth(booksContainerWidthHalf)
    });

    const handleMouseOver = (e) => {
        if (e.clientX > bookContainerWidth) {
            if (index < 36) {
                setIndex(index + 6)
                console.log(index);
            } else {
                return;
            }
        }
        if (e.clientX < bookContainerWidth) {
            if (index > 0) {
                setIndex(index - 6)
                console.log(index);
            } else {
                return;
            }
        }
        if (e.clientX === bookContainerWidth) {
            setIndex(0)
        }
    }

    const handleMouseEnter = (e) => {
        setPosX(e.clientX)
    }

    return (
        <div className="book">
            <div onMouseEnter={handleMouseEnter} onMouseMove={handleMouseOver} ref={bookRender} className="bookRenderingContainer">
                <img src={props.images[index].node.childImageSharp.sizes.src} />
            </div>
            <h2 className="bookTitle">FOUNTAIN’S EDIT</h2>
            <p><span className="priceMobile"><strike>€25.00</strike> €20.00<br /></span>
                <Link to='/product-details'>DISCIPLIN</Link> <span className="priceDesktop"><sup><strike>€25.00</strike> €20.00</sup></span></p>
        </div>
    )
}
export default Book