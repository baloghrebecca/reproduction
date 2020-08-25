import { loadStripe } from "@stripe/stripe-js"
import React, { useState } from 'react'
import { getCart } from '../services/cart'
import styles from '../styles/pages.module.scss'

//Stripe
let stripePromise
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe('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')
    }
    return stripePromise
}

export const Checkout = (props) => {

    const [loading, setLoading] = useState(false)
    const items = getCart()

    const cartItemsForStripe = items.map(item => {
        const newItem = {
            price: item.stripeID,
            quantity: item.quantity
        }

        return newItem
    })

    const shippingCosts = {
        price: 'price_1HJwM1Gb1IG5l2E04YaVY27A',
        quantity: 1
    }
    cartItemsForStripe.push(shippingCosts)

    const redirectToCheckout = async event => {
        event.preventDefault()
        setLoading(true)

        const stripe = await getStripe()
        const { error } = await stripe.redirectToCheckout({
            mode: "payment",
            lineItems: cartItemsForStripe,
            successUrl: `http://pool-preview.vercel.app/success`,
            cancelUrl: `http://pool-preview.vercel.app/cancel`,
            billingAddressCollection: 'auto',
            shippingAddressCollection: {
                allowedCountries: ['US', 'CA', 'AT', 'DE'],
            }
        })
        if (error) {
            setLoading(false)
        }
    }

    const checkoutButton = <a
        onClick={redirectToCheckout}
        href='/'>PROCEED TO CHECKOUT </a>
    const isLoading = loading
        ? 'LOADING...'
        : checkoutButton

    const noProductsButton = ''

    return (
        <div className="cartCol1">
            <h1>
                {props.cart === 0
                    ? noProductsButton
                    : isLoading}
            </h1>
        </div>
    )

}
