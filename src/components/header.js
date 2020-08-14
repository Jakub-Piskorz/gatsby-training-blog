import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import headerStyles from "./header.module.scss";

const Header = () => {
  const myQuery = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  return (
    <header>
      <h1>{myQuery.site.siteMetadata.title}</h1>
      <nav className={headerStyles.nav}>
        <ul>
          <li>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.linkActive}
              to="/"
            >
              Homepage
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.linkActive}
              to="/articles"
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.linkActive}
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
