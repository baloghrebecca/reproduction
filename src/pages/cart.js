import React, { useEffect, useState } from "react";
import '../styles/index.scss';
import Layout from '../components/Layout';
import Cart from '../components/Cart'
import HeaderMain from '../components/HeaderMain'
import { showOverflow } from '../services/manageOverflow'
import { removeProduct, decrementQuantity, incrementQuantity } from '../services/cart'

const CartPage = (props) => {

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    showOverflow();
  });

  const handleRemoveItem = (product, e) => {
    preventDefault(e);

    removeProduct(product)
    forceUpdate()
  }

  const handleDecrementQuantity = (product, e) => {
    preventDefault(e);

    decrementQuantity(product)
    forceUpdate()
  }

  const handleIncrementQuantity = (product, e) => {
    preventDefault(e);

    incrementQuantity(product)
    forceUpdate()
  }

  return (<>
    <HeaderMain />
    <Layout class="contentWithoutMargin">
      <Cart 
        removeItem={handleRemoveItem}
        decrementQuantity={handleDecrementQuantity}
        incrementQuantity={handleIncrementQuantity}
      />
    </Layout>
  </>)
}

export default CartPage


function preventDefault(e) {
  e.stopPropagation();
  e.preventDefault();
}

