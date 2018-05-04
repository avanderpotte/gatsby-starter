import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header className="c-header t-bg-black">
    <div className="u-container">
      <h1>
        <Link to="/" className="c-header__title t-color-white u-block u-pad-y">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

export default Header
