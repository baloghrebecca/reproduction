import React, { useState, useEffect } from 'react'
import './pages.scss'
import CartSlider from './Slider'
import CartSliderMobile from './SliderMobile'
import CartImages from '../services/getCartImages'
import { CartItem, CartProductName, CartProductQuantity } from './CartItem'
import _debounce from 'lodash.debounce'
import { getCart } from '../services/cart'
import changePriceFormat from '../services/changePriceFormat'
import { getTotalPrice, getTotalPricePlusShipping } from '../services/cartMath'
import { Checkout } from '../services/checkout'

const Cart = (props) => {
    const [windowWidth, setWindowWidth] = useState()
    const [items, setItems] = useState(getCart())


    //update on window width resize
    useEffect(() => {
        setWindowWidth(window.innerWidth)
        const handleResize = _debounce(() => setWindowWidth(window.innerWidth), 10)
        window.addEventListener('resize', handleResize);

        const cart = getCart()
        setItems(cart)

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const { totalSubtotalPrice, totalSubtotalPriceFormatted, titles, pricesFormatted, subtotalFormatted, totalPriceFormatted } = getCartDetails(items)
    const hasTotalSubtotalPrice = totalSubtotalPrice === 0
        ? '0.00'
        : totalSubtotalPriceFormatted

    const whichGallery = windowWidth <= 750
        ? <CartSliderMobile items={props.cartSize} images={<CartImages class="img-container-gallery mobile-cart" />} />
        : <CartSlider images={<CartImages class="img-container-gallery" />} />

    return (<>
        <section id="cart" >
            {whichGallery}
            <div id="cart-info">
                <div className="cart-general">
                    <h1>PRODUCT</h1>
                    <CartProductName removeItem={props.removeItem} names={titles} items={items} />
                </div>
                <div className="cart-price-subtotal">
                    <div className="cart-prices">
                        <h1>PRICE</h1>
                        <CartItem names={pricesFormatted} />
                    </div>
                </div>
                <div className="cart-quantitiy">
                    <div className="cart-quanitity-item">
                        <h1>Quantity</h1>
                        <CartProductQuantity incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} items={items} />
                    </div>

                </div>
                <div className="cart-subtotal">
                    <div className="cart-subtotalItem">
                        <h1>Subtotal</h1>
                        <CartItem names={subtotalFormatted} />
                    </div>
                </div>
            </div>
            <div id="cart-checkout-infos">
                <Checkout cart={items} />
                <div className="cart-price-subtotal">
                    <h1>Subtotal</h1>
                    <p className="cart-list-item">€{hasTotalSubtotalPrice}</p>
                </div>
                <div className="cart-quantitiy">
                    <h1>Shipping</h1>
                    <p className="cart-list-item">€8.00</p>
                </div>
                <div className="cart-subtotal">
                    <h1>Total</h1>
                    <p className="cart-list-item">€{totalPriceFormatted}</p>
                </div>
            </div>
        </section ></>)
}
export default Cart

function getCartDetails(items) {
    const titles = getTitlesWithId(items)
    const prices = getPrices(items)
    const subtotals = getSubtotals(items)
    const totalSubtotalPrice = getTotalPrice()
    const totalPrice = getTotalPricePlusShipping()

    const pricesFormatted = formatPrice(prices)
    const subtotalFormatted = formatPrice(subtotals)
    const totalSubtotalPriceFormatted = changePriceFormat(totalSubtotalPrice)
    const totalPriceFormatted = changePriceFormat(totalPrice)
    return { totalSubtotalPrice, totalSubtotalPriceFormatted, titles, pricesFormatted, subtotalFormatted, totalPriceFormatted }
}

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

function getPrices(items) {
    return items.map(product => product.price)
}

function getSubtotals(items) {
    return items.map(product => product.price * product.quantity)
}
