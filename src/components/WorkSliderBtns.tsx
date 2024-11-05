"use client"

import { useSwiper } from "swiper/react";
import {PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi";

type btnsType = {
    containerStyles: string, 
    btnStyles: string, 
    iconStyles: string
}

const WorkSliderBtns = ({containerStyles, btnStyles, iconStyles}: btnsType) => {

    const swiper = useSwiper()

  return (
    <div className={containerStyles}>
        <button className={btnStyles}>
            <PiCaretLeftBold className={iconStyles} onClick={() => swiper.slidePrev()}/>
        </button>
        <button className={btnStyles}>
            <PiCaretRightBold className={iconStyles} onClick={() => swiper.slideNext()}/>
        </button>
    </div>
  )
}

export default WorkSliderBtns