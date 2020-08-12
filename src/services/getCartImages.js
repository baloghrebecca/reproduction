import React from 'react'
import { getCart } from '../services/cart'

const CartImages = (props) => {
  const cartItems = getCart()
  const images = cartItems.map(product => product.image)

  const allImages = images.map((image, index) => {
    return <div key={index.toString()} className={props.class}><img src={image} /></div>
  });
  return allImages
}

export default CartImages