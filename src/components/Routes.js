import { HomeIcon, PencilAltIcon } from '@heroicons/react/outline'
import { Link } from 'gatsby'
import React from 'react'
import * as styles from './routes.module.css'

const routes = [
  {
    url: '/',
    label: 'Kainga',
    icon: () => <HomeIcon />,
  },
  {
    url: '/register',
    label: 'Register',
    icon: () => <PencilAltIcon />,
  },
]

export const Routes = () => {
  return (
    <ol className={styles.routes}>
      {routes.map(({ url, label, icon }) => (
        <li key={url}>
          <Link to={url} activeClassName={styles.active}>
            {icon()}
            {label}
          </Link>
        </li>
      ))}
    </ol>
  )
}
