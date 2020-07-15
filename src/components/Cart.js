import React from 'react'
import './pages.scss'
import CartSlider from './Slider'
import CartImages from '../services/getCartImages'
import { Link } from 'gatsby'

const Cart = () => {
    return (
       <CartSlider images={<CartImages />} />
    )
}
export default Cart