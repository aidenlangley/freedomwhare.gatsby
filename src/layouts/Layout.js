import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { Routes } from '../components/Routes'
import { Slider } from '../components/Slider'
import gatsby from '../images/gatsby.png'
import * as styles from './layout.module.css'

/**
 * Builds a string of classes for the grid & theming.
 * @param {boolean} dark `Dark` state.
 * @returns A string of classes.
 */
function classes(dark) {
  let classes = `${styles.root} theme`
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
  const [dark, toggle] = useState(false)

  /** Runs on init. */
  useEffect(() => {
    if (localStorage.getItem('dark') === 'true') {
      toggle(true)
    }
  }, [])

  return (
    <>
      {/* SEO & metadata */}
      <Helmet>
        <link rel="shortcut icon" type="image/png" href={gatsby} />
      </Helmet>

      {/* Root `div`, controls theme */}
      <div className={classes(dark)}>
        {/* Logo & dark toggle */}
        <header>
          <img src={gatsby} alt="Gatsby logo" className={styles.logo} />
          <Slider
            id="dark-toggle"
            value={dark}
            className={styles.toggle}
            action={() => {
              localStorage.setItem('dark', !dark)
              toggle(!dark)
            }}
            label="dark theme"
            ariaLabel="toggle dark theme on or off"
          />
        </header>

        {/* Navigation */}
        <aside>
          <nav>
            <Routes />
          </nav>
        </aside>

        {/* Main content */}

        <main>
          <div>
            <h1>main</h1>
            {children}
          </div>
        </main>

        {/* Informative footer */}
        <footer>footer</footer>
      </div>
    </>
  )
}
