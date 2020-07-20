import React, { useEffect } from "react";
import '../styles/index.scss';
import Layout from '../components/layout';
import ProductPage from '../components/product';
import HeaderMain from '../components/headerMain'
import { showOverflow } from '../services/manageOverflow'

const ProductDetails = () => {
  useEffect(() => {
    showOverflow();
  });

  return (<>
    <HeaderMain />
    <Layout class="contentWithoutMargin">
      <ProductPage />
    </Layout>
  </>)
}

export default ProductDetails
