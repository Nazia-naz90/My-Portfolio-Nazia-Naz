import React from "react";
import Image from "next/image";
const BackgroundVideo = () => {
  return (
    <div>
      {/* BACKGROUND VIDEO CLIP */}

      <div
        className="fixed top-0 left-0 w-[100%] h-[100%] 
        overflow-hidden
        z-[-1] max-w-7xl 
         
      "
      >
        <video
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
        </video>
      </div>
    </div>
  );
};

export default BackgroundVideo;
