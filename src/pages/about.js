import React, { useEffect, useState } from "react";
import HeaderMain from '../components/headerMain'
import AboutComponent from '../components/aboutComponent';
import Banner from '../components/cookiesBanner'
import Layout from '../components/layout';
import { showOverflow } from '../services/manageOverflow'

const About = () => {
  useEffect(() => {
    showOverflow();
  }, []);

  return (<>
    <HeaderMain />
    <Layout class="content">
      <AboutComponent />
    </Layout>
    <Banner />
  </>)
}

export default About
