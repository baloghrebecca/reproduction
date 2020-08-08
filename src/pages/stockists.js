import React, { useEffect } from "react"
import '../styles/index.scss'
import Layout from '../components/Layout'
import StockingsComponent from '../components/StockingsComponent'
import HeaderMain from '../components/HeaderMain'
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
  </>)
}

export default Stockists

