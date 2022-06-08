import React from "react";

const OffPoster=(props)=>{
        return(
            <>
                <div className="flex flex-col items-start gap-2  mb-5 px-1 cursor-pointer">
                <div className="h-40  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100  duration-300">
                    <img src={props.src} alt="Loading....." className="h-full w-full rounded-xl"/>
                </div>
                <div>
                        <h3 className="font-bold">
                            {props.tittle}
                        </h3>
                </div>
                <div>
                        <button className="bg-slate-900 text-white rounded-xl  py-1 px-3 hover:bg-rose-500">Register</button>
                </div>
                </div>
            </>
        );

}
export default OffPoster;