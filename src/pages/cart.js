import React from "react";
import '../styles/index.scss';
import LayoutNoMargin from '../components/layoutWithoutMarginBottom';
import Cart from '../components/cart'
import HeaderMain from '../components/headerMain'

export default class CartPage extends React.Component {
  render() {
    return (<>
      <HeaderMain />
      <LayoutNoMargin>
        <Cart />
      </LayoutNoMargin>
    </>)
  }
}
