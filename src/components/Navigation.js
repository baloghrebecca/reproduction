import React, {useState, useEffect} from 'react'
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


    return (<header id={styles.headerMain} style={{ visibility: props.visibility }}>
    <h1 id={styles.h1Main}
            onClick={props.handleClick}
            onMouseEnter={props.handleMouseEnter}
            onMouseLeave={props.handleMouseLeave}>
            <span id='text' className={styles.text} style={{ display: props.displayText, transform: `translateX(-280px)` }}>LIFE IS BETTER AT THE  </span>
            <span id="poolText">P<span id={styles.beanWrapper}>{props.width < 750 ? props.beanMobile : props.bean}</span>L</span></h1>

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

        <Link
            id={styles.cartMain}
            className={styles.cartMain}
            activeClassName="active"
            to='/cart'>{itemsSize} {hadOneOrMoreItems} ({hasTotalPrice}€)</Link>
    </header>)
}

export default Navigation