import '../styles/index.scss'
import React from 'react'
import Header from 'Components/Header'
import Config from 'Data/config'

const Layout = ({ children, data }) => (
  <div>
    <Header siteTitle={Config.siteTitle} />
    <div className="u-spacing"></div>
    <div className="u-container">
      {children()}
    </div>
  </div>
)

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
