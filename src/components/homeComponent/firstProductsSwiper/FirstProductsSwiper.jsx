// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

import React, { useEffect, useRef, useState } from 'react'
import c from './FirstProductsSwiper.module.css'
import { SlArrowLeft, SlArrowRight, SlBasket } from 'react-icons/sl'
import { GiScales } from 'react-icons/gi'
import { CiHeart } from 'react-icons/ci'
import { MdCancel } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
// import { useSelector } from 'react-redux';

const FirstProductsSwiper = () => {

    // const allAddedProducts = useSelector(state => state);
    const dispatch = useDispatch()
    // const [buttonActive, setVuttonActive] = useState(false)
    const [classActiveH, setClassActiveH] = useState()
    const [classActiveS, setClassActiveS] = useState()
    const [categories, setCategories] = useState([])

    const btnBuy = useRef()
    const btnCancel = useRef()


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
            .then(data => setCategories(data.slice(0, 12)))
    }, [])

    return (
        <div className={c.firstProductSwiper}>
            <h4 className={c.firstProductInfo}>Акции</h4>
            <div className={c.firstProductsContainer}>
                <button className={c.prevfirstProduct}><SlArrowLeft /></button>
                <button className={c.nextfirstProduct}><SlArrowRight /></button>
                <Swiper slidesPerView={6}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }} navigation={{
                        prevEl: `.${c.prevfirstProduct}`,
                        nextEl: `.${c.nextfirstProduct}`,
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
                                        <button ref={btnBuy} className={c.firstProductBasket} onClick={(event) => {
                                            // console.log(product.id);
                                            // allAddedProducts.products.productInfo?.map(elem => elem?.id === product?.id ? btnBuy?.current?.classList?.add(`${c.firstProductBasketActive}`) : btnCancel?.current?.classList?.add(`${c.firstProductBasketCancelActive}` ))
                                            // allAddedProducts.products.productInfo[0]?.id === product.id ? btnBuy?.current?.classList?.add(`${c.firstProductBasketActive}`) : btnCancel?.current?.classList?.add(`${c.firstProductBasketCancelActive}`) 
                                            // btnBuy?.current?.classList?.add(`${c.firstProductBasketActive}`)
                                            // btnCancel?.current?.classList?.add(`${c.firstProductBasketCancelActive}`)
                                            dispatch({
                                                type: "ADD_TO_PRODUCT",
                                                data: product
                                            })
                                            // console.log(btnBuy?.current);
                                            // console.log(btnCancel?.current);
                                            // event?.target?.dataset?.productId  ? setVuttonActive(true) : setVuttonActive(false)
                                        }}>
                                            <SlBasket className={c.firstProductBasketIcon} />
                                            <p className={c.firstProductBasketName}>В корзину</p>
                                        </button>
                                        <button ref={btnCancel} className={c.firstProductBasketCancel} onClick={() => {
                                            btnBuy?.current?.classList?.remove(`${c.firstProductBasketActive}`)
                                            btnCancel?.current?.classList?.remove(`${c.firstProductBasketCancelActive}`)
                                        }}>
                                            <MdCancel className={c.firstProductBasketIcon} />
                                            <p className={c.firstProductBasketName}>Отменить</p>
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

export default FirstProductsSwiper