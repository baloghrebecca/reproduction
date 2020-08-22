import React, { useEffect } from "react"

import HeaderMain from '../components/headerMain'
import StockingsComponent from '../components/stockingsComponent'
import Layout from '../components/layout'
import Banner from '../components/cookiesBanner'
import { showOverflow } from '../services/manageOverflow'

const Stockists = () => {
  useEffect(() => {
    showOverflow();
  });

  return (<>
    <HeaderMain />
    <Layout class="content">
      <StockingsComponent />
    </Layout>
    <Banner />
    </>)
}

export default Stockists

