import Link from "next/link";
import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <section
        className=" 
            lg:flex flex-col justify-center items-center
             max-w-7xl lg:h-[20%] lg:p-20 p-16
            mx-auto mt-0  lg:space-x-10 lg:gap-y-10"
      >
        <div
          className="lg:flex flex-col items-center 
        justify-center m-auto"
        >
          <h1
            className="text-white lg:text-[7vmin]
           text-[20px] font-bold"
          >
            Join Us{" "}
          </h1>
          <h1
            className="text-white lg:text-[7vmin] 
            text-[20px] font-bold"
          >
            Lets Collaborate 
          </h1>
          <p
            className="text-white lg:text-[3vmin] 
           text-[17px] font-semibold"
          >
            Type your email down below 
          </p>
        </div>
        <div
          className="lg:flex items-center justify-center
           lg:w-[25%] lg:h-[20%] rounded-md"
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Add your email here"
            className="lg:w-[600px] lg:h-[35px] p-2 
            rounded-md"
          />
          <a href={"mailto:example@email.com"}>
          <button
            className="lg:flex text-center items-center justify-center
           bg-purple-800 text-white lg:text-[18px] lg:font-bold 
           lg:w-[100%] w-[100px] lg:h-[36px] h-[45px] lg:p-4 
           rounded-md"
          >
            send
          </button>
          </a>
          
        </div>
      </section>
      <footer
        className="lg:flex flex-col justify-between 
        max-w-7xl mx-auto mt-0 bg-purple-200 p-10 "
      >
        {/* footer-pannel-1 */}
        <div
          className="flex justify-center items-center 
          content-center 
          height-[50px] mt-5 bg-purple-950"
        >
          <Link href={"/"} className="text-white">
            back to top
          </Link>
        </div>
        {/* Footer Social Media Icons */}
        <div className="lg:flex items-center mt-10 lg:gap-x-10 
        lg:mx-auto">
 
              {/* social-media-icons */}
              <div className="flex justify-center 
              items-center gap-x-4 mt-10">
                <div className="border-2 
                            bg-white  
                            rounded-full h-[50px] w-[50px] p-2">
                  <a href={"https://www.facebook.com"}>
                  <Image
                    src={"/images/fb-icon2.png"}
                    alt="facebook"
                    width={40}
                    height={40}>
                    </Image>
                  </a> 
                </div>
                <div className="border-2 
                            bg-white
                            rounded-full h-[50px] w-[50px] p-2">
                  <a href={"https://www.instagram.com/nazianaz701/profilecard/?igsh=bzc2eTBjeDV0bXdj"}>
                  <Image 
                    src={"/images/insta-icon2.png"}
                    alt="instagram"
                    width={40}
                    height={40}
                    >
                    </Image>
                  </a>
                </div>
                <div className="border-2 
                             bg-white
                            rounded-full h-[50px] w-[50px] p-2">
                  <a href="https://twitter.com/fcmagpakistan">
                  <Image
                    src={"/images/twitter-icon2.png"}
                    alt="tweeter"
                    width={35}
                    height={35}>
                    </Image>
                  </a>
                
                </div>
                <div className="border-2 
                            bg-white 
                            rounded-full h-[50px] w-[50px] p-2">
                  <a href={"https://www.linkedin.com/in/nazia-naz-44ba27285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
                  <Image
                    src={"/images/linkedin-icon2.png"}
                    alt="linkedin"
                    width={35}
                    height={35}
                    >
                    </Image>
                  </a>
               
                </div>
              </div>
            </div>
                  
          {/* © 2024 shope, Inc. */}
    
        <section
          className="flex justify-center items-center 
          height-[50px] mt-10 mb-10">
          <div>
            <h6 className="text-gray-400">
              © 2024 <b>Nazia Shoukat</b> All rights reserved.</h6>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
