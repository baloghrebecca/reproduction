import React, { useEffect } from "react"
import '../styles/index.scss'
import Layout from '../components/layout'
import StockingsComponent from '../components/stockingscomponent'
import HeaderMain from '../components/headermain'
import { showOverflow } from '../services/manageoverflow'

const Stockists = () => {
  useEffect(() => {
    showOverflow();
  });

  return (<>
    <HeaderMain />
    <Layout class="content">
      <StockingsComponent />
    </Layout>
  </>)
}

export default Stockists

