import React from "react"
import Layout from "../components/layout"
import PostStyle from "./post.module.scss"

const Post = props => {
  return (
    <Layout title={props.pageContext.node.frontmatter.title}>
      {console.log(props.pageContext)}
      <h2 className={PostStyle.h2}>
        Author: {props.pageContext.node.frontmatter.author}
      </h2>
      <h3>{props.pageContext.node.frontmatter.date}</h3>
      <div
        className={PostStyle.article}
        dangerouslySetInnerHTML={{ __html: props.pageContext.node.html }}
      ></div>
    </Layout>
  )
}

export default Post
