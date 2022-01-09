import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import HeaderItem from "./header-item"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header className="flex p-2 text-slate-100 bg-sky-800">
    <StaticImage
      src="../images/carterlogo.png" 
      alt="logo"
      placeholder="blurred"
      layout="fixed"
      width={50}
    />
    <span className="h-full absolute right-0">
    <HeaderItem to="/crypto">Crypto</HeaderItem>
    <HeaderItem to="/finance">Finance</HeaderItem>
    <HeaderItem to="/research">Research</HeaderItem>
    <HeaderItem to="/about">About</HeaderItem>
    </span>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
