import React, { useEffect } from "react"
import HeaderMain from '../components/headerMain'
import Books from '../components/booksComponent'
import Layout from '../components/layout'
import { BannerPaymentStatus } from '../components/banner'
import { showOverflow } from '../services/manageOverflow'
import { Link } from 'gatsby'

const CancelPage = () => {
  useEffect(() => {
    showOverflow();
  });

  const message = `ORDER CANCELLED.`

  return (<>
      <HeaderMain />
    <Layout class="content">
      <Books />
    </Layout>
    <BannerPaymentStatus message={message} success='false' />
  </>)
}

export default CancelPage
