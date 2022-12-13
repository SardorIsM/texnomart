import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { GiScales } from "react-icons/gi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { BsBoxSeam, BsPerson } from "react-icons/bs"
import c from './ScrollHeader.module.css'
import { useSelector } from 'react-redux';
import { BiCategory } from 'react-icons/bi'
import { MdCancel } from 'react-icons/md'

const ScrollHeader = ({ setIsBasketModuleActive, setIsLoginModuleActive, isCatalogActive, setCatalogActive }) => {

    const allAddedProducts = useSelector(state => state);
    const take = useRef()




    return (
        <div className={c.scrollHeader} ref={take}>
            {
                window.addEventListener("scroll", function () {
                    take?.current?.classList?.toggle(`${c.scrollHeaderAcrive}`, this?.window?.scrollY > 200)
                })
            }
            <Link to={'/'} className={c.logo}>
                <img src="https://texnomart.uz/_nuxt/img/texnomart-logo.a75bf76.svg" alt="" />
            </Link>
            <div className={c.mainCatalog} onClick={() => {
                isCatalogActive ? setCatalogActive(false) : setCatalogActive(true)
            }} >
                {
                    isCatalogActive ? <MdCancel className={c.catalogIcon} /> : <BiCategory className={c.catalogIcon} />
                }
                <p className={c.catalogName}>Каталог</p>
            </div>
            <div className={c.searchWrapper}>
                <select>
                    <option value="all">Все категории</option>
                    <option value="laptops">Техника для дома</option>
                    <option value="personal care">Офисная техника</option>
                    <option value="toys & babies">Техника для кухни</option>
                    <option value="toys & babies">Посуда для дома</option>
                    <option value="toys & babies">Товары для авто</option>
                    <option value="toys & babies">Климатическая техника</option>
                    <option value="toys & babies">Телевизоры и телекарты</option>
                </select>
                <input type="text" />
            </div>
            <div className={c.midHeaderLinks}>
                <div className={c.infoLink}>
                    <BsBoxSeam className={c.infoIcon} />
                    <p>Статус заказа</p>
                </div>
                <div className={c.infoLink} onClick={() => { setIsLoginModuleActive(true) }} >
                    <BsPerson className={c.infoIcon} />
                    <p>Вход</p>
                </div>
                <div className={c.infoLink}>
                    <GiScales className={c.infoIcon} />
                    <p>Сравнение</p>
                </div>
                <div className={c.infoLink}>
                    <AiOutlineHeart className={c.infoIcon} />
                    <p>Избранное</p>
                </div>
                <div className={c.infoBasketLink} onClick={() => { setIsBasketModuleActive(true) }}>
                    <SlBasket className={c.infoIcon} />
                    <p>Корзина</p>
                    <div className={c.productAddedInfo}>{allAddedProducts.products.productInfo?.length}</div>
                </div>
            </div>
        </div>
    )
}

export default ScrollHeader