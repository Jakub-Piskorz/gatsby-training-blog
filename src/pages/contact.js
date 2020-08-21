import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout title="Contact me!">
      <p>Phone number: +48 698 497 193</p>
      <p>
        e-mail address:{" "}
        <Link to="contact@jakubpiskorz.pl">contact@jakubpiskorz.pl</Link>
      </p>
    </Layout>
  )
}

export default Contact
