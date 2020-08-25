import { loadStripe } from "@stripe/stripe-js"
import React, { useState } from 'react'
import { getCart } from '../services/cart'
import { useStaticQuery,  graphql} from 'gatsby'

//Stripe
let stripePromise
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe('pk_live_51HFijtGb1IG5l2E0d9MdbIqMXqizLHVIFlBXhltc16XxTVNEnkV0pNiwY5jJXoYjv2J1vbgOrei8Td01BS47IGtP00ruzRYqgZ')
    }
    return stripePromise
}

export const Checkout = (props) => {
    const data = useStaticQuery(graphql`
    query Shipping {
        strapiShipping {
          StripeID
        }
      }      
      `)

    const [loading, setLoading] = useState(false)
    const items = getCart()

    const cartItemsForStripe = items.map(item => {
        const newItem = {
            price: item.stripeID,
            quantity: item.quantity
        }

        return newItem
    })

    const stripeID = data.strapiShipping.StripeID

    const shippingCosts = {
        price: stripeID,
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
