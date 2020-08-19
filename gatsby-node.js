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
      name: "slug",
      value: path.basename(node.fileAbsolutePath, ".md"),
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = `${__dirname}/src/templates/blogpost.js`

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            html
            frontmatter {
              author
              date
              title
            }
          }
        }
      }
    }
  `).catch(error => console.error(error))

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: `blog/${edge.node.fields.slug}`,
      component: blogTemplate,
      context: edge,
    })
  })
}
