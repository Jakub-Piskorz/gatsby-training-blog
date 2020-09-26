import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import BlogStyle from "./blog.module.scss"

const Blog = props => {
  //  URL search query goes to searchObject.
  //  www.example.com/blog?name=jacob&age=25 -> {name: "jacob", age: "25"}
  const search = props.location.search
    .slice(1)
    .split(/&/g)
    .map(x => x.split(/=/g))
  let _tempSearchObject = {}
  let searchObject = {
    author: "",
    date: "",
    title: "",
  }
  search.map(x => (_tempSearchObject[x[0]] = x[1]))
  for (let key in _tempSearchObject) {
    if (key === "author" || key === "date" || key === "title")
      searchObject[key] = _tempSearchObject[key]
        .toLowerCase()
        .replaceAll("%20", " ")
  }
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
  // Now "filteredBlogs" will filter graphql "data" through "searchObject"
  // and filter out nodes that don't fit search params
  const filteredBlogs = data.allMarkdownRemark.edges.filter(
    edge =>
      edge.node.frontmatter.author.toLowerCase().search(searchObject.author) >
        -1 &&
      edge.node.frontmatter.date.toLowerCase().search(searchObject.date) > -1 &&
      edge.node.frontmatter.title.toLowerCase().search(searchObject.title) > -1
  )

  return (
    <Layout title="Blog">
      {/* This will render all blogs*/}
      {filteredBlogs.map((edge, i) => {
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
export default Blog
