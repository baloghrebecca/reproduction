import React, { useEffect } from "react";
import '../styles/index.scss';
import LayoutNoMargin from '../components/layoutWithoutMarginBottom';
import Cart from '../components/Cart'
import HeaderMain from '../components/headerMain'

const CartPage = (props) => {
  useEffect(() => {
    showOverflow();
  });
  return (<>
    <HeaderMain />
    <LayoutNoMargin>
      <Cart />
    </LayoutNoMargin>
  </>)
}

export default CartPage

function showOverflow() {
  document.body.style.overflow = "";
}

