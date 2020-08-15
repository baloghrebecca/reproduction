import React, { useEffect } from "react";
import '../styles/index.scss';
import Layout from '../components/layout';
import AboutComponent from '../components/aboutcomponent';
import HeaderMain from '../components/headermain'
import { showOverflow } from '../services/manageoverflow'

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
