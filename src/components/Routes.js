import { HomeIcon, PencilAltIcon } from '@heroicons/react/outline'
import { Link } from 'gatsby'
import React from 'react'
import { active, list } from './Routes.module.scss'

const routes = [
  { url: '/', label: 'Kainga', icon: HomeIcon },
  { url: '/register', label: 'Register', icon: PencilAltIcon },
]

export const Routes = () => {
  return (
    <ol className={list}>
      {routes.map(({ url, label, icon }) => (
        <li key={url}>
          <Link to={url} activeClassName={active}>
            {icon}
            <span>{label}</span>
          </Link>
        </li>
      ))}
    </ol>
  )
}
