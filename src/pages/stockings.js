import React from "react"
import { Helmet } from "react-helmet"
import '../styles/index.scss'
import Layout from '../components/layout'
import StockingsComponent from '../components/stockingsComponent'

export default function About() {
  return (<>
    <Helmet>
      <meta charSet="utf-8" />
      <title>POOL Publishing</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Layout>
        <StockingsComponent />
    </Layout>
  </>)
}