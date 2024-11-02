import React from "react";
import Image from "next/image";
const BackgroundImage = () => {
  return (
    <>
      {/* BACKGROUND VIDEO CLIP */}
      <div className="flex
      max-w-7xl sm:max-w-7xl md:max-w-7xl
      lg:max-w-7xl xl:max-w-7xl xl2:max-w-7xl
      container lg:mx-auto">
        <div
            className="bg-cover bg-center bg-no-repeat
            container max-w-7xl sm:max-w-7xl md:max-w-7xl lg:max-w-7xl
            xl:max-w-7xl xl2:max-w-7xl
            w-full min-h-screen
            fixed -z-10"
            style={{ backgroundImage: "url('/images/bg-image.jpg')" }}
          >
      
      </div>
      </div>
        </>
  )}
  export default BackgroundImage;