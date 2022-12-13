import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { GiScales } from "react-icons/gi";
import { GrMicrophone } from "react-icons/gr";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { BsBoxSeam, BsPerson } from "react-icons/bs"
import c from './MidHeader.module.css'
import { useSelector } from 'react-redux';

const MidHeader = ({setIsBasketModuleActive, setIsLoginModuleActive}) => {

  const allAddedProducts = useSelector(state => state);

  return (
    <div className={c.midHeader}>
      <Link to={'/'} className={c.logo}>
        <img src="https://texnomart.uz/_nuxt/img/texnomart-logo.a75bf76.svg" alt="" />
      </Link>
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
        <GrMicrophone className={c.micro}/>
        <button>
          <FiSearch  />
        </button>
      </div>
      <div className={c.midHeaderLinks}>
        <div className={c.infoLink}>
          <BsBoxSeam className={c.infoIcon} />
          <p>Статус заказа</p>
        </div>
        <div className={c.infoLink} onClick={() => {setIsLoginModuleActive(true)}} >
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
        <div className={c.infoBasketLink} onClick={() => {setIsBasketModuleActive(true)}}>
          <SlBasket className={c.infoIcon}/>
          <p>Корзина</p>
          <div className={c.productAddedInfo}>{allAddedProducts.products.productInfo?.length}</div>
        </div>
      </div>
    </div>
  )
}

export default MidHeader