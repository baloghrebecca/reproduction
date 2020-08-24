import React, { useState, useEffect } from 'react'
import styles from '../styles/headerMain.module.scss'
import { Link } from 'gatsby'
import changePriceFormat from '../services/changePriceFormat'
import { sumOfItems, getTotalPrice } from '../services/cartMath'
import { bean, beanMobile } from '../services/getSvgBeans'
import Icon from "../assets/close.svg";

const MobileNavigation = (props) => {
    const [itemsSize, setItemsSize] = useState(0)

    useEffect(() => {
        const itemsLength = sumOfItems()
        console.log(<Icon />);
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

    const logoWithSVG = <span id="poolText">P<span id={styles.beanWrapper}>{props.width < 750 ? props.beanMobile : props.bean}</span>L</span>
    const logoWithoutSVG = <span id="poolText">POOL</span>

    const cartLink =  <Link id={styles.cartMobile} activeClassName="activeMobile" to='/cart'>
    {itemsSize} {hadOneOrMoreItems} ({hasTotalPrice}€)</Link>
    const cartLinkDeactivated = <p id={styles.cartMobile} >
    {itemsSize} {hadOneOrMoreItems} ({hasTotalPrice}€)</p>

    return (<nav id={styles.mobileNav} style={{ display: props.display, transform: props.top }}>
        <div id={styles.burgerWrapper}>
            <h1 id={styles.h1mobile} className="h1mobile">
                LIFE IS BETTER AT THE {props.landingPage === 'true'
                    ? logoWithoutSVG
                    : logoWithSVG}
            </h1>
            <div>
                <div className={styles.close} onClick={props.handleClick}>
                    <Icon />
                </div>
            </div>
        </div>
        <div id={styles.mobileNestedNav}>
            <div id={styles.mobileNavMain}>
                <Link activeClassName="activeMobile" to='/books'>BOOKS</Link>
                <Link activeClassName="activeMobile" to='/about'>ABOUT</Link>
                <Link activeClassName="activeMobile" to='/stockists'>STOCKISTS</Link>
                {itemsSize === 0 
                ? cartLinkDeactivated
                : cartLink }
            </div>
            <div id={styles.mobileNavMain}>
                <Link activeClassName="activeMobile" to='/imprint'>
                    <div className={styles.linkMobileMenu}>IMPRINT</div>
                    <div className={styles.linkMobileMenu}>TERMS</div>
                    <div id={styles.privacyMobile} className={styles.linkMobileMenu}>PRIVACY POLICY</div>
                </Link>
            </div>
        </div>
    </nav >)
}


export default MobileNavigation