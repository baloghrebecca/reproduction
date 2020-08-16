import React, { useEffect, useState } from 'react'
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

    const hasTotalPrice = totalPrice === 0
        ? '0'
        : priceFormatted

    const hadOneOrMoreItems = itemsSize === 1
        ? 'ITEM'
        : 'ITEMS'

    return (<nav id="mobileNav" style={{ display: props.display, transform: props.top }}>
        <div id="burgerWrapper">
            <div>
                <h1 id="h1Mobile">
                    LIFE IS BETTER AT THE <span id="poolText">P<span id="beanWrapper">
                        {props.width < 750 ? props.beanMobile : props.bean}</span>L</span>
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
                <Link id="cart-mobile" activeClassName="activeMobile" to='/cart'>
                    {itemsSize} {hadOneOrMoreItems} ({hasTotalPrice}€)</Link>
            </div>
            <div id="mobileNavMain">
                <Link activeClassName="activeMobile" to='/imprint'>
                    <div className="linkMobileMenu">IMPRINT</div>
                    <div className="linkMobileMenu">TERMS</div>
                    <div id="privacy-mobile" className="linkMobileMenu">PRIVACY POLICY</div>
                </Link>
            </div>
        </div>
    </nav>)
}

export default MobileNavigation