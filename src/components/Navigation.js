import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/headerMain.module.scss'
import { Link } from 'gatsby'
import changePriceFormat from '../services/changePriceFormat'
import { sumOfItems, getTotalPrice } from '../services/cartMath'

const Navigation = (props) => {
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

    const cartLink = <Link
        id={styles.cartMain}
        className={styles.cartMain}
        activeClassName="active"
        to='/cart'>{itemsSize} {hadOneOrMoreItems} ({hasTotalPrice}€)</Link>

    const cartLinkDeactivated = <p id={styles.cartMain}
        className={styles.cartMain}>{itemsSize} {hadOneOrMoreItems} ({hasTotalPrice}€)</p>


    return (<>
        <div id={styles.dividerForMousover}
            onMouseEnter={props.handleMouseEnter}
            onMouseLeave={props.handleMouseLeave}
            onClick={props.handleClick}
        >
        </div>
        <header
            id={styles.headerMain} style={{ visibility: props.visibility }}>
            <h1 id={styles.h1Main}
                className='h1Main'
            >
                <p id='poolSubheadline' className={styles.poolSubheadline}
                >LIFE IS BETTER AT THE
            </p>
                <div id="poolLogo" className="poolLogo"

                >P
            <p id={styles.beanWrapper}>{props.width < 750 ? props.beanMobile : props.bean}
                    </p>L
            </div>
            </h1>

            <nav id={styles.navMain}>
                <Link activeClassName="active" to='/books'>BOOKS</Link>,
            <Link activeClassName="active" to='/about'> ABOUT</Link>,
            <Link activeClassName="active" to='/stockists'> STOCKISTS</Link>
            </nav>

            <Link
                className={styles.menuMain}
                activeClassName="active"
                to='/'
                onClick={props.handleClick}
            >Menu</Link>

            {itemsSize === 0
                ? cartLinkDeactivated
                : cartLink}
        </header>
    </>)
}

export default Navigation