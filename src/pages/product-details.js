import React, { useEffect, useState } from "react";

import HeaderMain from '../components/headerMain'
import ProductPage from '../components/product';
import Layout from '../components/layout';
import Banner from '../components/cookiesBanner'
import { showOverflow } from '../services/manageOverflow'

import changePriceFormat from '../services/changePriceFormat'
import { addToCart } from '../services/cart'
import { sumOfItems, getTotalPrice } from '../services/cartMath'
import { graphql } from 'gatsby'


const ProductDetails = ({ data }) => {

  const [cartItems, setCartItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    showOverflow();
  });

  const { alter_preis, artist, beschreibung, preis, titel, hard_facts, bilder_slideshow, strapiId, bild_warenkorb, stripeID, is_sold_out } = data.strapiProduct

  const rightFormatPrice = changePriceFormat(preis)
  const rightFormatOldPrice = changePriceFormat(alter_preis)
  const titleUpperCase = titel.toUpperCase()

  const cartData = {
    id: strapiId,
    price: preis,
    title: titleUpperCase,
    quantity: 1,
    stripeID: stripeID,
    image: bild_warenkorb[0]
  }

  const handleAddToCart = (product, e) => {

    e.stopPropagation()
    e.preventDefault()

    addToCart(product)
    const totalItems = sumOfItems()
    const totalPrice = getTotalPrice()
    setCartItems(totalItems)
    setTotalPrice(totalPrice)
  }

  return (<>
    <HeaderMain itemsCount={cartItems} totalPrice={totalPrice}/>
    <Layout class="contentWithoutMargin">
      <ProductPage
        handleAddToCart={handleAddToCart}
        title={titleUpperCase}
        price={rightFormatPrice}
        oldPrice={rightFormatOldPrice}
        aboutBook={beschreibung}
        hardFacts={hard_facts}
        aboutArtist={artist}
        images={bilder_slideshow}
        cartData={cartData}
        stripeID={stripeID}
        isSoldOut={is_sold_out}
      />
    </Layout>
    <Banner />
  </>)
}

export default ProductDetails

//For some reason variables only work when you export your query
//It does not work with useStaticQuery
export const query = graphql`
query ProductDetails($id: String) {
    strapiProduct(id: {eq: $id}) {
      strapiId
      stripeID
      alter_preis
      artist
      beschreibung
      is_sold_out
      bilder_slideshow {
        id
        url
        alternativeText
      }
      bild_warenkorb {
        url
        alternativeText
      }
      preis
      titel
      hard_facts
    }
  }
  `