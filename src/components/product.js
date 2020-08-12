import React, {useState, updateState, useCallback, useEffect} from 'react'
import './pages.scss'

import Slider from './Slider'
import ReactMarkdown from 'react-markdown'
import {addToCart} from '../services/cart'


const ProductPage = (props) => {

    const hasOldPrice = props.oldPrice !== '.0' ? <strike>€{props.oldPrice}</strike> : ''

    const getImageDivs = generateImageDivs(props.images)

    // const convertToHtml = <ReactMarkdown src={props.hardFacts} />

    return (
        <section id="productPageWrapper">
            <Slider images={getImageDivs} />
            <div id="aboutProductMobile">
                <p>
                    {hasOldPrice} €{props.price}
                </p>
                <p>
                    <a
                        onClick={(e) => 
                            props.handleAddToCart(props.cartData, e)
                        }
                        href='/'>ADD TO CART</a>
                </p>
            </div>
            <div id="aboutProductPageWrapper">
                <div className="col1">
                    <h2>{props.title}</h2>
                    <p>{props.aboutBook}</p>
                </div>
                <div className="col2">
                    <h2>Artist</h2>
                    <p>{props.aboutArtist}</p>
                </div>
                <div className="col3">
                    <h2 className="hideMobile">&nbsp; </h2>
                    <p><span className="hideMobile">{hasOldPrice} €{props.price} <br /> <br /></span>
                        {props.hardFacts}
                    </p>
                </div>
                <div className="col4 productPageCart hideMobile">
                    <h2>&nbsp; </h2>
                    <p>
                    <a
                        onClick={(e) => 
                            props.handleAddToCart(props.cartData, e)
                        }
                        href='/'>ADD TO CART</a>
                    </p>
                </div>
            </div>
        </section>
    )
}
export default ProductPage

function generateImageDivs(images) {
    const generateImageDivs = images.map(image => {
        const url = `http://localhost:1337${image.url}`

        return <div
            draggable="false"
            key={image.id}
            className="imgContainerGallery">
            <img draggable="false"
                aria-label={image.alternativeText}
                src={url} />
        </div>
    });

    return generateImageDivs;
}

