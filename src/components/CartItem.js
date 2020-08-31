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
