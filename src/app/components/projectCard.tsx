// components/projectCard.jsx
import React from 'react';
import Image from 'next/image';
import { h1 } from 'framer-motion/client';


const ProjectCard = ({ id, title, description, imgUrl ,vercelUrl,gitUrl}:any) => {
    return (
        <>

        <div className="project-card  shadow-md rounded-lg p-4 m-10 space-y-2  py-16 bg-gradient-to-r from-purple-400 to-pink-600">
            <Image src={imgUrl} alt={title} width={500} height={300} className="rounded-lg w-[500px] h-[300px]" />
            <p><a href={vercelUrl} className='flex text-[3vmin] text-purple-700
            font-bold gap-x-2'>
            <Image src={"/images/vercel-icon.png"}
            alt='icon'
            width={30}
            height={30}
            className='w-[20px]
            h-[20px]'></Image> 
              Vercel Url</a>
            </p>
            <p> 
            <a href={gitUrl} className='flex text-[3vmin] text-purple-700
            font-bold'><Image src={"/images/github_icon.png"}
            alt='icon'
            width={30}
            height={30}
            className='w-[25px]
            h-[25px]'></Image> Git Url</a>
            </p>
            <h3 className="text-xl font-bold mt-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
        </>
        
    );
};

export default ProjectCard;

