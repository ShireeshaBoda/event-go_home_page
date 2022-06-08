import React from "react";
import Slider from "react-slick";
import Settings from "./Event_card_settings";
import SettingsMD from "./Event_card_settings_MD";
import SettingSM from "./Event_card_settings_Sm";
import OffPoster from "./Poster_offcampus";
import {BiChevronsRight} from 'react-icons/bi'

const Off_Events=()=>{
    const images=[
        {
            src:"https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaG5vbG9naWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            tittle:"event1",
        },
        {
            src:"https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaG5vbG9naWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            tittle:"event2",
        },
        {
            src:"https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaG5vbG9naWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            tittle:"event3",
        },
        {
            src:"https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaG5vbG9naWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            tittle:"event4",
        },
        {
            src:"https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaG5vbG9naWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            tittle:"event5",
        },
        {
            src:"https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29uZmVyZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            tittle:"event5",
        },
        {
            src:"https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29uZmVyZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            tittle:"event5",
        },

    ]
    return(
        <>
        <div className="container flex justify-between px-20 mt-5 ">
        <div>
            <h1 className="text-slate-900 font-bold py-3  text-xl">Off Campus Events</h1>
        </div>
        <div className=" flex flex-row  items-center py-2 text-rose-500 cursor-pointer hover:font-semibold">
            <h5 className="">See More</h5>
            <div>
                <BiChevronsRight/>
            </div>
        </div>
        </div>
        
            <div className="container px-20">
           
            <div className="hidden lg:block">
                <Slider {...Settings}>
                    {images.map((image)=>
                    (
                        <OffPoster {...image}/>
                    ))}
                </Slider>
            </div>
            <div className="hidden md:block lg:hidden">
                <Slider {...SettingsMD}>
                    {images.map((image)=>
                    (
                        <OffPoster {...image}/>
                    ))}
                </Slider>
            </div>
            <div className="md:hidden">
                <Slider {...SettingSM}>
                    {images.map((image)=>
                    (
                        <OffPoster {...image}/>
                    ))}
                </Slider>
            </div>
            </div>
        </>
    );
};
export default Off_Events;