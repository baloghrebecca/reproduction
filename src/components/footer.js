import React from 'react'
import './footer.scss'
import { Link } from 'gatsby'

const Footer = () => {
    return (
    <section id="footerWrapper">
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
        <footer id="footer">
            <nav id="footerNav"> 
                    <Link activeClassName="active" to='/imprint'>IMPRINT</Link>,
                    <Link activeClassName="active" to='/imprint'> TERMS</Link>,
                    <Link activeClassName="active" to='/imprint'> PRIVACY POLICY</Link>
            </nav>
        </footer>
    </section>
    )
}

export default Footer