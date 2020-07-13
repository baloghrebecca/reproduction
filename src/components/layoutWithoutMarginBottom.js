//This component mantains the page layout
import React from 'react'
import '../styles/index.scss'
import Footer from './footer'
import { Helmet } from "react-helmet"

//with props we get access to the children (JSX files)
const LayoutNoMargin = (props) => {
    return (<>
        <Helmet>
            <meta charSet="utf-8" />
            <title>POOL Publishing</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="contentWithoutMargin">
            {props.children}
        </div>
        <Footer />
    </>
    )
}

export default LayoutNoMargin