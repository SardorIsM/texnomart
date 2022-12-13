import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookF, FaTelegramPlane, FaInstagram, FaYoutube} from 'react-icons/fa'
import c from './TopFooter.module.css'

const TopFooter = () => {
  return (
    <div className={c.topFooter}>
        <div className={c.connectUs}>
            <p className={c.question}>Возник вопрос? Звоните</p>
            <Link className={c.number}>+998 71 209 99 44</Link>
            <div className={c.divIcon}>
                <Link className={c.iconWrapper}><FaFacebookF className={c.socialIcon} /></Link>
                <Link className={c.iconWrapper}><FaTelegramPlane className={c.socialIcon} /></Link>
                <Link className={c.iconWrapper}><FaInstagram className={c.socialIcon} /></Link>
                <Link className={c.iconWrapper}><FaYoutube className={c.socialIcon} /></Link>
            </div>
            <div className={c.googlePlay}>
                <img src="https://texnomart.uz/_nuxt/img/playmarket-logo-ru.dc841a2.svg" alt="" />
            </div>
            <Link className={c.adress}>Адреса магазинов Ташкент</Link>
        </div>
        <div className={c.colons}>
            <div className={c.colonsWrapper}>
                <h3 className={c.colonsItem}>Компания</h3>
                <Link className={c.topFooterLink}>B2B продажи</Link>
                <Link className={c.topFooterLink}>О Техномарт</Link>
                <Link className={c.topFooterLink}>Новости и обзоры</Link>
                <Link className={c.topFooterLink}>Проверка IMEI</Link>
            </div>
            <div className={c.colonsWrapper}>
                <h3 className={c.colonsItem}>Информация</h3>
                <Link className={c.topFooterLink}>Бесплатная доставка</Link>
                <Link className={c.topFooterLink}>Бонусная система</Link>
                <Link className={c.topFooterLink}>Работа в Техномарт</Link>
                <Link to='/personal' className={c.topFooterLink}>Личный кабинет</Link>
                <Link className={c.topFooterLink}>Контактные номера</Link>
            </div>
            <div className={c.colonsWrapper}>
                <h3 className={c.colonsItem}>Помощь покупателю</h3>
                <Link className={c.topFooterLink}>Покупка в рассрочку</Link>
                <Link className={c.topFooterLink}>Возврат товара</Link>
                <Link className={c.topFooterLink}>Гарантия на товары</Link>
                <Link className={c.topFooterLink}>Часто задаваемые вопросы</Link>
            </div>
        </div>
    </div>
  )
}

export default TopFooter