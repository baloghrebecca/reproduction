import React from 'react'
import './books.scss'
import { graphql, useStaticQuery } from "gatsby"
import Book from './Book'

const Books = () => {
    const data = useStaticQuery(graphql`
    query ProductOverview {
        allStrapiProduct {
          nodes {
            alter_preis
            strapiId
            id
            titel
            preis
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
        const { alter_preis, id, titel, preis, bilder_produktseite } = product

        const priceToDisplay = changePriceFormat(preis)
        const oldPriceToDisplay = changePriceFormat(alter_preis)

        const titleUpperCase = titel.toUpperCase()
        bilder_produktseite.sort(compare).reverse();

        const createSlugName = titel.replace(" ", "-").toLowerCase()

        return <Book
            title={titleUpperCase}
            price={priceToDisplay}
            oldPrice={oldPriceToDisplay}
            key={id}
            images={bilder_produktseite}
            sliderLength={bilder_produktseite.length}
            slug={createSlugName}
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

function changePriceFormat(preis) {
    console.log('preis', preis);
    const priceToString = preis.toString()
    const priceAfterComma = priceToString.slice(priceToString.length - 3, priceToString.length - 1)
    const priceBeforeComma = priceToString.slice(0, priceToString.length - 2)
    const priceToDisplay = `${priceBeforeComma}.${priceAfterComma}`
    return priceToDisplay
}

function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}