import React, { useState, useEffect } from 'react'
import styles from '../styles/pages.module.scss'
import CartSlider from './Slider'
import CartSliderMobile from './SliderMobile'
import CartImages from '../services/getCartImages'
import { CartItem, CartProductName, CartProductQuantity, ProductWithInfos } from './CartItem'

import _debounce from 'lodash.debounce'
import { getCart } from '../services/cart'
import changePriceFormat from '../services/changePriceFormat'
import { getTotalPrice, getTotalPricePlusShipping } from '../services/cartMath'
import { Checkout } from '../services/checkout'
import { useStaticQuery, graphql } from 'gatsby'


const Cart = (props) => {
    const data = useStaticQuery(graphql`
    query ShippingPrice {
        strapiShipping {
          shipping_costs_in_cents
        }
      }      
      `)

    const [windowWidth, setWindowWidth] = useState()
    const [items, setItems] = useState(getCart())

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        const handleResize = _debounce(() => setWindowWidth(window.innerWidth), 10)
        window.addEventListener('resize', handleResize);

        const cart = getCart()
        setItems(cart)

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [props.cartItems])

    const { totalSubtotalPrice, totalSubtotalPriceFormatted, titles, pricesFormatted, subtotalFormatted, totalPriceFormatted } = getCartDetails(items)

    const hasTotalSubtotalPrice = totalSubtotalPrice === 0
        ? '0.00'
        : totalSubtotalPriceFormatted

    const whichGallery = windowWidth <= 750
        ? <CartSliderMobile images={<CartImages class={`${styles.imgContainerGallery} ${styles.mobileCart}`} />} />
        : <CartSlider images={<CartImages class={`${styles.imgContainerGallery}`} />} />

    let priceShipping = changePriceFormat(data.strapiShipping.shipping_costs_in_cents)

    return (<>
        <section id={styles.cart} >
            {whichGallery}

            {/* <div className={styles.cartTitles}>
                <div className={styles.cartCol1}>
                    <h1 className={styles.cartCol1}>
                        Product
                    </h1>
                </div>

                <div className={styles.cartCol2}>
                    <div className={styles.cartSubtotal}>
                        <h1>QUANTITY</h1>
                    </div>
                </div>

                <div className={styles.cartCol3}>
                    <h1>PRICE</h1>
                </div>

                <div className={styles.cartCol4}>
                    <h1>SUBTOTAL</h1>
                </div>

            </div> */}

            <div className={styles.cartInfo}>

                {/* <ProductWithInfos
                    removeItem={props.removeItem}
                    titles={titles}
                    items={items}
                    incrementQuantity={props.incrementQuantity}
                    decrementQuantity={props.decrementQuantity}
                    prices={pricesFormatted}
                    subtotal={subtotalFormatted}
                /> */}

                <div className={styles.cartCol1}>
                    <h1>PRODUCT</h1>
                    <CartProductName
                        removeItem={props.removeItem}
                        names={titles}
                        items={items} />
                </div>

                <div className={styles.cartCol2}>
                    <h1>Quantity</h1>
                        <CartProductQuantity
                            incrementQuantity={props.incrementQuantity}
                            decrementQuantity={props.decrementQuantity}
                            items={items} />
                </div>

                <div className={styles.cartCol3}>
                    <h1>PRICE</h1>
                    <CartItem names={pricesFormatted} />
                </div>

                <div className={styles.cartCol4}>
                    <h1>Subtotal</h1>
                    <CartItem names={subtotalFormatted} />
                </div>

            </div>

            <div id={styles.cartCheckoutInfos}>

                <div className={styles.cartCol1}>
                    <Checkout cart={props.cartSize} />
                </div>

                <div className={styles.cartCol2}>
                    <div className={styles.cartSubtotal}>
                        <h1>Subtotal</h1>
                        <p className={styles.cartListItem}>€{hasTotalSubtotalPrice}</p>
                    </div>
                </div>

                <div className={styles.cartCol3}>
                    <h1>Shipping</h1>
                    <p className={styles.cartListItem}>€{priceShipping}</p>
                </div>

                <div className={styles.cartCol4}>
                    <h1>Total</h1>
                    <p className={styles.cartListItem}>€{totalPriceFormatted}</p>
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
