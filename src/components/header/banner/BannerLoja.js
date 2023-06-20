import { useState } from 'react';
import banner1 from './carousel/Banner 1 - DesktopbannerLoja.png'
import celular from './carousel/Imageimgcelular.png'




const Banner = () => {


    return(
        <div>
            <img src={banner1} className="lg:h-[415px] sm:hidden md:flex"/>
            <img src={celular} className="sm:h-[415px] sm:w-[400px] md:hidden"/>

        </div>
    );
}

export default Banner;
