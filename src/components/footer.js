import React from 'react'

import { graphql, useStaticQuery, Link } from "gatsby"
import ReactMarkdown from 'react-markdown'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query Footer {
        strapiFooter {
          footer__col1
          footer__col2
          footer__col3
        }
      }      
      `)


    return (<>
        <section id="footerWrapper">
            <section id="aboutPoolBooksWrapper">
                <div id="aboutPoolBooksAboutText">
                    <ReactMarkdown source={data.strapiFooter.footer__col1} />
                </div>
                <p id="aboutPoolBooksAboutAddress">
                    <ReactMarkdown source={data.strapiFooter.footer__col2} />
                </p>
                <p id="aboutPoolBooksSociaMedia">
                    <ReactMarkdown source={data.strapiFooter.footer__col3} />
                </p>
            </section>
        </section>
        <footer id="footer">
            <nav id="footerNav">
                <Link activeClassName="active" to='/imprint'>IMPRINT, TERMS, PRIVACY POLICY</Link>
            </nav>
        </footer>
    </>
    )
}

export default Footer