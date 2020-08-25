import React from 'react'
import styles from '../styles/pages.module.scss'
import Slider from './Slider'
import ReactMarkdown from 'react-markdown'

const ProductPage = (props) => {

    const hasOldPrice = props.oldPrice !== '0.0'
        ? <strike>€{props.oldPrice}</strike>
        : ''

    const getImageDivs = generateImageDivs(props.images)

    return (
        <section id={styles.productPageWrapper}>
            <Slider images={getImageDivs} />
            <div id={styles.aboutProductMobile}>
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
            <div id={styles.aboutProductPageWrapper}>
                <div className={styles.col1}>
                    <h2>{props.title}</h2>
                    <p>
                        <ReactMarkdown source={props.aboutBook} />
                    </p>
                </div>
                <div className={styles.col2}>
                    <h2>Artist</h2>
                    <p>
                        <ReactMarkdown source={props.aboutArtist} />
                    </p>
                </div>
                <div className={styles.col3}>
                    <h2 className={styles.hideMobile}>Info </h2>
                    <p><span className={styles.hideMobile}>
                        {hasOldPrice} €{props.price}
                        <br /> <br />
                    </span>
                        <ReactMarkdown source={props.hardFacts} />
                    </p>
                </div>
                <div className={`${styles.col4} ${styles.productPageCart} ${styles.hideMobile}`}>
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
        return <div
            draggable="false"
            key={image.id}
            className={styles.imgContainerGallery}>
            <img draggable="false"
                aria-label={image.alternativeText}
                src={image.url} />
        </div>
    });

    return generateImageDivs;
}
