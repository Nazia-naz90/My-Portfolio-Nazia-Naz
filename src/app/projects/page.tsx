"use client";
import ProjectCard from "../components/projectCard";

const ProjectsSection = () => {
  return (
    <div>

      <div className="flex items-center justify-center">
        <h1 className="text-white font-serif
        font-bold text-[7vmin] mt-24 ">My Projects</h1>
      </div>
      <div
        className="lg:flex lg:max-w-7xl mx-auto 
     justify-center items-center lg:gap-x-24 
     lg:p-10 min-h-screen container "
      >
    
        <div
          className="lg:mt-5 lg:max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 
          w-full justify-items-center"
        >
          <ProjectCard
            id={1}
            title="Mobile Accessories Website UI"
            description="Project 1 Using Pure HTML CSS "
            imgUrl="/images/mobile-website.jpg"
            vercelUrl="https://zs-mobile-accessories-website.vercel.app/"
            gitUrl="https://github.com/Nazia-naz90/zs-mobile-accessories-website.git"
          />
          <ProjectCard
            id={2}
            title="Online Fashion Shop Website UI"
            description="Project 2 Using HTMl Tailwind-CSS Next Js"
            imgUrl="/images/Online-fashion-shop.jpeg"
            vercelUrl="https://online-fashion-shop-website.vercel.app/"
            gitUrl="https://github.com/Nazia-naz90/online-fashion-shop-website.git"
          />
          <ProjectCard
            id={3}
            title="Figma tere website UI"
            description="Project 3 Using Pure HTML CSS"
            imgUrl="/images/figma-tere-website-UI.jpeg"
            vercelUrl="https://figma-tere-website-ui.vercel.app/"
            gitUrl="https://github.com/Nazia-naz90/figma-tere-website-ui.git"
          />
          <ProjectCard
            id={4}
            title="My Portfolio "
            description="Project 4 Using HTML Tailwind-css Next.Js"
            imgUrl="/images/My-portfolio.jpg"
            vercelUrl="https://my-portfolio-nazia-naz-igx6.vercel.app/"
            gitUrl="https://github.com/Nazia-naz90/My-Portfolio-Nazia-Naz.git"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
