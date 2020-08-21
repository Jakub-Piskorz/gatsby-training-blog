import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout title="About me" author="Jakub">
      <p>
        Hi! My name is Jacob. I'm former marketing specialist and currently an
        aspiring React Developer.
        <br />
        You can see my work{" "}
        <Link to="http://jakubpiskorz.pl">on my website</Link> and also on my{" "}
        <Link to="https://github.com/Jakub-Piskorz">Github</Link>
      </p>
    </Layout>
  )
}

export default About
