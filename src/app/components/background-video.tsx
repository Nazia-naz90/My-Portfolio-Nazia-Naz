import React from "react";
import Image from "next/image";
const BackgroundVideo = () => {
  return (
    <div>
      {/* BACKGROUND VIDEO CLIP */}
      <div className="flex
      max-w-7xl sm:max-w-7xl md:max-w-7xl
      lg:max-w-7xl xl:max-w-7xl xl2:max-w-7xl
      container lg:mx-auto">
        <div
        className="flex  items-center justify-center  
        min-h-screen lg:container sm:container 
        md:container lg:mx-auto 
        fixed top-0 left-0 lg:w-[100vw] lg:h-[100vh] 
        overflow-hidden object-cover
        z-[-1] lg:max-w-7xl max-w-screen-lg "
      >
        <Image src={"/images/bg-image.jpg"}
        alt="bg-image"
        width={1000}
        height={1000}
        className="
        w-[500vw]
        sm:[500vw]
        lg:w-[500vw]
        xl:w-[500vw]
        xl2:w-[500vw]
        h-[100vh]
        sm:h-[100vh]
        md:h-[100vh]
        lg:h-[100vh]
        xl:h-[100vh]
        xl2:h-[100vh]
        min-h-screen
        max-w-screen-lg
        lg:max-w-7xl
        xl:max-w-7xl
        object-cover
        justify-items-center"></Image>
        
      </div>
      {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="
          absolute
           top-[0]
           left-[0]
           max-w-[500%]
           max-h-[500%]
           w-[auto]
           h-[auto]
           z-[-1]
           bg-cover
          overflow-hidden
          min-h-screen 
          min-w-screen
          container 
          mx-auto
          flex  
          items-center 
          justify-center"
        >
          <source src="/images/bg-video.mp4" type="video/mp4" />
        </video> */}
      </div>
    
    </div>
  );
};

export default BackgroundVideo;
