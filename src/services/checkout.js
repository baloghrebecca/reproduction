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
            successUrl: `http://p-oo-l.com/success`,
            cancelUrl: `http://p-oo-l.com/cancel`,
            billingAddressCollection: 'auto',
            shippingAddressCollection: {
                allowedCountries: ["AC","AD","AE","AF","AG","AI","AL","AM","AO","AQ", "AR","AT","AU","AW","AX","AZ","BA","BB","BD","BE", "BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ", "BR","BS","BT","BV","BW","BY","BZ","CA","CD","CF", "CG","CH","CI","CK","CL","CM","CN","CO","CR","CV", "CW","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC", "EE","EG","EH","ER","ES","ET","FI","FJ","FK","FO", "FR","GA","GB","GD","GE","GF","GG","GH","GI","GL", "GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY", "HK","HN","HR","HT","HU","ID","IE","IL","IM","IN", "IO","IQ","IS","IT","JE","JM","JO","JP","KE","KG", "KH","KI","KM","KN","KR","KW","KY","KZ","LA","LB", "LC","LI","LK","LR","LS","LT","LU","LV","LY","MA", "MC","MD","ME","MF","MG","MK","ML","MM","MN","MO", "MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ", "NA","NC","NE","NG","NI","NL","NO","NP","NR","NU", "NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM", "PN","PR","PS","PT","PY","QA","RE","RO","RS","RU", "RW","SA","SB","SC","SE","SG","SH","SI","SJ","SK", "SL","SM","SN","SO","SR","SS","ST","SV","SX","SZ", "TA","TC","TD","TF","TG","TH","TJ","TK","TL","TM", "TN","TO","TR","TT","TV","TW","TZ","UA","UG","US", "UY","UZ","VA","VC","VE","VG","VN","VU","WF","WS", "XK","YE","YT","ZA","ZM","ZW","ZZ",],
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
