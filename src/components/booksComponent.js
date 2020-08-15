import React from 'react'
import './books.scss'
import { graphql, useStaticQuery } from "gatsby"
import Book from './book'
import changePriceFormat from '../services/changePriceFormat'

const Books = () => {
    const data = useStaticQuery(graphql`
    query ProductOverview {
        allStrapiProduct(sort: {fields: id, order: ASC}) {
          nodes {
            alter_preis
            strapiId
            id
            titel
            preis
            slug
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
        const { alter_preis, id, titel, preis, bilder_produktseite, slug } = product

        const priceToDisplay = changePriceFormat(preis)
        const oldPriceToDisplay = changePriceFormat(alter_preis)

        const titleUpperCase = titel.toUpperCase()
        bilder_produktseite.sort(compare)

        return <Book
            title={titleUpperCase}
            price={priceToDisplay}
            oldPrice={oldPriceToDisplay}
            key={id}
            images={bilder_produktseite}
            sliderLength={bilder_produktseite.length}
            slug={slug}
        />
    })

    return (<>
        <section id="books">
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
