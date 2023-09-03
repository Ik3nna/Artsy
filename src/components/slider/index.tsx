import React from 'react';
import { Swiper } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import 'swiper/css/free-mode';
import "swiper/css";

// styles
import homeStyles from "../../pages/home/index.module.css"

interface SliderProps {
    children: React.ReactNode,
    className?: any
}

const Slider = ({ children, className }: SliderProps)=> {
    return(
        <Swiper 
            slidesPerView={"auto"} 
            freeMode={true} 
            spaceBetween={10} 
            modules={[FreeMode]} 
            className={`
                ${homeStyles[className]}
            `}
        >
            {children}
        </Swiper>
    )
}

export default Slider;