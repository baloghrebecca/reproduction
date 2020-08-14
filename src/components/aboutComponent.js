import React from 'react'
import './pages.scss'
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
        <section id="about">
            <div className="col-1">
                <ReactMarkdown source={data.strapiAbout.about__col1} />
            </div>

            <div className="col-2">
                <ReactMarkdown source={data.strapiAbout.about__col2} />
            </div>

            <div className="col-3">
                <ReactMarkdown source={data.strapiAbout.about__col3} />
            </div>
            <div className="col-4">
                <ReactMarkdown source={data.strapiAbout.about__col4} />
            </div>
        </section>)
}

export default AboutComponent;