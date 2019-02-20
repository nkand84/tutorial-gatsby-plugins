import React from "react"
import { Link } from "gatsby"
import "./layout.css"
const ListLink = props => (
    <li className="listLink">
      <Link to={props.to}>{props.children}</Link>
    </li>
  )
  
  export default ({ children }) => (
    <div className="main">
      <header className="headerStyle">
        <Link to="/">
          <h3 className="headingStyle">MySweetSite</h3>
        </Link>
        <ul className="listStyle">
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )