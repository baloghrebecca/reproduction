import React from 'react'
import './pages.scss'

export const CartItem = (props) => {
    const items = props.names.map((name, index) => <span key={index} className="cartListItem"> {name} <br /></span>);

    return (
        <p>
            {items}
        </p>)
}

export const CartProductName = (props) => {
    const items = props.items.map((item, index) =>
        <span key={index} className="cartListItem">
            <a href="/" onClick={(e) => props.removeItem(item, e)}>&#120;</a>
            &nbsp;{item.title} <br />
        </span>);

    return (
        <p>
            {items}
        </p>)
}

export const CartProductQuantity = (props) => {
    const items = props.items.map((item, index) =>
        <p key={index} className="cartListItem cartListQuantityInline">
            <span className="itemQuantity">{item.quantity}</span>
            <span>
                <a href="/" onClick={(e) => props.decrementQuantity(item, e)}>-</a> &nbsp;
                <a href="/" onClick={(e) => props.incrementQuantity(item, e)}>+</a>
            </span>
            <br />
        </p>);

    return (
        <div id="cartListQuantity">
            {items}
        </div>)
}