import React, { useEffect } from "react";
import HeaderMain from '../components/headerMain'
import ImprintComponent from '../components/imprintComponent'
import Layout from '../components/layout'
import Banner from '../components/cookiesBanner'
import { showOverflow } from '../services/manageOverflow'

const Imprint = () => {
  useEffect(() => {
    showOverflow();
  });

  return (<>
    <HeaderMain />
    <Layout class="content">
      <ImprintComponent />
    </Layout>
    <Banner />
  </>
  )
}
export default Imprint
