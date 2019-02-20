import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
// export default () => <div>Hello plugins!</div>
export default () => (
    
    <Layout>
    <Header headerText="I'd love to talk! Email me at the address below"></Header>
    <p>
      <a href="mailto:me@example.com">me@example.com</a>
    </p>
    </Layout>
  )
