//? Libraries
import { NavLink } from 'react-router-dom'

export function AppHeader() {
  return (
    <header className="app-header">
      <nav className="app-header-main-nav">
        <NavLink to="/" title="Home Page">
          Home
        </NavLink>
        <NavLink to="/theatre" title="Theatre">
          Theatre
        </NavLink>
      </nav>
    </header>
  )
}
