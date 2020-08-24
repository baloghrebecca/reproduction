import React, { useEffect } from "react"
import HeaderMain from '../components/headerMain'
import Books from '../components/booksComponent'
import Layout from '../components/layout'
import { BannerPaymentStatus } from '../components/banner'
import { showOverflow } from '../services/manageOverflow'

const SuccessPage = () => {
    useEffect(() => {
        showOverflow();
    });

    if (typeof localStorage !== 'undefined') {
        if (localStorage.getItem('cart')) {
            localStorage.removeItem('cart');
        }
    }

    return (<>
        <HeaderMain />
        <Layout class="content">
            <Books />
        </Layout>
        <BannerPaymentStatus message="PAYMENT CONFIRMED. THANK YOU!" success='true' />
    </>)
}

export default SuccessPage

