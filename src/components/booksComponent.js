import React from 'react'
import styles from '../styles/books.module.scss'
import Book from './book'
import { graphql, useStaticQuery } from "gatsby"
import changePriceFormat from '../services/changePriceFormat'

const Books = () => {
    const data = useStaticQuery(graphql`
    query ProductOverview {
        allStrapiProduct(sort: {fields: order, order: DESC}) {
          nodes {
            alter_preis
            strapiId
            id
            titel
            preis
            slug
            is_sold_out
            bilder_produktseite {
              url
              alternativeText
              name
            }
          }
        }
      }    
      `)

    const allProducts = [...data.allStrapiProduct.nodes]
    const productsRender = allProducts.map(product => {
        const { alter_preis, id, titel, preis, bilder_produktseite, slug, is_sold_out } = product

        const priceToDisplay = changePriceFormat(preis)
        const oldPriceToDisplay = changePriceFormat(alter_preis)

        const titleUpperCase = titel.toUpperCase()
        bilder_produktseite.sort(compare)

        return <Book
            title={titleUpperCase}
            price={priceToDisplay}
            oldPrice={oldPriceToDisplay}
            key={id}
            isSoldOut={is_sold_out}
            images={bilder_produktseite}
            sliderLength={bilder_produktseite.length}
            slug={slug}
        />
    })

    return (<>
        <section id={styles.books}>
            {productsRender}
        </section>
    </>
    )
}

export default Books


function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}
