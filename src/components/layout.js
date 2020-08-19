import React from "react"
import Header from "./header"
import Footer from "./footer"
import "./layout.scss"
import SEO from "../components/seo"

const Layout = props => {
  const description =
    props.description || "Welcome to my Gatsby Training Blog v2"
  const title = props.title || "Untitled"

  return (
    <>
      <SEO title={title} description={description} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          maxWidth: "1300px",
          margin: "auto",
          paddingTop: "40px",
          paddingBottom: "40px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <Header />
        <main style={{ flexGrow: 1 }}>{props.children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
