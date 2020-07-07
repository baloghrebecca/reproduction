//This component mantains the page layout
import React from 'react'
import '../styles/index.scss'
import Footer from './footer'

//with props we get access to the children (JSX files)
const LayoutLandingPage = (props) => {
    return (
        <>
            <div className="content">
                {props.children}
            </div>
            <Footer />
        </>
    )
}

export default LayoutLandingPage