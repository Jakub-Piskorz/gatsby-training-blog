import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BlogStyle from "./blog.module.scss"

const Blog = props => {
  //  URL search query goes to searchObject.
  //  www.example.com/blog?name=jacob&age=25 -> {name: "jacob", age: "25"}
  let search = props.location.search
    .slice(1)
    .split(/&/g)
    .map(x => x.split(/=/g))
  let searchObject = {}
  search.forEach(x => (searchObject[x[0]] = x[1]))
  let filter = ""
  if (
    searchObject.hasOwnProperty("author") ||
    searchObject.hasOwnProperty("date") ||
    searchObject.hasOwnProperty("title")
  )
    filter =
      `(filter: {frontmatter: {` +
      (searchObject.hasOwnProperty("author")
        ? 'author: { regex: "/' + searchObject.author + '/ig"}, '
        : "") +
      (searchObject.hasOwnProperty("date")
        ? 'date: { regex: "/' + searchObject.date + '/ig"}, '
        : "") +
      (searchObject.hasOwnProperty("title")
        ? 'title: { regex: "/' + searchObject.title + '/ig"}, '
        : "") +
      `}})`
  return (
    <Layout title="Blog">
      {console.log(filter)}
      {props.data.allMarkdownRemark.edges.map((edge, i) => {
        return (
          <Link
            to={"/" + edge.node.fields.slug}
            key={i}
            className={BlogStyle.post}
          >
            <h2 className={BlogStyle.h2}>{edge.node.frontmatter.title}</h2>
            <h4 className={BlogStyle.h4}>{edge.node.frontmatter.author}</h4>
            <h5 className={BlogStyle.h5}>{edge.node.frontmatter.date}</h5>
          </Link>
        )
      })}
    </Layout>
  )
}

export const PageQuery = graphql`
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
`

export default Blog
