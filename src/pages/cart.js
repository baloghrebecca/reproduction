import React from "react";
import '../styles/index.scss';
import LayoutNoMargin from '../components/layoutWithoutMarginBottom';
import Cart from '../components/Cart'
import HeaderMain from '../components/headerMain'

export default class CartPage extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "";
  }
  render() {
    return (<>
      <HeaderMain />
      <LayoutNoMargin>
        <Cart />
      </LayoutNoMargin>
    </>)
  }
}
