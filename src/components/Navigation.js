import React from 'react'
import { Link } from 'gatsby'

const Navigation = (props) => {
    return (<header id="headerMain" style={{ visibility: props.visibility }}>
        <h1 id="h1Main"
            onClick={props.handleClick}
            onMouseEnter={props.handleMouseEnter}
            onMouseLeave={props.handleMouseLeave}>
            <span id='text' style={{ display: props.displayText, transform: `translateX(-280px)` }}>LIFE IS BETTER AT THE  </span>
            <span id="poolText">P<span id="beanWrapper">{props.width < 750 ? props.beanMobile : props.bean}</span>L</span></h1>
        <nav id="navMain">
            <Link activeClassName="active" to='/books'>BOOKS</Link>,
            <Link activeClassName="active" to='/about'> ABOUT</Link>,
            <Link activeClassName="active" to='/stockings'> STOCKINGS</Link>
        </nav>
        <Link id="cartMain" activeClassName="active" to='/cart'>2 ITEMS (35€)</Link>
    </header>)
}

export default Navigation