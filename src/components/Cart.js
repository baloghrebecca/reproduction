import React, { useState, useEffect, useLayoutEffect } from 'react'
import './pages.scss'
import CartSlider from './Slider'
import CartSliderMobile from './SliderMobile'
import CartImages from '../services/getCartImages'
import CartItem from './CartItem'
import { Link } from 'gatsby'
import _debounce from 'lodash.debounce'

const Cart = () => {
    const [windowWidth, setWindowWidth] = useState()
    //update on window width resize
    
  useEffect(() => {
    const handleResize = _debounce(() => setWindowWidth(window.innerWidth), 0)
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

    const cartItems = ["DISCIPLINE", "MEMORIES OF THE CAVE"]
    const prices = ["€20.00", "€15.00"]
    const quantities = ["1", "1"]
    const whichGallery = windowWidth <= 750 ? <CartSliderMobile images={<CartImages />} /> : <CartSlider images={<CartImages />} />
    console.log(windowWidth, '2');
    return (
        <section id="cart" >
            {whichGallery}
            <div id="cartInfo">
                <div className="cartGeneral">
                    <h1>PRODUCT</h1>
                    <CartItem names={cartItems} />
                </div>
                <div className="cartPriceSubtotal">
                    <div className="cartPrices">
                        <h1>PRICE</h1>
                        <CartItem names={prices} />
                    </div>
                </div>
                <div className="cartQuantitiy">
                    <div className="cartQuanitityItem">
                        <h1>Quantitiy</h1>
                        <CartItem names={quantities} />
                    </div>

                </div>
                <div className="cartSubtotal">
                    <div className="cartSubtotalItem">
                        <h1>Subtotal</h1>
                        <CartItem names={prices} />
                    </div>
                </div>
            </div>
            <div id="cartCheckoutInfos">
                <div className="cartGeneral">
                    <h1><Link to='/'>PROCEDE TO CHECKOUT</Link></h1>
                </div>
                <div className="cartPriceSubtotal">
                    <h1>Subtotal</h1>
                    <p className="cartListItem">€35.00</p>
                </div>
                <div className="cartQuantitiy">
                    <h1>Shipping</h1>
                    <p className="cartListItem">€8.00</p>
                </div>
                <div className="cartSubtotal">
                    <h1>Total</h1>
                    <p className="cartListItem">€42.00</p>
                </div>
            </div>
        </section >)
}
export default Cart