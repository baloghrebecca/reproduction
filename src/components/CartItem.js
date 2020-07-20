import React from 'react'
import './pages.scss'

const CartItem = (props) => {
    const items = props.names.map((name, index) => <span key={index} className="cartListItem">{name} <br /></span> );
    return (
    <p>
    {items}
    </p>)
}
export default CartItem