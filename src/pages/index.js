import React from "react"
import { Helmet } from "react-helmet"
import '../styles/index.scss'
import Forms from '../components/forms'
import HeaderCopy from '../components/headerCopy'
import Layout from '../components/layout'

export default function Home() {
  return (<>
    <Helmet>
      <meta charSet="utf-8" />
      <title>POOL Publishing</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
      <Forms />
      <HeaderCopy />
  </>)
}
