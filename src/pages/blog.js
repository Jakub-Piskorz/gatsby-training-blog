import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import BlogStyle from "./blog.module.scss"

const Blog = props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              date
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout title="Blog">
      {data.allMarkdownRemark.edges.map(edge => {
        return (
          <Link to={"/" + edge.node.fields.slug} className={BlogStyle.post}>
            <h2 className={BlogStyle.h2}>{edge.node.frontmatter.title}</h2>
            <h4 className={BlogStyle.h4}>{edge.node.frontmatter.author}</h4>
            <h5 className={BlogStyle.h5}>{edge.node.frontmatter.date}</h5>
          </Link>
        )
      })}
    </Layout>
  )
}

export default Blog
