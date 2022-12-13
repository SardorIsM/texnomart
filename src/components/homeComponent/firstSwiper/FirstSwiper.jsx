// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

import React from 'react'
import c from './FirstSwiper.module.css'
import firstSwiperLogos from '../../../dummy-data-firstSwiperLogos.json'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { v4 as uuidv4 } from 'uuid';

const FirstSwiper = () => {
    return (
        <div className={c.firstSwiper}>
            <button className={c.prevFirstSwiper}><SlArrowLeft /></button>
            <button className={c.nextFirstSwiper}><SlArrowRight /></button>
            <Swiper slidesPerView={8}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }} navigation={{
                    prevEl: `.${c.prevFirstSwiper}`,
                    nextEl: `.${c.nextFirstSwiper}`,
                }} modules={[Pagination, Navigation]} >
                {
                    firstSwiperLogos.map(logos =>
                        <SwiperSlide key={uuidv4()}>
                            <div className={c.logosWrapper}>
                                <img src={logos} alt="" className={c.logosImg} />
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}

export default FirstSwiper