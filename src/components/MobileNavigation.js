import React, { useEffect, useState} from 'react'
import { Link } from 'gatsby'
import changePriceFormat from '../services/changePriceFormat'
import { sumOfItems, getTotalPrice } from '../services/cartMath'

const MobileNavigation = (props) => {
    const [itemsSize, setItemsSize] = useState(0)

    useEffect(() => {
        const itemsLength = sumOfItems()
        setItemsSize(itemsLength)
    });

    const totalPrice = getTotalPrice()
    const priceFormatted = changePriceFormat(totalPrice)

    const hasTotalPrice = totalPrice === 0 ? '0' : priceFormatted
    const hadOneOrMoreItems = itemsSize === 1 ? 'ITEM' : 'ITEMS'


    return (<nav id="mobile-nav" style={{ display: props.display, transform: props.top }}>
        <div id="burger-wrapper">
            <div>
                <h1 id="h1-mobile">
                    LIFE IS BETTER AT THE <span id="pool-text">P<span id="bean-wrapper">{props.width < 750 ? props.beanMobile : props.bean}</span>L</span>
                </h1>
            </div>
            <div>
                <div className="close" onClick={props.handleClick}>
                </div>
            </div>
        </div>
        <div id="mobile-nested-nav">
            <div id="mobile-nav-main">
                <Link activeClassName="active-mobile" to='/books'>BOOKS</Link>
                <Link activeClassName="active-mobile" to='/about'>ABOUT</Link>
                <Link activeClassName="active-mobile" to='/stockists'>STOCKISTS</Link>
<Link id="cart-mobile" activeClassName="active-mobile" to='/cart'>{itemsSize} {hadOneOrMoreItems} ({hasTotalPrice}€)</Link>
            </div>
            <div id="mobile-nav-main">
                <Link activeClassName="active-mobile" to='/imprint'>
                    <div className="link-mobile-menu">IMPRINT</div>
                    <div className="link-mobile-menu">TERMS</div>
                    <div id="privacy-mobile" className="link-mobile-menu">PRIVACY POLICY</div>
                </Link>
            </div>
        </div>
    </nav>)
}

export default MobileNavigation