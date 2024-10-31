"use client";

import navItem from "../constant";
import Link from "next/link";
import Image from "next/image";
import useToggle from "../hooks/hooks";

export default function Navbar() {
  
  const  {toggle, handleMenuClick } = useToggle();
  
  return (
    <header className="lg:h-[75px] h-[64px] bg-black drop-shadow-[0_0px_3px_rgba(117,195,16,0.5)] lg:max-w-7xl  lg:mx-auto lg:relative 
      container  fixed">
      <div className="flex items-center justify-evenly gap-20 h-full px-4 sm:px-6 md:px-8 lg:mx-auto xl:px-4 max-w-7x1">
        <div className="lg:flex sm:flex-row gap-2 ">
          <Image
            src={"/images/Logo.png"}
            alt="logo-icon"
            width={35}
            height={25}
            className="w-[35px] h-[25px]">
            </Image>
        </div>

        <nav className="lg:h-[44.54px] ">
          <ul
            className="hidden lg:flex h-full w-full items-center 
          justify-between gap-x-[100px] text-white 
          text-[17px] font-medium">
            {navItem.map((item, id) => (
              <Link href={item.link} 
              key={id}
          className="transition transform hover:-translate-y-1 
          motion-reduce:transition-none 
          motion-reduce:hover:transform-none">
                <li key={id}>{item.title}</li>
              </Link>
              
            ))}
            
          </ul>
        </nav>

        {/* HAMBURGER BUTTON FOR MOBILE */}
        <div className="lg:hidden">
          <div className="flex flex-col justify-between ml-[3vmin] 
           mx-4 gap-y-1  " onClick = {handleMenuClick}>
            <div className="w-[25px] bg-white 
            h-[4px] mt-5px mb-5px ml-3px mr-3px"></div>
            <div className="w-[25px] bg-white
            h-[4px] mt-5px mb-5px ml-3px mr-3px"></div>
            <div className="w-[25px] bg-white 
            h-[4px] mt-5px mb-5px ml-3px mr-3px"></div>
          </div>
          {/* media query on navbar */}
          {toggle && (
            <div className="absolute right-0 w-36 h-[65vh] 
            bg-gradient-to-r from-purple-400 to-pink-600
            mt-5 p-4 rounded-md ">
            <div className="flex flex-col justify-center items-center">
            <nav className="h-[44.54px]">
          <ul
          className=" flex flex-col h-full w-full items-center 
         justify-between space-y-10  
         text-purple-950
         text-[20px] font-medium"
        >
        {navItem.map((item, id) => (
        <Link href={item.link}
        key={id}
        className="transition transform hover:-translate-y-1 
        motion-reduce:transition-none 
        motion-reduce:hover:transform-none"
        >
        <li key={id}>{item.title}</li>
        </Link>
        ))}
        </ul>
        </nav>        
        </div>
        </div>
          )}
          {/* toggle-end */}
        </div>
      </div>
    </header>
  );
}
