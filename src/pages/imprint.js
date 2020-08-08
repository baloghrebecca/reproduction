import React, { useEffect } from "react";
import '../styles/index.scss'
import Layout from '../components/Layout'
import ImprintComponent from '../components/ImprintComponent'
import HeaderMain from '../components/HeaderMain'
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
