import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import BackgroundVideo from "../components/background-video";
const About = () => {
  return (
    <>
      <div>
        <Navbar />
        <BackgroundVideo />
        <div
          className="lg:flex lg:max-w-7xl mx-auto 
     justify-center items-center lg:gap-x-24 
     lg:p-10 min-h-screen 
     container "
        >
          <div
            className="flex flex-col items-center justify-center lg:mt-0
    lg:w-[500px] w-[300px] h-[300px] container lg:ml-0 sm:ml-10 md:ml-52 mx-auto
    px-5"
          >
            <h1
              className="text-transparent bg-clip-text
            bg-gradient-to-r from-purple-400 to-pink-600
            text-[10vmin] lg:font-extrabold font-bold font-serif 
            lg:mt-0 mt-40"
            >
              About Me
            </h1>
            <p
              className="lg:text-[20px] text-white
          text-center lg:px-10 sm:px-5 md:px-0 lg:mt-0 sm:mt-5
          lg:leading-10 lg:font-bold mx-auto
          font-serif lg:tracking-widest"
            >
              I &apos; m a Front-End Developer with a passion for creating
              visually stunning and highly interactive web applications. My
              journey into the world of web development started with a curiosity
              for how websites work and has evolved into a deep love for coding
              and design.
            </p>
          </div>

          <div className="lg:w-[500px] lg:h-[full] w-[250px] h-[300px] lg:mb-32 lg:mt-0 mt-24 lg:mx-0 mx-auto">
            <Image
              src={"/images/about-image.png"}
              alt="image"
              width={500}
              height={500}
              className=" sm:w-[250px] sm:h-[full]
          lg:w-[450px]
          lg:h-[full]
          rounded-xl shadow-2xl"
            ></Image>
          </div>
        </div>
        {/* SKILLS & EXPERTIES */}
        <div
          className="flex flex-col  items-center
      gap-y-10 mt-0  mx-auto container min-h-screen
      max-w-7xl"
        >
          <h1
            className="text-transparent bg-clip-text
            bg-gradient-to-r from-purple-400 to-pink-600 
            text-[10vmin] text-center lg:mt-0 "
          >
            Skills and Experties{" "}
          </h1>
          {/* SKILL NO:01 */}
          <div
          className="flex flex-col items-center
          lg:border-4 border-2 border-purple-400 lg:w-[60%]
          w-[230px] lg:p-10  rounded-xl lg:h-[50%] h-[300px]
          lg:ml-40 p-5 container"
          >
            <h2
            className="text-transparent bg-clip-text
            bg-gradient-to-r from-purple-400 to-pink-600 
            lg:text-[7vmin] text-center container mx-auto"
            >
              HTML & CSS
            </h2>
            <p
              className="text-white  lg:text-[20] lg:px-10 lg:font-bold
          lg:leading-10 lg:tracking-widest mt-5"
            >
              The building blocks of the web. I love crafting clean, semantic
              HTML and beautiful, responsive CSS. These tools allow me to create
              websites that are both functional and aesthetically pleasing.
            </p>
          </div>

          {/* SKILL N0: 02 */}
          <div
          className="flex flex-col items-center
          lg:border-4 border-2 border-purple-400 lg:w-[60%]
          w-[230px] lg:p-10  rounded-xl lg:h-[50%] h-[430px]
          lg:ml-40 p-5 container mx-auto"
          >
          <h2
          className="text-transparent bg-clip-text
          bg-gradient-to-r from-purple-400 to-pink-600 
          lg:text-[7vmin] text-center"
          >
              Javascript & TypeScript
            </h2>
            <p className="text-white  lg:text-[20] lg:px-10 lg:font-bold lg:leading-10 lg:tracking-widest mt-5">
              JavaScript is my playground. Whether it &apos; s adding dynamic
              features to a web page or building complex applications, I enjoy
              the power and flexibility JavaScript offers. TypeScript brings
              type safety and scalability to my projects, making development
              smoother and more efficient.
            </p>
          </div>

          {/* SKILL N0: 03 */}
          <div
            className="flex flex-col items-center
          lg:border-4 border-2 border-purple-400 lg:w-[60%] w-[230px] lg:p-10  rounded-xl lg:h-[50%] h-[350px] lg:mr-40 p-5 container mx-auto"
          >
            <h2
              className="text-transparent bg-clip-text
            bg-gradient-to-r from-purple-400 to-pink-600 
            lg:text-[7vmin] text-center container mx-auto"
            >
              Next.Js
            </h2>
            <p
              className="text-white  lg:text-[20] lg:px-10 
          p-3 lg:font-bold
          lg:leading-10 lg:tracking-widest "
            >
              This framework has revolutionized how I build React applications.
              Its server-side rendering and static site generation capabilities
              enable me to create fast, SEO-friendly web apps.
            </p>
          </div>

          {/* SKILL N0: 04 */}
          <div
            className="flex flex-col items-center
          lg:border-4 border-2 border-purple-400 lg:w-[60%]
           w-[230px] lg:p-10  rounded-xl lg:h-[50%] h-[300px] lg:ml-40 p-5 container mx-auto"
          >
            <h2
              className="text-transparent bg-clip-text
            bg-gradient-to-r from-purple-400 to-pink-600 
            lg:text-[10vmin] text-center container mx-auto"
            >
              Tailwind CSS
            </h2>
            <p
              className="text-white  lg:text-[20] lgLpx-10 
          p-2 lg:font-bold
          lg:leading-10 lg:tracking-widest mt-5"
            >
              Utility-first CSS has never been so fun! Tailwind allows me to
              design directly in my markup, speeding up development and ensuring
              consistency across my projects.
            </p>
          </div>

          {/* SKILL N0: 05 */}
          <div
            className="flex flex-col items-center
          lg:border-4 border-2 border-purple-700 lg:w-[60%]
          w-[230px] lg:p-10  rounded-xl lg:h-[50%] h-[300px] lg:mr-40 p-5 container mx-auto"
          >
            <h2
              className="text-transparent bg-clip-text
          bg-gradient-to-r from-purple-400 to-pink-600
          lg:text-[7vmin] text-center container mx-auto"
            >
              GITHUB
            </h2>
            <p
              className="text-white  lg:text-[20] lg:px-10 lg:font-bold
          lg:leading-10 lg:tracking-widest mt-3"
            >
              Version control and collaboration are crucial in any development
              workflow. I use GitHub to manage my code, collaborate with other
              developers, and contribute to open-source projects.
            </p>
          </div>

          {/* SKILL N0: 06 */}
          <div
            className="flex flex-col items-center
          lg:border-4 border-2 border-purple-400 lg:w-[60%]
           w-[230px] lg:p-10  rounded-xl lg:h-[50%] h-[300px] lg:ml-40 p-5 container mx-auto"
          >
            <h2
              className="text-transparent bg-clip-text
            bg-gradient-to-r from-purple-400 to-pink-600 
            lg:text-[7vmin] text-center container mx-auto"
            >
              Deployment
            </h2>
            <p
              className="text-white  lg:text-[20] lg:px-10 lg:font-bold
          lg:leading-10 lg:tracking-widest mt-5"
            >
              Getting projects live is an essential part of development. I
              &apos; m skilled in deploying applications to various platforms,
              ensuring they run smoothly and efficiently in production.
            </p>
          </div>

          {/* SKILL N0: 07 */}
          <div
          className="flex flex-col 
          items-center           
          justify-center
          lg:border-4 border-2
          border-purple-400 
          lg:w-[60%]
          w-[230px] lg:p-10 
          p-5 rounded-xl 
          lg:h-[50%] h-[100%] 
          container
          mx-auto"
          >
            <h2
              className="text-transparent bg-clip-text
            bg-gradient-to-r from-purple-400 to-pink-600 
            lg:text-[7vmin] container mx-auto text-center"
            >
              My Philosophy
            </h2>
            <p
              className="text-white  lg:text-[20] lg:px-10 lg:font-bold
              lg:leading-10 lg:tracking-widest"
            >
              I believe in the power of the web to connect people, share
              knowledge, and create experiences. Every project I work on is a
              new opportunity to push the boundaries of what &apos; s possible
              and to create something that users will love. I strive to write
              clean, maintainable code and design interfaces that are intuitive
              and delightful to use. When I &apos; m not coding, you &apos; ll
              find me exploring the latest tech trends, contributing to
              open-source projects.
            </p>
          </div>
          {/* EDUCATION */}
        </div>
      </div>
    </>
  );
};

export default About;
