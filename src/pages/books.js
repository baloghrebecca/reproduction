import React, { useEffect } from "react"
import '../styles/index.scss'
import Layout from '../components/layout'
import Books from '../components/booksComponent'
import HeaderMain from '../components/headerMain'
import { showOverflow } from '../services/manageOverflow'

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

