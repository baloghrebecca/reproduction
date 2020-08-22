import React, { useState, useEffect } from 'react'
import styles from '../styles/headerMain.module.scss'
import { Link } from 'gatsby'
import { onCookieAccept, hasCookieBeenAccepted } from '../services/cookie'

const BannerPaymentConfirmation = (props) => {
    const [cookiesAccepted, setCookiesAccepted] = useState(hasCookieBeenAccepted())
    const [display, setDisplay] = useState()


    useEffect(() => {

        const hasCookiesBeenAccepted = hasCookieBeenAccepted()
        setCookiesAccepted(hasCookiesBeenAccepted)

        if (cookiesAccepted === true) {
            setDisplay('none')
        }
        else {
            setDisplay('grid')
        }

    }, [])


    const handleAcceptCookies = (e) => {

        e.preventDefault()
        e.stopPropagation()

        setCookiesAccepted(true)
        onCookieAccept()

        if (cookiesAccepted === true) {
            setDisplay('none')
        }
        else {
            setDisplay('grid')
        }

    }

    return (
        <section className={styles.banner} style={{ display: display }} >
            <div className={styles.col1}>
                <h1 id={styles.h1Main}
                >POOL</h1>
            </div>
            <div id={styles.navMain}>
                PAYMENT CONFIRMED! THANK YOU!
            </div>
            <div className={styles.cartMain}
                id={styles.cartMain}>
                <a href="/" onClick={(e) => handleAcceptCookies(e)}>OK</a>
            </div>
        </section>)
}

export default CookiesBanner;
