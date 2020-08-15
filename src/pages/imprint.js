import React, { useEffect } from "react";
import '../styles/index.scss'
import Layout from '../components/layout'
import ImprintComponent from '../components/imprintcomponent'
import HeaderMain from '../components/headermain'
import { showOverflow } from '../services/manageoverflow'

const Imprint = () => {
  useEffect(() => {
    showOverflow();
  });

  return (<>
    <HeaderMain />
    <Layout class="content">
      <ImprintComponent />
    </Layout>
  </>
  )
}
export default Imprint
