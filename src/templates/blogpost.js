import React from "react"
import Layout from "../components/layout"

const BlogPost = ({ pageContext }) => {
  return (
    <Layout title={pageContext.node.frontmatter.title}>
      <div style={{ marginBottom: "50px", fontSize: "15px" }}>
        <h1 style={{ marginBottom: 10 }}>
          {pageContext.node.frontmatter.title}
        </h1>
        <p style={{ marginBottom: 0 }}>
          Author: {pageContext.node.frontmatter.author}
        </p>
        <p>{pageContext.node.frontmatter.date}</p>
      </div>

      <article
        dangerouslySetInnerHTML={{ __html: pageContext.node.html }}
      ></article>
    </Layout>
  )
}

export default BlogPost
