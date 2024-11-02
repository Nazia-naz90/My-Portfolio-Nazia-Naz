"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <>
      <main
        className="flex flex-col items-center lg:items-center justify-center  lg:justify-center max-w-7xl sm:max-w-7xl md:max-w-7xl lg:max-w-7xl xl:max-w-full 2xl:max-w-full
        container mx-auto sm:mx-auto md:mx-full lg:mx-auto xl:mx-auto 2xl:mx-auto"
      >
        {/* HERO PAGE START */}
        <div
          className="flex lg:flex items-center lg:items-center justify-center lg:justify-center 
          max-w-7xl sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full mx-auto lg:mx-auto xl:mx-auto 
          space-x-4 lg:mt-20 mt-24 container"
        >
          <h1
            className="  text-white lg:text-[7vmin] 
            font-bold text-center"
          >
            <span className="text-transparent bg-clip-text 
            bg-gradient-to-r from-purple-400 to-pink-600">
              Hello! I Am{" "}
            </span>
            <TypeAnimation
              sequence={[
                "Nazia Shoukat",
                1000,
                "Web developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontsize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          
        </div>
        <div>
          <p className=" text-white  text-center px-10">
            A Front End Developer | Web Designer
          </p>
          <div
            className="flex  space-x-4  mt-10 items-center 
          justify-center lg:mx-auto ml-10 mr-10 "
          >
            <button
              className="bg-transparent text-transparent bg-clip-text
              bg-gradient-to-r from-purple-400 to-pink-600
              lg:text-[17px] 
              lg:w-[150px]
              w-[100px]
              lg:h-[45px]
              h-[45px]
              text-center
              p-[2px] 
              rounded-3xl border-2
              border-purple-400 
               font-bold"
            >
              Resume
            </button>
            <button
              className="
              bg-gradient-to-r from-purple-400 to-pink-600
              lg:text-[17px] 
              lg:w-[150px]
              w-[100px]
              lg:h-[45px]
              h-[45px]
              text-center
              p-[2px] 
              rounded-3xl
              text-purple-90
              font-extrabold"
            >
              Hire Me
            </button>
          </div>
        </div>

        {/* SECOND SESSION */}

        <div
          className="flex sm:flex md:flex lg:flex xl:flex
           justify-center sm:justify-center lg:justify-center 
           xl:justify-center items-center sm:items-center md:items-center
           lg:items-center xl:items-center 
           max-w-7xl sm:max-w-7xl md:max-w-7xl lg:max-w-7xl xl:max-w-7xl
           w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]
           h-[100%] sm:h-[100%] md:h-[100%] lg:h-[100%] xl:h-[100%]
           mx-auto sm:mx-auto md:mx-auto lg:mx-auto
           xl:mx-auto 
           m-auto sm:m-auto md:m-auto lg:m-auto xl:m-auto lg:px-40 lg:mt-10 mt-24 container
           "
        >
          {/*My Image*/}
          <div className="lg:flex items-center justify-center ">
            {/* BUTTON COLUMN 1 */}
            <div
              className="flex flex-col justify-center items-center space-y-20 container"
            >
              {/* HTML BUTTON */}
              <button
                className="flex  w-[150px] 
              h-[45px] rounded-3xl
             text-black font-bold
              bg-gradient-to-r from-purple-400 to-pink-600
              items-center justify-center space-x-5
              p-[2px] lg:ml-10 "
              >
                <Image
                  src={"/images/html-removebg-2.png"}
                  alt="icon"
                  width={40}
                  height={40}
                  className="w-[40px]
                h-[40px]
                rounded-full"
                ></Image>
                <p>HTML</p>
              </button>
              {/* figma BUTTON */}
              <button
                className="flex  w-[150px] 
              h-[45px]  rounded-3xl
            text-black font-bold
            bg-gradient-to-r from-purple-400 to-pink-600
              items-center justify-center space-x-5
              p-[2px] lg:mr-20"
              >
                <Image
                  src={"/images/figma4.png"}
                  alt="icon"
                  width={40}
                  height={40}
                  className="w-[60px]
                h-[45px]
                rounded-full"
                ></Image>
                <p>Figma</p>
              </button>
              {/* JAVSCRIPT BUTTON */}
              <button
                className="flex  w-[150px] 
              h-[45px] rounded-3xl
            text-black font-bold text-[16px]
             bg-gradient-to-r from-purple-400 to-pink-600
              items-center justify-center space-x-4
              p-[2px] lg:ml-10"
              >
                <Image
                  src={"/images/js-icon.png"}
                  alt="icon"
                  width={40}
                  height={40}
                  className="w-[40px]
                h-[40px]
                rounded-full
                ml-2"
                ></Image>
                <p>JavaScript</p>
              </button>
            </div>

            {/* CENTER IMAGE 2 */}

            <div
            className="flex 
            items-center sm:items-center md:items-center lg:items-center
            xl:items-center justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-center
            lg:mt-10 mt-5 lg:mb-10 mb-5 lg:ml-20 mx-auto
            h-[60vh] w-[50vw] container"
            >
              <Image
                src={"/images/hero-image.png"}
                width={1000}
                height={400}
                alt="logo"
                className="lg:w-[100%] w-[180px]
             lg:h-[100%] h-[100%]
            rounded-full"
              ></Image>
            </div>

            {/* BUTTON COLUMN 3*/}
            <div
              className="flex flex-col justify-center items-center space-y-20 container"
            >
              {/* NEXT JS BUTTON */}
              <button
                className="flex  w-[150px] 
              h-[45px] rounded-3xl
               text-black font-bold
               bg-gradient-to-r from-purple-400 to-pink-600
               items-center justify-center space-x-5
               p-[2px] lg:mr-10"
              >
                <Image
                  src={"/images/next-js-icon.png"}
                  alt="icon"
                  width={40}
                  height={40}
                  className="w-[40px]
                h-[40px]
                rounded-full"
                ></Image>
                <p>Next Js</p>
              </button>
              {/*Tailwind CSS BUTTON */}
              <button
                className="flex  w-[150px] 
              h-[45px] rounded-3xl
             text-black font-bold
              bg-gradient-to-r from-purple-400 to-pink-600
              items-center justify-center 
              p-[2px] lg:ml-20"
              >
                <Image
                  src={"/images/tailwind-css-removebg.png"}
                  alt="icon"
                  width={40}
                  height={40}
                  className="w-[40px]
                h-[40px]
                rounded-full
                ml-4"
                ></Image>
                <p>Tailwind Css</p>
              </button>
              {/* REACT BUTTON */}
              <button
                className="flex  w-[150px] 
              h-[45px] rounded-3xl
              text-black font-bold
              bg-gradient-to-r from-purple-400 to-pink-600
              items-center justify-center space-x-5
              p-[2px] lg:mr-10"
              >
                <Image
                  src={"/images/React-icon.png"}
                  alt="icon"
                  width={40}
                  height={40}
                  className="w-[40px]
                h-[40px]
                rounded-full"
                ></Image>
                <p>React Js</p>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Hero;
