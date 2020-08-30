import React from 'react'
import styles from '../styles/pages.module.scss'
import changePriceFormat from '../services/changePriceFormat'

export const CartItem = (props) => {
    const items = props.names.map((name, index) => <span key={index} className={styles.cartListItem}> {name} <br /></span>);

    return (
        <p>
            {items}
        </p>)
}

export const CartProductName = (props) => {
    const items = props.items.map((item, index) =>
        <span key={index} className={styles.cartListItem}>
            <a href="/" onClick={(e) => props.removeItem(item, e)}>&times;</a>
            &nbsp;{item.title} <br />
        </span>);

    return (
        <p>
            {items}
        </p>)
}

export const CartProductQuantity = (props) => {

    const items = props.items.map((item, index) =>
        <p key={index} className={`${styles.cartListItem} ${styles.cartQuantity}`}>
            <span className={styles.itemQuantity}>{item.quantity}</span>
            <span>
                <a href="/" onClick={(e) => props.decrementQuantity(item, e)}>-</a> &nbsp;
                <a href="/" onClick={(e) => props.incrementQuantity(item, e)}>+</a>
            </span>
            <br />
        </p>);

    return (
        <div id={styles.cartListQuantity}>
            {items}
        </div>)
}

export const ProductWithInfos = (props) => {
    console.log('ITEM!', props.items);
    const products = props.items.map((item, index) => {
        const price = changePriceFormat(item.price)
        const priceSubtotal = changePriceFormat(item.price * item.quantity)
        return <>
            <div className={styles.cartCol1}>
                <p>
                    <span key={index} className={styles.cartListItem}>
                        <a href="/" onClick={(e) => props.removeItem(item, e)}>&times;</a>
            &nbsp;{item.title}
                    </span>
                </p>
            </div>
            <div className={styles.cartCol2}>
                <p key={index} className={`${styles.cartListItem} ${styles.cartQuantity}`}>
                    <span className={styles.itemQuantity}>{item.quantity}</span>
                    <span>
                        <a href="/" onClick={(e) => props.decrementQuantity(item, e)}>-</a> &nbsp;
                <a href="/" onClick={(e) => props.incrementQuantity(item, e)}>+</a>
                    </span>
                </p>
            </div>
            <div className={styles.cartCol3}>
                <p>
                    <span key={index} className={styles.cartListItem}>€{price}</span>
                </p>
            </div>

            <div className={styles.cartCol4}>
                <p>
                    <span key={index} className={styles.cartListItem}>€{priceSubtotal}</span>
                </p>
            </div>
        </>
    })

    return products
}