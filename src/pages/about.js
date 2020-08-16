import React, { useEffect } from "react";

import Layout from '../components/layout';
import AboutComponent from '../components/aboutComponent';
import HeaderMain from '../components/headerMain'
import { showOverflow } from '../services/manageOverflow'

const About = () => {
  useEffect(() => {
    showOverflow();
  });

  return (<>
    <HeaderMain />
    <Layout class="content">
      <AboutComponent />
    </Layout>
  </>)
}

export default About
