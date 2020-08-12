import React, { useState, useEffect } from 'react'
import './pages.scss'
import CartSlider from './Slider'
import CartSliderMobile from './SliderMobile'
import CartImages from '../services/getCartImages'
import { CartItem, CartProductName, CartProductQuantity } from './CartItem'
import { Link } from 'gatsby'
import _debounce from 'lodash.debounce'
import { getCart } from '../services/cart'
import changePriceFormat from '../services/changePriceFormat'
import { getTotalPrice, getTotalPricePlusShipping } from '../services/cartMath'

const Cart = (props) => {
    const [windowWidth, setWindowWidth] = useState()

    //update on window width resize
    useEffect(() => {
        setWindowWidth(window.innerWidth)
        const handleResize = _debounce(() => setWindowWidth(window.innerWidth), 10)
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const items = getCart()

    const titles = getTitlesWithId(items)
    const prices = getPrices(items)
    const subtotals = getSubtotals(items)
    const totalSubtotalPrice = getTotalPrice()
    const totalPrice = getTotalPricePlusShipping()

    const pricesFormatted = formatPrice(prices)
    const subtotalFormatted = formatPrice(subtotals)
    const totalSubtotalPriceFormatted = changePriceFormat(totalSubtotalPrice)
    const totalPriceFormatted = changePriceFormat(totalPrice)

    const hasTotalSubtotalPrice = totalSubtotalPrice === 0 ? '0.00' : totalSubtotalPriceFormatted



    const whichGallery = windowWidth <= 750 ? <CartSliderMobile images={<CartImages class="imgContainerGallery mobileCart" />} /> : <CartSlider images={<CartImages class="imgContainerGallery" />} />
    return (<>
        <section id="cart" >
            {whichGallery}
            <div id="cartInfo">
                <div className="cartGeneral">
                    <h1>PRODUCT</h1>
                    <CartProductName removeItem={props.removeItem} names={titles} items={items} />
                </div>
                <div className="cartPriceSubtotal">
                    <div className="cartPrices">
                        <h1>PRICE</h1>
                        <CartItem names={pricesFormatted} />
                    </div>
                </div>
                <div className="cartQuantitiy">
                    <div className="cartQuanitityItem">
                        <h1>Quantity</h1>
                        <CartProductQuantity incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} items={items} />
                    </div>

                </div>
                <div className="cartSubtotal">
                    <div className="cartSubtotalItem">
                        <h1>Subtotal</h1>
                        <CartItem names={subtotalFormatted} />
                    </div>
                </div>
            </div>
            <div id="cartCheckoutInfos">
                <div className="cartGeneral">
                    <h1><Link to='/'>PROCEEDE TO CHECKOUT</Link></h1>
                </div>
                <div className="cartPriceSubtotal">
                    <h1>Subtotal</h1>
                    <p className="cartListItem">€{hasTotalSubtotalPrice}</p>
                </div>
                <div className="cartQuantitiy">
                    <h1>Shipping</h1>
                    <p className="cartListItem">€8.00</p>
                </div>
                <div className="cartSubtotal">
                    <h1>Total</h1>
                    <p className="cartListItem">€{totalPriceFormatted}</p>
                </div>
            </div>
        </section ></>)
        }
export default Cart

function formatPrice(prices) {
    return prices.map(price => '€' + changePriceFormat(price))
}

function getTitlesWithId(items) {
    return items.map(product => {
        return {
            title: product.title,
            id: product.id
        }
    })
}

function getQuantities(items) {
    return items.map(product => product.quantity)
}

function getPrices(items) {
    return items.map(product => product.price)
}

function getSubtotals(items) {
    return items.map(product => product.price * product.quantity)
}
