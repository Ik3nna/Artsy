import React from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay } from 'swiper/modules';

// styles
import homeStyles from "../../pages/home/index.module.css";

interface CarouselProps {
    children: React.ReactNode,
    className?: any
}

const Carousel = ({ children, className }: CarouselProps) => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        className={`
            ${homeStyles[className]}
        `}
      >
        {children}
      </Swiper>
  )
}

export default Carousel;
