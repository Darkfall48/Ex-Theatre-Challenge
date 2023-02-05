//? Libraries
import {
  HashRouter as Router,
  Route,
  Routes,
  Switch,
  useLocation,
} from 'react-router-dom'
//? Style
import './assets/scss/imports.scss'
//? Components
import { HomePage } from './views/home-page'
import { AppHeader } from './cmps/app/AppHeader'
import { AppFooter } from './cmps/app/AppFooter'
import { TheatreIndex } from './views/theatre-index'

export function RootCmp() {
  const location = useLocation()

  return (
    <div className="main-app">
      <AppHeader />
      <main className="main-container">
        <Routes location={location}>
          <Route path="/theatre" element={<TheatreIndex />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <AppFooter />
    </div>
  )
}
