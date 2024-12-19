import React, { useRef } from "react";
import { Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'

export default function Home(props){
    const swiperRef = useRef();

    const list = ["Django","Fullstack web development", "React", "User Interface", "Github"]

    function slideTo(event){
        let slideIndex = event.target.dataset.index - 1
        if (slideIndex < 0 || slideIndex >= list.length) {
            slideIndex = list.length - 1 
        }
        swiperRef.current.swiper.slideToLoop(slideIndex)
        console.log('slideindex : '+ slideIndex)
        console.log('data index: '+ (event.target.dataset.index - 1 ))
    }
    function Card(props) {
        let className = "container skill-card";
        if (props.isActive) {
            className += " active-card"
        } else if (props.isNext) {
            className += " next-card"
        }
        return(
            <div className={className} data-index={props.index} onClick={slideTo}>
                <div>{props.item}</div>
            </div>
        )
    }

    return(
        <div className="wrapper row">
            <div className="container col-sm-6 col-12">
                <h3>Hi, I'm</h3>
                <h1>Izzatul Najwa</h1>
                <h3>welcome to my portfolio</h3>
            </div>
            <div className="container col-sm-6 col-12 scroll-wrapper">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                    loop
                    ref={swiperRef}
                >
                {list.map((item, index) => {
                    return(
                        <SwiperSlide key={index}>
                           {({ isActive, isNext }) => (
                            <Card item={item} isActive={isActive} isNext={isNext} index={index}/>
    )}
                        </SwiperSlide>
                    )
                })}
                </Swiper>
            </div>
        </div>
    )
}