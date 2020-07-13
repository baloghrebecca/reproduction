import React from 'react'
import './books.scss'
import ProductImages from './getProductImages'

export default class Books extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (<>
            <section id="books">
                <ProductImages />
                <ProductImages />
                <ProductImages />
                <ProductImages />
                <ProductImages />
                <ProductImages />
            </section>
            <section id="aboutPoolBooksWrapper">
                <p id="aboutPoolBooksAboutText">The Vienna-based cultural association “POOL publishing” is a contemporary publishing house.
                <br /> <br />
                The association, whose activities are not aimed at profit, pursues exclusively non-profit purposes, Promotion of art and culture, promotion of cultural activity, mediation of culture, enrichment of cultural life.
                <br />POOL publishing
                </p>
                <p id="aboutPoolBooksAboutAddress">
                    Straußengasse 18/5 <br />
                1050 Vienna <br />
                Austria <br />
                    <br />
                hi@p-oo-l.com <br />
                p-oo-l.com <br />
                </p>
                <p id="aboutPoolBooksSocialMedia">
                    <a href="https://www.facebook.com/poolpublishing" target="blank">Facebook</a><br />
                    <a href="https://www.instagram.com/pool_publishing" target="blank">Instagram</a>
                </p>
            </section>
        </>
        )
    }
}
