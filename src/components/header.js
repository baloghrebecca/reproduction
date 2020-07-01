import React from 'react'
import { Link } from 'gatsby'
import './header.scss'


export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: `OO`
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleLeave = this.handleLeave.bind(this)
    }

    handleChange() {
        const svg = <svg height="18.5" width="33">
            <path id="bean" d="M26.4446457,2.77773641 C23.8888515,2.77773641 23.1114331,4.55528667 19.7782205,4.55528667 C14.3338077,4.55528667 14.1110967,0 8.44480091,0 C3.77780653,0 0,3.77792256 0,8.33320923 C0,15.0002792 6.55548369,18 14.7775737,18 C21.3338853,18 32,14.5554728 32,8.33320923 C32,5.33348846 29.4450338,2.77773641 26.4446457,2.77773641" />
        </svg>
        const textAndSvg = `LIFE IS BETTER AT THE P${svg}L`
        this.setState({ title: svg })
    }

    handleLeave() {
        this.setState({ title: "OO" })
    }

    render() {
        return (
            <header id="header">
                <h1 id="h1" onMouseEnter={this.handleChange} onMouseLeave={this.handleLeave}>P<span>{this.state.title}
                </span>L</h1>
                <nav id="nav">
                    <Link to='/'>BOOKS</Link>,
                    <Link to='/about'>ABOUT</Link>,
                    <Link to='/'>STOCKINGS</Link>
                </nav>
                <Link className="cart" to='/'>0 ITEMS (0€)</Link>
            </header>
        )
    }
}

