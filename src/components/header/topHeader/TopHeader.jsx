import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import c from './TopHeader.module.css'

const TopHeader = () => {
    return (
        <div className={c.topHeader}>
            <div className={c.chooseRegion}>
                <IoLocationOutline className={c.icon} />
                <div>
                    <p>Ташкент</p>
                </div>
            </div>
            <div className={c.topHeaderLinks}>
                <NavLink className={c.navLink}>Наши магазины</NavLink>
                <NavLink className={c.navLink}><span className={c.spanSell}>B2B продажи</span></NavLink>
                <NavLink className={c.navLink}>Покупка в рассрочку</NavLink>
                <NavLink className={c.navLink}>Способы оплаты</NavLink>
                <NavLink className={c.navLink}>Гарантия на товары</NavLink>
            </div>
            <div className={c.topHeaderInfo}>
                <NavLink className={c.number}><span className={c.contact}>Контакт центр :</span> +99871 209 99 44</NavLink>
                <select >
                    <option value="ru">RU</option>
                    <option value="uz">UZ</option>
                </select>
            </div>
        </div>
    )
}

export default TopHeader