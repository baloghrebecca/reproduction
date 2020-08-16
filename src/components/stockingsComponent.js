import React from 'react'
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
        <section id="stockists">
            <div className="col1">
                <ReactMarkdown source={data.strapiStockists.stockists__col1} />
            </div>
            <div className="col2">
                <ReactMarkdown source={data.strapiStockists.stockists__col2} />
            </div>
            <div className="col3">
                <ReactMarkdown source={data.strapiStockists.stockists__col3} />
            </div>
            <div className="col4">
                <ReactMarkdown source={data.strapiStockists.stockists__col4} />
            </div>
        </section >)
}

export default StockistsComponent;