//This component mantains the page layout
import React, { useState, useEffect, useRef } from 'react'
import '../styles/index.scss'
import Footer from './footer'
import { Helmet } from "react-helmet"

//refactor layout
const Layout = (props) => {
    const [top, setTop] = useState(100)
    const [opacity, setOpacity] = useState(0)
    const content = useRef()

    useEffect(() => {
        // setTop(100 - Math.floor(window.scrollY / 100 * 10))
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        const foo = () => {
            setTop(0)
        }
        const foo2 = () => {
            setOpacity(1)
        }
        setTimeout(foo, 100)
        setTimeout(foo2, 300)
    }, []);

    return (<>
        <Helmet>
            <meta charSet="utf-8" />
            <title>POOL Publishing</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div ref={content} className="content" style={{ transform: `translateY(${top}%)`, opacity: opacity }}>
            {props.children}
        </div>
        <Footer />
    </>
    )
}

export default Layout