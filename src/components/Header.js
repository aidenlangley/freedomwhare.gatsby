import React from 'react'
import gatsby from '../images/gatsby.png'
import { header } from './Header.module.scss'
import { Routes } from './Routes'

export const Header = () => {
  return (
    <header className={header}>
      <img src={gatsby} alt="Gatsby logo" />
      <nav>
        <Routes />
      </nav>
      <button></button>
    </header>
  )
}
