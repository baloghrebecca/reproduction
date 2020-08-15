import React from 'react'
import './pages.scss'
import Slider from './Slider'
import ReactMarkdown from 'react-markdown'


const ProductPage = (props) => {

    const hasOldPrice = props.oldPrice !== '0.0'
        ? <strike>€{props.oldPrice}</strike>
        : ''

    const getImageDivs = generateImageDivs(props.images)

    return (
        <section id="product-page-wrapper">
            <Slider images={getImageDivs} />
            <div id="about-product-mobile">
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
            <div id="about-product-page-wrapper">
                <div className="col-1">
                    <h2>{props.title}</h2>
                    <p>
                        <ReactMarkdown source={props.aboutBook} />
                    </p>
                </div>
                <div className="col-2">
                    <h2>Artist</h2>
                    <p>
                        <ReactMarkdown source={props.aboutArtist} />
                    </p>
                </div>
                <div className="col-3">
                    <h2 className="hide-mobile">&nbsp; </h2>
                    <p>
                        <span className="hide-mobile">{hasOldPrice} €{props.price}
                            <br /> <br />
                        </span>
                        <ReactMarkdown source={props.hardFacts} />
                    </p>
                </div>
                <div className="col-4 product-page-cart hide-mobile">
                    <h2>&nbsp; </h2> {/* placeholder */}
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
        const url = `http://pool-backend.herokuapp.com${image.url}`

        return <div
            draggable="false"
            key={image.id}
            className="img-container-gallery">
            <img draggable="false"
                aria-label={image.alternativeText}
                src={url} />
        </div>
    });

    return generateImageDivs;
}

