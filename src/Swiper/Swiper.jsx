
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import classes from './Swiper.module.css';

import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const SwiperSlider = (props) => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                navigation={true}
                slidesPerView={1}
                loop={true}
                loopPreventsSlide={false}
                speed={800}
                className={classes.mySwiper}
            >
                <SwiperSlide className={classes.slider}>
                    <a href={props && props.sliderPhotos && props.sliderPhotos[0]} target="_blank" rel="noreferrer">
                        <img src={props && props.sliderPhotos && props.sliderPhotos[0]} alt=''></img>
                    </a>
                </SwiperSlide>
                <SwiperSlide className={classes.slider}>
                    <a href={props && props.sliderPhotos && props.sliderPhotos[1]} target="_blank" rel="noreferrer">
                        <img src={props && props.sliderPhotos && props.sliderPhotos[1]} alt=''></img>
                    </a>
                </SwiperSlide>
                <SwiperSlide className={classes.slider}>
                    <a href={props && props.sliderPhotos && props.sliderPhotos[2]} target="_blank" rel="noreferrer">
                        <img src={props && props.sliderPhotos && props.sliderPhotos[2]} alt=''></img>
                    </a>
                </SwiperSlide>
                <SwiperSlide className={classes.slider}>
                    <a href={props && props.sliderPhotos && props.sliderPhotos[3]} target="_blank" rel="noreferrer">
                        <img src={props && props.sliderPhotos && props.sliderPhotos[3]} alt=''></img>
                    </a>
                </SwiperSlide>
                <SwiperSlide className={classes.slider}>
                    <a href={props && props.sliderPhotos && props.sliderPhotos[4]} target="_blank" rel="noreferrer">
                        <img src={props && props.sliderPhotos && props.sliderPhotos[4]} alt=''></img>
                    </a>
                </SwiperSlide>
                <SwiperSlide className={classes.slider}>
                    <a href={props && props.sliderPhotos && props.sliderPhotos[5]} target="_blank" rel="noreferrer">
                        <img src={props && props.sliderPhotos && props.sliderPhotos[5]} alt=''></img>
                    </a>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default SwiperSlider;
