import React, { useEffect } from "react";
import '../styles/index.scss'
import Layout from '../components/layout'
import ImprintComponent from '../components/imprintComponent'
import HeaderMain from '../components/headerMain'
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
  </>
  )
}
export default Imprint
