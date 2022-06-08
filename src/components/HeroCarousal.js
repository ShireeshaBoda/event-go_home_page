import React from 'react'
import Slider from "react-slick";


const Herocarousal=()=>{
        const Settings={
             arrows:true,
            autoplay: true,
            centerMode: true,
            centerPadding: "50px",
            sliderToShow: 1,
            infinite: true,
            sliderToScroll:1,
            speed: 500,
        };
        const SettingsMd={
            arrows: true,
            autoplay: true,
            centerMode: true,
            centerPadding: "60px",
            sliderToShow: 1,
            infinite: true,
            sliderToScroll:1,
            speed: 500,
        };
        const SettingSm={
            arrows: true,
            autoplay: true,
            centerMode: true,
            centerPadding: "30px",
            sliderToShow: 1,
            infinite: true,
            sliderToScroll:1,
            speed: 500,
        };
        const images=["https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnQlMjBtYW5hZ2VtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHVibGljJTIwc3BlYWtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1510511233900-1982d92bd835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
"https://images.unsplash.com/photo-1518890569493-668df9a00266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"]
        return(
            <>
            <div className='hidden lg:block'>
            <Slider {...Settings}>
            {images.map((image)=>(
                <div className='w-full h-80 pr-1 pt-1 '>
                    <img src={image} alt="loading..." className='w-full h-full'/>
                </div>
            ))}
            </Slider>

            </div>
            <div className='hidden md:block lg:hidden'>
            <Slider {...SettingsMd}>
            {images.map((image)=>(
                <div className='w-full h-60 pr-1 '>
                    <img src={image} alt="loading..." className='w-full h-full'/>
                </div>
            ))}
            </Slider>

            </div>

            <div className='md:hidden'>
            <Slider {...SettingSm}>
            {images.map((image)=>(
                <div className='w-full h-48 pr-1 '>
                    <img src={image} alt="loading..." className='w-full h-full'/>
                </div>
            ))}
            </Slider>
            </div>
            </>
        );
        
}
export default Herocarousal;