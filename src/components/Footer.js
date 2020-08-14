import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Footer = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return <p>Created by {data.site.siteMetadata.author}</p>;
};

export default Footer;
