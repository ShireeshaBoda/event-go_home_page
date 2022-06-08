import React from 'react'
import E_logo from "../images/E_logo2.png"
import G_logo from "../images/G_logo3.png"

const NavbarLg=()=>{
     return (
         <>
            <div className='flex justify-between h-18 w-full px-4 bg-slate-900'>
                <div className='flex items-center gap- '>
                    <div className='h-12 w-12'>
                        <img src= {E_logo} alt="Loading..." className='w-full h-full ' />
                    </div>
                    <h1 className='text-2xl relative right-4 font-black text-orange-400 '>VentS</h1>
                    <div className='h-12 w-14 relative right-7 bottom-'>
                        <img src= {G_logo} alt="Loading..." className='w-full h-full ' />
                    </div>
                    <h1 className='text-3xl relative right-11 text-green-400 font-bold'>O</h1>
                </div>
                <div className='flex gap-3 text-white py-[30px] ' >
                <a href='/'><button className='bg-gray-800 px-3  rounded-lg hover:bg-slate-700 '>Home</button></a>
                 <a href='./login' ><button className='bg-gray-800 px-3  rounded-lg hover:bg-slate-700'>Login/Regester</button></a>
                </div>
            </div>
         </>
     );
 }
 const NavbarMd=()=>{
    return (
        <>
           <div className='flex justify-between h-20 w-full px-4 bg-slate-900'>
               <div className='flex items-center gap- '>
                   <div className='h-11 w-11'>
                       <img src= {E_logo} alt="Loading..." className='w-full h-full ' />
                   </div>
                   <h1 className='text-2xl relative right-4 font-black text-orange-400 '>VentS</h1>
                   <div className='h-11 w-11 relative right-6 bottom-'>
                       <img src= {G_logo} alt="Loading..." className='w-full h-full ' />
                   </div>
                   <h1 className='text-3xl relative right-9 text-green-400 font-bold'>O</h1>
               </div>
               <div className='flex gap-3 text-white py-[25px] ' >
                   <button className='bg-gray-800 px-3 py- rounded-lg hover:bg-slate-700 '>Home</button>
                   <button className='bg-gray-800 px-3  rounded-lg hover:bg-slate-700'>Login/Regester</button>
               </div>
           </div>
        </>
    );
}
const NavbarSm=()=>{
    return (
        <>
           <div className='flex justify-between h-18 w-full px-3 bg-slate-900'>
               <div className='flex items-center gap- '>
                   <div className='h-8 w-8'>
                       <img src= {E_logo} alt="Loading..." className='w-full h-full ' />
                   </div>
                   <h1 className='text-1xl relative right-3 font-black text-orange-400 '>VentS</h1>
                   <div className='h-8 w-8 relative right-5 bottom-'>
                       <img src= {G_logo} alt="Loading..." className='w-full h-full ' />
                   </div>
                   <h1 className='text-2xl relative right-7 text-green-400 font-bold'>O</h1>
               </div>
               <div className='flex gap-3 text-white py-[24px] ' >
                   <button className='bg-gray-800 px-2  rounded-lg hover:bg-slate-700 '>Home</button>
                   <button className='bg-gray-800 px-2  rounded-lg hover:bg-slate-700'>Login</button>
               </div>
           </div>
        </>
    );
}
const Navbar=()=>{
    return(
        <>
        <div className='hidden lg:flex'>
            <NavbarLg />
        </div>
        <div className='hidden md:flex lg:hidden'>
            <NavbarMd />
        </div>
        <div className='md:hidden'>
            <NavbarSm />
        </div>
        </>
    );
}
 export default Navbar;