//This component mantains the page layout
import React, {useEffect, useState, useRef} from 'react'
import '../styles/index.scss'
import Footer from './footer'
import { Helmet } from "react-helmet"

//with props we get access to the children (JSX files)
const LayoutNoMargin = (props) => {
    const [top, setTop] = useState()
    const [opacity, setOpacity] = useState(0)
    const content = useRef()

    useEffect(() => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        setTop(100 - Math.floor(window.scrollY / 100 * 10))
        const foo = () => {
            setTop(0)
        }
        const foo2 = () => {
            setOpacity(1)
        }

        setTimeout(foo, 100)
        setTimeout(foo2, 400)
        
      }, []);

    return (<>
        <Helmet>
            <meta charSet="utf-8" />
            <title>POOL Publishing</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div ref={content} className="contentWithoutMargin" style={{transform: `translateY(${top}%)`, opacity: opacity}}>
            {props.children}
        </div>
        <Footer />
    </>
    )
}

export default LayoutNoMargin