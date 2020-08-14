import React from 'react'
import './imprintComponent.scss'
import { graphql, useStaticQuery, Link } from "gatsby"
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
        <section id="imprint">
            <div className="col-1-imprint">
                <ReactMarkdown source={data.strapiImprint.imprint__col1} />
            </div>
            <div className="col-2-imprint">
                <ReactMarkdown source={data.strapiImprint.imprint__col2} />
            </div>
        </section>)
}

export default ImprintComponent;