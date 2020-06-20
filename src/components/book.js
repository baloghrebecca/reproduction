import React from 'react'
import './books.scss'
import '../styles/boockup.css'

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
                <h2>FOUNTAIN’S EDIT</h2>
                <p>DISCIPLIN <span className="price">€25.00 €20.00</span></p>
            </div>
        </div>
    )
}
export default Book