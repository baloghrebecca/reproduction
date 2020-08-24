import React from 'react'
import styles from '../styles/headerMain.module.scss'
import { Link } from "gatsby"

export const BannerPaymentStatus = (props) => {
    return (<>
        <section id={styles.banner} >
            <div className={styles.col1}>
                <h1 id={styles.h1Main}
                >POOL</h1>
            </div>
            <div id={styles.bannerCookies}>
                {props.message} { props.success === 'false' 
                ? <span><Link to="/about">CONTACT US</Link>.</span>
                : ''}
            </div>
            <div className={styles.bannerYes}
                id={styles.bannerYes}>
                <Link href="/books">OK</Link>
            </div>
        </section>
    </>)
}
