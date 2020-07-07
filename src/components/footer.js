import React from 'react'
import './footer.scss'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <footer id="footer">
            <nav id="footerNav">
                    <Link activeClassName="active" to='/imprint'>IMPRINT</Link>,
                    <Link activeClassName="active" to='/imprint'> TERMS</Link>,
                    <Link activeClassName="active" to='/imprint'> PRIVACY POLICY</Link>
                </nav>
        </footer>
    )
}

export default Footer