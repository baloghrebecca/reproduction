import React, { useState, useEffect } from 'react'
import styles from '../styles/headerMain.module.scss'
import { Link } from 'gatsby'
import { onCookieAccept, hasCookieBeenAccepted } from '../services/cookie'

const CookiesBanner = (props) => {
    const [cookiesAccepted, setCookiesAccepted] = useState(hasCookieBeenAccepted())
    const [display, setDisplay] = useState('grid')

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
        console.log('ckicked');
        e.preventDefault()
        e.stopPropagation()

        setCookiesAccepted(true)
        onCookieAccept()

        if (display === 'grid') {
            console.log('entered true');
            setDisplay('none')
        }
        else {
            console.log('entered false');
            setDisplay('grid')
        }

    }

    return (
        <section id={styles.banner} style={{ display: display }} >
            <div className={styles.col1}>
                <h1 id={styles.h1Main}
                >POOL</h1>
            </div>
            <div id={styles.bannerCookies}>
                ACCEPT <Link to='/imprint'>COOKIES</Link>?
            </div>
            <div className={styles.bannerYes}
                id={styles.bannerYes}>
                <a href="/" onClick={(e) => handleAcceptCookies(e)}>YES</a>
            </div>
        </section>)
}

export default CookiesBanner;
