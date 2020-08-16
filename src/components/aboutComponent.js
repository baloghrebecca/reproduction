import React from 'react'
import gridStyles from './grid.module.scss'
import styles from './pages.module.scss'
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from 'react-markdown'

const AboutComponent = () => {
    const data = useStaticQuery(graphql`
    query About {
        strapiAbout {
          about__col1
          about__col2
          about__col3
          about__col4
        }
      }
      `)

    return (
        <section id={styles.about}>
            <div className={gridStyles.col1}>
                <ReactMarkdown source={data.strapiAbout.about__col1} />
            </div>

            <div className={gridStyles.col2}>
                <ReactMarkdown source={data.strapiAbout.about__col2} />
            </div>

            <div className={gridStyles.col3}>
                <ReactMarkdown source={data.strapiAbout.about__col3} />
            </div>
            <div className={gridStyles.col4}>
                <ReactMarkdown source={data.strapiAbout.about__col4} />
            </div>
        </section>)
}

export default AboutComponent;