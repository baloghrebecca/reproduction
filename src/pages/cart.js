import React, { useEffect, useState } from "react";

import Layout from '../components/layout';
import Cart from '../components/Cart'
import HeaderMain from '../components/headerMain'
import { showOverflow } from '../services/manageOverflow'
import { removeProduct, decrementQuantity, incrementQuantity, getCart } from '../services/cart'

const CartPage = () => {

  const [cartItemsSize, setCartItemSize] = useState()

  //this forces a re-render
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    showOverflow();
    
    setCartItemSize(getCart().length)
  });

  const handleRemoveItem = (product, e) => {
    preventDefault(e);

    removeProduct(product)
    setCartItemSize(getCart().length)
    forceUpdate()
  }

  const handleDecrementQuantity = (product, e) => {
    preventDefault(e);

    decrementQuantity(product)
    setCartItemSize(getCart().length)
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
        cartSize={cartItemsSize}
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

