import React from "react"
import Footer from "./footer"
import Header from "./header"
import SEO from "./seo"
import LayoutStyle from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={LayoutStyle.container}>
      <SEO title={props.title} author={props.author} />
      <Header title={props.title}></Header>
      <div className={LayoutStyle.innerContainer}>{props.children}</div>
      <Footer author={props.author}></Footer>
    </div>
  )
}

export default Layout
