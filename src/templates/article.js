import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author
        date
        title
      }
    }
  }
`;

const Article = (props) => {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <h4>Written by: {props.data.markdownRemark.frontmatter.author}</h4>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <article
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></article>
    </Layout>
  );
};

export default Article;
