import React from 'react'
import { Link } from 'gatsby'

const MobileNavigation = (props) => {
    return (<nav id="mobileNav" style={{ display: props.display, transform: props.top }}>
        <div id="burgerWrapper">
            <div>
                <h1 id="h1mobile">
                    LIFE IS BETTER AT THE <span id="poolText">P<span id="beanWrapper">{props.width < 750 ? props.beanMobile : props.bean}</span>L</span>
                </h1>
            </div>
            <div>
                <div className="close" onClick={props.handleClick}>
                </div>
            </div>
        </div>
        <div id="mobileNestedNav">
            <div id="mobileNavMain">
                <Link activeClassName="activeMobile" to='/books'>BOOKS</Link>
                <Link activeClassName="activeMobile" to='/about'>ABOUT</Link>
                <Link activeClassName="activeMobile" to='/stockists'>STOCKISTS</Link>
                <Link id="cartMobile" activeClassName="activeMobile" to='/cart'>0 ITEMS (0€)</Link>
            </div>
            <div id="mobileNavMain">
                <Link activeClassName="activeMobile" to='/imprint'>
                    <div className="linkMobileMenu">IMPRINT</div>
                    <div className="linkMobileMenu">TERMS</div>
                    <div id="privacyMobile" className="linkMobileMenu">PRIVACY POLICY</div>
                </Link>
            </div>
        </div>
    </nav>)
}

export default MobileNavigation