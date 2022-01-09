
import * as React from "react"
import { Link } from "gatsby"
function HeaderItem({ children, to, description}) {
  return (
    <Link className="text-xl p-1 px-4 m-1 text-slate-100 bg-slate-900" to={to}>{children}</Link>
  )
}

export default HeaderItem
