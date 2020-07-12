import React from 'react'
import './pages.scss'
import { Link } from 'gatsby'
import GalleryPlug from './galleryPlugHook'
import Slides from './slidesComponent'
import GalleryContainer from './galleryContainer'
import Example from './functionalComponent'

const ProductPage = () => {
    return (
        <section id="productPageWrapper">
                <Slides />
            <div id="aboutProductMobile">
                    <p>
                    <strike>€25.00</strike> €20.00
                    </p>
                    <p>
                    <Link to='/'>ADD TO CART</Link>
                    </p>
                </div>
            <div id="aboutProductPageWrapper">
            
                <div className="col1">
                    <h2>Discipline</h2>
                    <p>The Vienna-based photo collective Fountain’s Edit sheds a light on the notion of discipline in six series and an accompanying glossary. The softcover book underlines and emphasizes their different photographic styles and aesthetics by using a different kind of paper for each series. </p>
                </div>
                <div className="col2">
                    <h2>Artist</h2>
                    <p>Fountain’s Edit is a group of photographers – Erli Grünzweil, Susanna Hofer, Martina Lajczak, Marlene Mautner, Nadia Morozewicz, Stefan Pani and Alicia Pawelczak – based in Vienna, Berlin and San Francisco.</p>
                </div>
                <div className="col3">
                    <h2 className="hideMobile">&nbsp; </h2>
                    <p><span className="hideMobile"><strike>€25.00</strike> €20.00 <br /> <br /></span>
                        Photography<br />
                        208 pages<br />
                        Softcover<br />
                        16 x 23 cm<br />
                        Limited edition of 250<br />
                        <br />
                        978-3-9504596-3-0
                        </p>
                        </div>
                    <div className="col4 productPageCart hideMobile">
                        <h2>&nbsp; </h2>
                        <p>
                            <Link to='/'>ADD TO CART</Link>
                        </p>
                    </div>
                </div>
        </section>
    )
}
export default ProductPage