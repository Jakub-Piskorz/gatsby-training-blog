import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.scss"

const Footer = props => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  const _author = props.author || author

  return (
    <footer>
      <p>Created by {_author}</p>
    </footer>
  )
}

export default Footer
