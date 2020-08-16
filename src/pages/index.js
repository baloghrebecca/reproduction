import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet"

import HeaderLandingPage from '../components/headerLandingPage'
import Layout from '../components/layout'
import changePriceFormat from '../services/changePriceFormat'
import { sumOfItems, getTotalPrice, getCart } from '../services/cartMath'

const Home = () => {
  const [itemsSize, setItemsSize] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    // const cart = getCart()

      // setTotalPrice(getTotalPrice())
      const itemsLength = sumOfItems()
      setItemsSize(itemsLength)
  }, []);


  const priceFormatted = changePriceFormat(totalPrice)

  const hasTotalPrice = totalPrice === 0 ? '0' : priceFormatted
  const hadOneOrMoreItems = itemsSize === 1 ? 'ITEM' : 'ITEMS'

  return (<>
    <Helmet>
      <meta charSet="utf-8" />
      <title>POOL Publishing</title>
      <link rel="canonical" href="https://p-oo-l.com" />
    </Helmet>
    <HeaderLandingPage totalPrice={hasTotalPrice} items={hadOneOrMoreItems} itemSize={itemsSize}/>
    <Layout>
      <div id="filler"></div>
    </Layout>
  </>)
}
export default Home


