import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              author
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
    <Layout>
      <h1>Enjoy my blogs:</h1>
      {data.allMarkdownRemark.edges.map(edge => (
        <Link
          key={edge.node.fields.slug}
          style={{
            textDecoration: "none",
            color: "#666666",
            backgroundColor: "#f9f9f9",
            padding: "20px",
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
          }}
          to={`/blog/${edge.node.fields.slug}`}
        >
          <h2>{edge.node.frontmatter.title}</h2>
          <h3>{edge.node.frontmatter.date}</h3>
          <h4>Written by: {edge.node.frontmatter.author}</h4>
        </Link>
      ))}
    </Layout>
  )
}

export default Blog
