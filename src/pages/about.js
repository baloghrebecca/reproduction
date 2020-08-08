import React, { useEffect } from "react";
import '../styles/index.scss';
import Layout from '../components/Layout';
import AboutComponent from '../components/AboutComponent';
import HeaderMain from '../components/HeaderMain'
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
