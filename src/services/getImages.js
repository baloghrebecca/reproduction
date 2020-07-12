import { useStaticQuery, graphql } from "gatsby"

export const GetImages = () => {
  const { images } = useStaticQuery(
    graphql`
    query {
        allFile(filter: {dir: {regex: "/images/gallery/"}}) {
          edges {
            node {
              childImageSharp {
                sizes {
                  src
                  originalName
                }
              }
            }
          }
        }
      }
    `
  )
  return images.allFile.edges
}

