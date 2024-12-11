import React from 'react'
import s from './Loader.module.css'
import sprite from './bouncing.svg'

export const Loader = () => (
  <div className={s.loader}>
    <svg height={75} width={200}>
      <use href={`${sprite}#icon-circle`} />
    </svg>
  </div>
)
