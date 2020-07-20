import React from 'react'
import { Link } from 'gatsby'

const MobileNavigation = (props) => {
    return (<nav id="mobileNav" style={{ display: props.display, transform: props.top }}>
        <div id="burgerWrapper">
            <div className="close" onClick={props.handleClick}>
            </div>
        </div>
        <div id="mobileNestedNav">
            <div>
                <Link activeClassName="activeMobile" to='/books'>BOOKS</Link>
                <Link activeClassName="activeMobile" to='/about'>ABOUT</Link>
                <Link activeClassName="activeMobile" to='/stockings'>STOCKINGS</Link>
                <Link activeClassName="activeMobile" to='/cart'>0 ITEMS (0€)</Link>
            </div>
            <div>
                <Link activeClassName="activeMobile" to='/imprint'>IMPRINT</Link>
                <Link activeClassName="activeMobile" to='/imprint'>TERMS</Link>
                <Link activeClassName="activeMobile" to='/imprint'>PRIVACY POLICY</Link>
            </div>
        </div>
    </nav>)
}

export default MobileNavigation