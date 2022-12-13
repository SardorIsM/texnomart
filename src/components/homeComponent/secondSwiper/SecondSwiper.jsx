// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

import React from 'react'
import './SecondSwiper.css'
import secondSwiperItems from '../../../dummy-data-secondSwiperDevice.json'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { v4 as uuidv4 } from 'uuid';

const SecondSwiper = () => {
    return (
        <div className="secondSwiper">
            <h4 className="secondSwiperInfo">Популярные категории</h4>
            <div className="swiperContainer">
                <button className="prevSecond"><SlArrowLeft /></button>
                <button className="nextSecond"><SlArrowRight /></button>
                <Swiper slidesPerView={5}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }} navigation={{
                        prevEl: ".prevSecond",
                        nextEl: ".nextSecond",
                    }} modules={[Pagination, Navigation]} >
                    {
                        secondSwiperItems.map(items =>
                            <SwiperSlide key={uuidv4()}>
                                <div className="deviceWrapper">
                                    <img src={items.link} alt="" className="deviceImg" />
                                    <p>{items.text}</p>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default SecondSwiper