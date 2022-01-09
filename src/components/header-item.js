
import * as React from "react"
import { Link } from "gatsby"
function HeaderItem({ children, to, description}) {
  return (
    <Link className="border border-black rounded p-1 m-1 text-slate-100 bg-slate-900" to={to}>{children}</Link>
  )
}

export default HeaderItem
