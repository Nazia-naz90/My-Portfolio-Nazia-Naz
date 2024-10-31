"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <>
      <main
        className="flex flex-col items-center justify-center max-w-7xl 
        min-h-screen container mx-auto"
      >
        {/* HERO PAGE START */}
        <div
          className="lg:flex lg:items-center lg:justify-center max-w-7xl mx-auto 
          space-x-4 lg:mt-20 mt-24"
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
          className="lg:flex  justify-center items-center
        lg:w-[100vw] w-[100%] lg:h-[100vh] h-[100%] mx-auto 
        lg:m-auto  lg:px-40 lg:mt-10 mt-24
        "
        >
          {/*My Image*/}
          <div className="lg:flex items-center justify-center ">
            {/* BUTTON COLUMN 1 */}
            <div
              className="flex flex-col justify-center items-center
            space-y-20"
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
            className="flex items-center justify-center
           lg:mt-10 lg:mb-10 ml-20 mt-5 mb-5
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
              className="flex flex-col justify-center items-center
            space-y-20"
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
