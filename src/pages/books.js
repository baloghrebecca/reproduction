import React, { useEffect } from "react"
import HeaderMain from '../components/headerMain'
import Books from '../components/booksComponent'
import Layout from '../components/layout'
import Banner from '../components/cookiesBanner'
import { showOverflow } from '../services/manageOverflow'

const BooksPage = () => {

  useEffect(() => {
    showOverflow();
  });


  return (<>
    <HeaderMain />
    <Layout class="content">
      <Books />
    </Layout>
    <Banner />
  </>)
}

export default BooksPage

