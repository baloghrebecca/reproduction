import React, { useEffect } from "react";
import '../styles/index.scss';
import Layout from '../components/Layout';
import Cart from '../components/Cart'
import HeaderMain from '../components/HeaderMain'
import { showOverflow } from '../services/manageOverflow'

const CartPage = (props) => {
  useEffect(() => {
    showOverflow();
  });

  return (<>
    <HeaderMain />
    <Layout class="contentWithoutMargin">
      <Cart />
    </Layout>
  </>)
}

export default CartPage



