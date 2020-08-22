import React from 'react'
import styles from '../styles/pages.module.scss'
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from 'react-markdown'

const StockistsComponent = () => {
    const data = useStaticQuery(graphql`
    query Stockists {
        strapiStockists {
          stockists__col1
          stockists__col2
          stockists__col3
          stockists__col4
        }
      }
      `)

    return (
        <section id={styles.stockists}>
            <div className={styles.col1}>
                <ReactMarkdown source={data.strapiStockists.stockists__col1} />
            </div>
            <div className={styles.col2}>
                <ReactMarkdown source={data.strapiStockists.stockists__col2} />
            </div>
            <div className={styles.col3}>
                <ReactMarkdown source={data.strapiStockists.stockists__col3} />
            </div>
            <div className={styles.col4}>
                <ReactMarkdown source={data.strapiStockists.stockists__col4} />
            </div>
        </section >)
}

export default StockistsComponent;