//This component mantains the page layout
import React, { useState, useEffect} from 'react'
import '../styles/index.scss'
import Footer from './footer'
import { Helmet } from "react-helmet"

//with props we get access to the children (JSX files)
const Layout = (props) => {
    const [top, setTop] = useState('100%')

    useEffect(() => {
        setTop('0%')
      }, []);
      console.log(top);
    return (<>
        <Helmet>
            <meta charSet="utf-8" />
            <title>POOL Publishing</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="content" style={{transform: `translateY(${top})`}}>
            {props.children}
        </div>
        <Footer />
    </>
    )
}

export default Layout