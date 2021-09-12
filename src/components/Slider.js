import React from 'react'
import * as styles from './slider.module.css'

export const Slider = ({ id, value, action, label, ariaLabel }) => {
  return (
    <label htmlFor={id} className={styles.slider}>
      <input
        type="checkbox"
        id={id}
        checked={value}
        onChange={action}
        aria-label={ariaLabel}
      />
      <span>{label}</span>
    </label>
  )
}
