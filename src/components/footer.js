import React from 'react'
import styles from '../styles/footer.module.scss'
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
    return (
        <section id={styles.footerWrapper}>
            <section id={styles.aboutPoolBooksWrapper}>
                <div id={styles.aboutPoolBooksAboutText}>
                    <ReactMarkdown source={data.strapiFooter.footer__col1} /> 
                </div>
                <div id={styles.aboutPoolBooksAboutAddress}>
                    <ReactMarkdown source={data.strapiFooter.footer__col2} />
                </div>
                <div id={styles.aboutPoolBooksSocialMedia}>
                    <ReactMarkdown source={data.strapiFooter.footer__col3} />
                </div>
            </section>
            <footer id={styles.footer}>
                <nav id={styles.footerNav}>
                    <Link activeClassName="active" to='/imprint'>IMPRINT, TERMS, PRIVACY POLICY</Link>
                </nav>
            </footer>
        </section>
    )
}

export default Footer