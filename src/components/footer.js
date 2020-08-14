import React from 'react'
import './footer.scss'
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

    //   <ReactMarkdown source={data.strapiAbout.about__col1} />
    return (
    <section id="footer-wrapper">
        <section id="about-pool-books-wrapper">
            <div id="aboutPoolBooksAboutText">
            <ReactMarkdown source={data.strapiFooter.footer__col1} />
            </div>
            <p id="about-pool-books-about-address">
            <ReactMarkdown source={data.strapiFooter.footer__col2} />
            </p>
            <p id="about-pool-books-social-media">
            <ReactMarkdown source={data.strapiFooter.footer__col3} />
            </p>
        </section>
        <footer id="footer">
            <nav id="footer-nav"> 
                    <Link activeClassName="active" to='/imprint'>IMPRINT, TERMS, PRIVACY POLICY</Link>
            </nav>
        </footer>
    </section>
    )
}

export default Footer