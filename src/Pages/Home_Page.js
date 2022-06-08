import React from "react";
import Background from "../components/Background";
import Herocarousal from "../components/HeroCarousal";
import Navbar from "../components/Navbar";
import OffEvents from "../components/Off_campus_Events";
import Events from "../components/Upcoming_Events";
import Footer from "../components/Footer";

const Home=()=>{
    return(
        <>
        <div>
            <Herocarousal/>
        </div>
        <div className="content">
           
            <Background />
        </div>
        <div className="mt-8">
        <div className="flex justify-center pb-14 md:hidden drop-shadow-2xl ">
        <div className="btn-group  " role="group" aria-label="Basic outlined example">
        <button type="button" className="btn btn-outline-primary text-slate-900 font-medium">UpComing</button>
        <button type="button" className="btn btn-outline-primary text-slate-900 font-medium">OnGoing</button>
        <button type="button" className="btn btn-outline-primary text-slate-900 font-medium">Completed</button>
        </div>
        </div>
        <div className="flex  hidden md:block text-center pb-14 ">
        <div className="btn-group drop-shadow-2xl  " role="group" aria-label="Basic outlined example">
        <button type="button" className="btn btn-outline-primary text-slate-900 font-medium">UpComing </button>
        <button type="button" className="btn btn-outline-primary text-slate-900 font-medium">OnGoing</button>
        <button type="button" className="btn btn-outline-primary text-slate-900 font-medium">Completed </button>
        </div>
        </div>
        
        <Events />
        <OffEvents/>
        </div>
        </>
    );
}
export default Home;