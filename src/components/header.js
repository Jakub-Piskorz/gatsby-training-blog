import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import headerModule from "./header.module.scss"

const Header = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      <h2>{title}</h2>
      <nav className={headerModule.nav}>
        <ul>
          <li>
            <Link
              activeClassName={headerModule.linkActive}
              className={headerModule.link}
              to="/"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              activeClassName={headerModule.linkActive}
              className={headerModule.link}
              to="/blog"
            >
              BLOG
            </Link>
          </li>
          <li>
            <Link
              activeClassName={headerModule.linkActive}
              className={headerModule.link}
              to="/about"
            >
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
