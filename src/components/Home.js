import React, { useRef } from "react";
import { Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'

export default function Home(props){
    const swiperRef = useRef();
    const x = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
    "Etiam non tempus eros, at commodo dolor. Nam facilisis gravida massa ut auctor. Cras eget mauris id risus tincidunt varius." + 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " 

    const list = [
        {
            title: "react",
            text:x
        },
        {
            title: "web development",
            text: x
        },
        {
            title: "django",
            text:x
        },
        {
            title: "Github",
            text:x
        }
        ,{
            title: "User Interface",
            text:x
        }
    ]

    function Card(props) {
        let className = "skill-card";
        if (props.isActive) {
            className += " active-card"
        } else if (props.isNext) {
            className += " next-card"
        }

        if (props.isVisible) {
            className += " visible"
        }

        function slideTo(){
            let slideIndex = props.index - 1
            if (slideIndex < 0 || slideIndex >= list.length) {
                slideIndex = list.length - 1 
            }
            swiperRef.current.swiper.slideToLoop(slideIndex)
        }
        return(
            <div className={className} onClick={slideTo} data-title={props.item.title}>
                <h6 className="card-title">
                    {props.item.title}</h6>
                <div className="card-text">
                    <p>{props.item.text}</p>
                </div>
            </div>
        )
    }

    return(
        <div className="wrapper row">
            <div className="container col-md-6 col-12">
                <h3>Hi, I'm</h3>
                <h1>Izzatul Najwa</h1>
                <h3>welcome to my portfolio</h3>
            </div>
            <div className="container col-md-6 col-12 scroll-wrapper">
            <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                    loop
                    ref={swiperRef}
                    watchSlidesProgress
                >
                {list.map((item, index) => {
                    return(
                        <SwiperSlide key={index}>
                           {({ isActive, isNext, isVisible}) => (
                            <Card 
                                item={item} 
                                isActive={isActive} 
                                isNext={isNext} 
                                index={index}
                                isVisible={isVisible}
                                />
                            )}                      
                        </SwiperSlide>
                    )
                })}
                </Swiper>
            </div>
        </div>
    )
}