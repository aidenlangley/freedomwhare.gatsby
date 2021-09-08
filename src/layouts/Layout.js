import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import favicon from '../../static/favicon.png'
import { Header } from '../components/Header'
import '../styles.scss'
import './Layout.scss'

/**
 * Toggle dark theme on or off. Sets `dark` item in `localStorage`.
 * @param {boolean} toggle Toggles dark theme on or off.
 */
function toggleDarkTheme(toggle) {
  localStorage.setItem('dark', toggle)
  toggleDark(true)
}

function buildClasses(dark) {
  let classes = 'root theme'
  if (dark) {
    classes += ' dark'
  }

  return classes
}

/**
 * `DefaultLayout`. Handles toggling dark theme also.
 * @param {object} children Children components passed through to `DefaultLayout`
 * @returns `DefaultLayout` component containing children components.
 */
export const Layout = ({ children }) => {
  const [dark, toggleDark] = useState(false)

  /**
   * When children toggle dark theme on or off, this method is called.
   * @param {boolean} toggle
   */
  const onToggleDark = (toggle) => {
    toggle ? toggleDarkTheme(true) : toggleDarkTheme(false)
  }

  /** Runs on init. */
  useEffect(() => {
    if (localStorage.getItem('dark') === 'true') {
      toggleDarkTheme(true)
    }
  }, [])

  return (
    <>
      <Helmet>
        <link rel="shortcut icon" type="image/png" href={favicon} />
      </Helmet>

      <div className={buildClasses(dark)}>
        <Header />
        <main>{children}</main>
      </div>
    </>
  )
}
