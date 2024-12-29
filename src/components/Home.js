import React, { useRef } from "react";
import { Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'

export default function Home(props){
    const swiperRef = useRef();

    const list = [
        {
            title: "Github",
            text: 'GitHub is is one of the most popular resources for developers to share code \
            or work on projects together. I used GitHub to implement continuous integration \
            and continuous delivery/deveployment (CI/CD) to streamline my development lifecyle \
            such as the application of GitHub actions.'
        }
        ,
        {
            title: "Technical skills",
            text: 'I am skilled in several programming languages and tools such as:  \
             Python, JavaScript, HTML, CSS, React, Django, and SQL.'
        },
        {
            title: "react",
            text: 'React is a JavaScript library that allows for creation of \
            interactive user interfaces (UI). My experience and skill with React \
            allows me to build application with improved user experience and faster \
            rendering.'
        },
        {
            title: "web development",
            text: 'I am experienced in full-stack web application development, \
            enabling seamless user experiences with interactive user interface, \
            and developing robust application workflows that run behind the scences. \
            I aspire to create application that is robust, scalable and efficient.'
        },
        {
            title: "django",
            text: 'Django is a free and open source high-level Python web framework that \
            encourages rapid development and clean, pragmatic design. \
            It is secure, scalable, and helps to complete application quickly.\
            I am experienced with the use of Django as most of my application was made \
            with this framework.'
        },
        

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
            <div className="container col-md-6 col-12 p-5">
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