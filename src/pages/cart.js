import React from "react";
import '../styles/index.scss';
import LayoutNoMargin from '../components/layoutWithoutMarginBottom';
import Cart from '../components/Cart'
import HeaderMain from '../components/headerMain'

export default class CartPage extends React.Component {
  render() {
    document.body.style.overflow = "";
    return (<>
      <HeaderMain />
      <LayoutNoMargin>
        <Cart />
      </LayoutNoMargin>
    </>)
  }
}
