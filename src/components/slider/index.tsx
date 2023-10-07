import { Swiper } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import 'swiper/css/free-mode';
import "swiper/css";

// styles
import homeStyles from "../../pages/home/index.module.css";
import marketplaceStyles from "../../pages/marketplace/id/index.module.css";
import auctionStyles from "../../pages/auctions/index.module.css";

// type
import { SwiperProps } from '../../types';

const Slider = ({ children, className }: SwiperProps)=> {
    return(
        <Swiper 
            slidesPerView={"auto"} 
            freeMode={true} 
            spaceBetween={10} 
            modules={[FreeMode]} 
            className={`
                ${homeStyles[className]}
                ${marketplaceStyles[className]}
                ${auctionStyles[className]}
            `}
        >
            {children}
        </Swiper>
    )
}

export default Slider;