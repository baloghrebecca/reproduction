import React from 'react'
import './books.scss'
import ProductImages from '../services/getProductImages'

const Books = () => {
    return (<>
        <section id="books">
            <ProductImages />
            <ProductImages />
            <ProductImages />
            <ProductImages />
            <ProductImages />
            <ProductImages />
        </section>
    </>
    )
}

export default Books
