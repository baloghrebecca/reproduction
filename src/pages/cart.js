import React, { useEffect } from "react";
import '../styles/index.scss';
import Layout from '../components/layout';
import Cart from '../components/Cart'
import HeaderMain from '../components/headerMain'
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



