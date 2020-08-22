import React from 'react'
import styles from '../styles/imprintComponent.module.scss'
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from 'react-markdown'


const ImprintComponent = () => {
    const data = useStaticQuery(graphql`
    query Imprint {
        strapiImprint {
          imprint__col1
          imprint__col2
        }
      }           
      `)

    return (
        <section id={styles.imprint}>
            <div className={styles.col1Imprint}>
                <ReactMarkdown source={data.strapiImprint.imprint__col1} />
            </div>
            <div className={styles.col2Imprint}>
                <ReactMarkdown source={data.strapiImprint.imprint__col2} />
            </div>
        </section>)
}

export default ImprintComponent;