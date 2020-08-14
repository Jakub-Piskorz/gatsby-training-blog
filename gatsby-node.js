/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md");
    createNodeField({
      node: node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      query {
        allMarkdownRemark {
          edges {
            node {
              html
              fields {
                slug
              }
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then((result) => {
    if (result.errors) throw result.errors;
    result.data.allMarkdownRemark.edges.forEach((edge) => {
      createPage({
        path: `/articles/${edge.node.fields.slug}`,
        component: `${__dirname}/src/templates/article.js`,
        context: {
          slug: edge.node.fields.slug,
        },
      });
    });
  });
};
