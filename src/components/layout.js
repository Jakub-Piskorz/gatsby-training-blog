import React from "react"
import Footer from "./footer"
import Header from "./header"
import styled from "styled-components"
import SEO from "./seo"

const Layout = props => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 1300px;
    padding: 40px;
    min-height: 100vh;
  `
  const InnerContainer = styled.div`
    flex-grow: 1;
  `

  return (
    <Container>
      <SEO title={props.title} author={props.author} />
      <Header title={props.title}></Header>
      <InnerContainer>{props.children}</InnerContainer>
      <Footer author={props.author}></Footer>
    </Container>
  )
}

export default Layout
