import React, { useEffect } from "react";
import '../styles/index.scss';
import Layout from '../components/Layout';
import ProductPage from '../components/Product';
import HeaderMain from '../components/HeaderMain'
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
