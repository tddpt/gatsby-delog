import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <a href="https://web.archive.org/web/20040830103506/http://funnyasfarting.mytopsitelist.com/funny" target="blank"><img src="assets/topfart1.gif" alt="Top Fart 1" /></a>
        <p>&copy; 2020 Suicidal Farts</p>
      </footer>
    </div>
  )
}