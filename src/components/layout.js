//This component mantains the page layout
import React from 'react'
import HeaderMain from './headerMain'
import '../styles/index.scss'
import Footer from './footer'

//with props we get access to the children (JSX files)
const Layout = (props) => {
    return (
        <>
            <HeaderMain />
            <div className="content">
                {props.children}
            </div>
            <Footer />
        </>
    )
}

export default Layout