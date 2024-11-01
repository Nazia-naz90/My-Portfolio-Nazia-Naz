"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./tabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Tailwind CSS</li>
        <li>React</li>
        <li>Next.Js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Graduation B.A </li>
        <li>Karachi University Pakistan</li>
        <li>Front End Development</li>
        <li>Techforce Pakistan</li>
      </ul>
    ),
  },
  
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section  id="about">
      <div className="text-white 
     lg:max-w-7xl container lg:mx-auto" >
      <div className="lg:flex  gap-8 items-center justify-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" 
        alt="Image"
        width={500} 
        height={500} 
        className="rounded-xl"/>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold 
          text-transparent bg-clip-text text-[10vmin]
          bg-gradient-to-r from-purple-400 to-pink-600">About Me</h2>
          <p className="text-base lg:text-lg mt-10">
            I am a Front End developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Html, CSS, Tailwind CSS,Node.js
            and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set.
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
     </div>
      
    </section>
  );
};

export default AboutSection;
