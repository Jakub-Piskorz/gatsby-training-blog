/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    createNodeField({
      node: node,
      value: path.basename(node.fileAbsolutePath, ".md"),
      name: `slug`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const markdowns = await graphql(`
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
            html
          }
        }
      }
    }
  `)
  const blog = await graphql(`
    query {
      sitePage(path: { regex: "/blog/gi" }) {
        path
      }
    }
  `)

  const postPath = `${__dirname}/src/templates/post.js`
  const blogPath = `${__dirname}/src/pages/blog.js`

  markdowns.data.allMarkdownRemark.edges.map(edge => {
    createPage({
      path: edge.node.fields.slug,
      component: postPath,
      context: edge,
    })
    // eslint-disable-next-line array-callback-return
    return
  })
}
