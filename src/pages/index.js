import React from "react"
import { Helmet } from "react-helmet"
import '../styles/index.scss'
import HeaderLandingPage from '../components/HeaderLandingPage'
import Layout from '../components/Layout'

const Home = () => {
  return (<>
    <Helmet>
      <meta charSet="utf-8" />
      <title>POOL Publishing</title>
      <link rel="canonical" href="https://p-oo-l.com" />
    </Helmet>
    <HeaderLandingPage />
    <Layout>
      <div id="filler"></div>
    </Layout>
  </>)
}
export default Home


