import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./layout.scss"
import Modules from "./layout.module.scss"

const Header = props => {
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
  const _title = props.title || title

  return (
    <header>
      <h1>{_title}</h1>
      <nav>
        <ul className={Modules.ul}>
          <li>
            <Link
              activeClassName={Modules.activeLink}
              className={Modules.link}
              to="/"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              activeClassName={Modules.activeLink}
              className={Modules.link}
              to="/blog"
            >
              BLOG
            </Link>
          </li>
          <li>
            <Link
              activeClassName={Modules.activeLink}
              className={Modules.link}
              to="/about"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              activeClassName={Modules.activeLink}
              className={Modules.link}
              to="/contact"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
