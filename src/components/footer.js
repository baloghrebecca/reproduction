import React from 'react'
import './footer.scss'
import { Link } from 'gatsby'

const Footer = () => {
    return (
    <section id="footerWrapper">
        <section id="aboutPoolBooksWrapper">
            <p id="aboutPoolBooksAboutText">POOL is a contemporary publishing house based in Vienna and Berlin with a focus on illustration, graphic design and photography. Together with creatives from all over the world we create unique publications, speak at conferences about our experiences and run workshops on artist books and self-publishing.
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
        <footer id="footer">
            <nav id="footerNav"> 
                    <Link activeClassName="active" to='/imprint'>IMPRINT, TERMS, PRIVACY POLICY</Link>
            </nav>
        </footer>
    </section>
    )
}

export default Footer