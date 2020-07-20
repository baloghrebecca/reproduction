import React, { useEffect } from "react"
import '../styles/index.scss'
import Layout from '../components/layout'
import StockingsComponent from '../components/stockingsComponent'
import HeaderMain from '../components/headerMain'
import { showOverflow } from '../services/manageOverflow'

const Stockings = () => {
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

export default Stockings

