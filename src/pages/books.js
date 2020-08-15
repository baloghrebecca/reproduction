import React, { useEffect } from "react"
import '../styles/index.scss'
import Layout from '../components/layout'
import Books from '../components/bookscomponent'
import HeaderMain from '../components/headermain'
import { showOverflow } from '../services/manageoverflow'

const BooksPage = () => {
  useEffect(() => {
    showOverflow();
  });

  return (<>
    <div id="books-menu-wrapper">
      <HeaderMain />
    </div>
    <Layout class="content">
      <Books />
    </Layout>
  </>)
}

export default BooksPage

