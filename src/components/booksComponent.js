import React from 'react'
import './books.scss'
import Book from './book.js'

export default class Books extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (<>
            <section id="books">
               <Book />
               <Book />
               <Book />
               <Book />
               <Book />
               <Book />
               <Book />
               <Book />
            </section>
        </>
        )
    }
}
