// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

import React, { useEffect, useState } from 'react'
import c from './ThirdProductsSwiper.module.css'
import { SlArrowLeft, SlArrowRight, SlBasket } from 'react-icons/sl'
import { GiScales } from 'react-icons/gi'
import { CiHeart } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";

const ThirdProductSwiper = () => {

    const dispatch = useDispatch()
    // const [buttonActive, setVuttonActive] = useState(false)
    const [classActiveH, setClassActiveH] = useState()
    const [classActiveS, setClassActiveS] = useState()
    const [categories, setCategories] = useState([])



    const HeartActive = () => {

        if (classActiveH === undefined) {
            setClassActiveH(`${c.firstProductIconActive}`)
        } else {
            setClassActiveH()
        }

    }
    const ScalesActive = () => {
        if (classActiveS === undefined) {
            setClassActiveS(`${c.firstProductIconActive}`)
        } else {
            setClassActiveS()
        }
    }

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(res => res.json())
            .then(data => setCategories(data.slice(24, 36)))
    }, [])

    return (
        <div className={c.firstProductSwiper}>
            <h4 className={c.firstProductInfo}>Хит продаж</h4>
            <div className={c.firstProductsContainer}>
                <button className={c.prevThirdProduct}><SlArrowLeft /></button>
                <button className={c.nextThirdProduct}><SlArrowRight /></button>
                <Swiper slidesPerView={6}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }} navigation={{
                        prevEl: `.${c.prevThirdProduct}`,
                        nextEl: `.${c.nextThirdProduct}`,
                    }} modules={[Pagination, Navigation]} >
                    {
                        categories.map(product =>
                            <SwiperSlide key={product.id}>
                                <div className={c.firstProductWrapper}>
                                    <Link to={`/pdp/${product.id}`}>
                                        <img src={product?.category?.image} alt="" className={c.FirstProductImg} />
                                    </Link>
                                    <Link to={`/pdp/${product.id}`} className={c.firstProductNameLink}><p className={c.firstProductName}>{product?.category?.name}</p></Link>
                                    <p className={c.firstProductPrice}>{product?.price}$</p>
                                    <div className={c.firstProductBottom}>
                                        <button data-product-id={product.id} className={c.firstProductBasket} onClick={(event) => {
                                            dispatch({
                                                type: "ADD_TO_PRODUCT",
                                                data: product
                                            })
                                            // event?.target?.dataset?.productId  ? setVuttonActive(true) : setVuttonActive(false)
                                        }}>
                                            <SlBasket className={c.firstProductBasketIcon} />
                                            <p className={c.firstProductBasketName}>В корзину</p>
                                        </button>
                                        <CiHeart style={{ marginLeft: "16px" }} onClick={HeartActive} className={classActiveH} />
                                        <GiScales style={{ marginLeft: "10px" }} onClick={ScalesActive} className={classActiveS} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default ThirdProductSwiper