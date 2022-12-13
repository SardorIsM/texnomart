import React from 'react'
import { Link } from 'react-router-dom'
import c from './PersonalPage.module.css'

const PersonalPage = () => {
  return (
    <div className={c.personalPage}>
        <h2 className={c.personalPageTitle}>Здравствуйте!</h2>
        <p className={c.personalPageText}>Добро пожаловать в наш онлайн магазин!</p>
        <Link to='/' className={c.personalPageLink}>Удачных вам покупок</Link>
    </div>
  )
}

export default PersonalPage