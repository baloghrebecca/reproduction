import React from 'react'
import { Link } from 'gatsby'

const Navigation = (props) => {
    return (<>
        <nav id="navMain">
            <Link activeClassName="active" to='/books' style={{ color: props.color }}>BOOKS</Link>,
                    <Link activeClassName="active" to='/about'> ABOUT</Link>,
                    <Link activeClassName="active" to='/stockings'> STOCKINGS</Link>
        </nav>
        <Link id="cartMain" to='/cart'>2 ITEMS (35€)</Link>
    </>)
}

export default Navigation