import React, { useEffect } from "react"
import '../styles/index.scss'
import Layout from '../components/Layout'
import Books from '../components/BooksComponent'
import HeaderMain from '../components/HeaderMain'
import { showOverflow } from '../services/manageOverflow'

const BooksPage = () => {
  useEffect(() => {
    showOverflow();
  });

  return (<>
    <div id="booksMenuWrapper">
      <HeaderMain />
    </div>
    <Layout class="content">
      <Books />
    </Layout>
  </>)
}

export default BooksPage

