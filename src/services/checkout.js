import { loadStripe } from "@stripe/stripe-js"
import React, { useState } from 'react'
import { getCart } from '../services/cart'

//Stripe
let stripePromise
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe("pk_test_51HFdbTHVWF33LGh7fEHNxjsejQxlFkriJ5kV2Anz4lPxgXjY1t0LH4sjiN45b82IZ7738LChp0AXb1Evz67Xzuxd008bQsVprn")
    }
    return stripePromise
}

// {
//     stripeCustomer(id: { eq: "customer_id_here" }) {
//       id,
//       name
//     }
//   }

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
        price: 'price_1HFgU7HVWF33LGh7XXHr8qIb',
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
            successUrl: `http://localhost:8000/`,
            cancelUrl: `http://localhost:8000/gacki`,
            billingAddressCollection: 'auto',
            shippingAddressCollection: {
                allowedCountries: ['US', 'CA', 'AT', 'DE'],
            }
        })
        if (error) {
            console.log("Error:", error)
            setLoading(false)
        }
    }

    const checkoutButton = <a onClick={redirectToCheckout} href='/'>PROCEEDE TO CHECKOUT </a>
    const isLoading = loading 
    ? 'LOADING...' 
    : checkoutButton

    return (
        <div className="cart-general">
            <h1>
                {isLoading}
            </h1>
        </div>
    )

}