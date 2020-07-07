import React from 'react'
import './books.scss'
import '../styles/boockup.css'
import { Link } from 'gatsby'

const Book = () => {
    return (
        //https://3dtransforms.desandro.com/cube
        <div className="book">
            <div className="bookRenderingContainer">
                <div className="container">
                    <div className="boockup">
                        <div className="bookContainer">
                            <div className="bookFront"></div>
                            <div className="bookSideLeft"></div>
                            <div className="bookSideRight"></div>
                            <div className="bookTop"></div>
                            <div className="bookBottom"></div>
                            <div className="bookBack"></div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="bookTitle">FOUNTAIN’S EDIT</h2>
            <p><span className="priceMobile"><strike>€25.00</strike> €20.00<br /></span>
            <Link to='/prouct-page'>DISCIPLIN</Link> <span className="priceDesktop"><sup><strike>€25.00</strike> €20.00</sup></span></p>
        </div>
    )
}
export default Book