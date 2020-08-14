import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql, Link } from "gatsby";
import "./layout.scss";

const IndexPage = () => {
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
  `);
  return (
    <Layout>
      <ol>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
              <Link to={`/articles/${edge.node.fields.slug}`}>
                Click to read...
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default IndexPage;
