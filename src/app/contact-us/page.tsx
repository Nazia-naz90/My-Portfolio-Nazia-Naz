import Image from "next/image";

const ContactUs = () => {
  return (
    <>
      <div>
     <div
      className="
      max-w-7xl sm:max-w-7xl md:max-w-7xl lg:max-w-7xl xl:max-w-7xl
      mx-auto sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto
      my-auto sm:my-auto md:my-auto lg:my-auto xl:my-auto
      container 
             ">
          <h2
            className="  flex items-center justify-center 
    text-[7vmin] sm:text-[3vmin] md:text-[4vmin] lg:text-[6vmin] xl:text-[7xl]
    text-center sm:text-center md:text-center lg:text-center xl:text-center
     text-white container
    p-[30px] lg:mt-10 mt-20
    font-serif"
          >
            Contact Us{" "}
          </h2>

          <div
            className="max-w-[62%]
    my-[25px] mx-[auto]"
          >
            <input
              className="w-[100%]
    text-[19px] text-purple-900
    border-2 border-gray-500
    bg-purple-300
    rounded-md
    my-[14px] mx-[0]
    py-[5px] px-[3px]"
              type="text"
              name=""
              id="name"
              placeholder="Enter your name"
            />
            <input
              className="w-[100%]
    text-[19px] text-purple-900
    border-2 border-gray-500
    bg-purple-300
    rounded-md
    my-[14px] mx-[0]
    py-[5px] px-[3px]"
              type="text"
              name=""
              id="phone"
              placeholder="Enter your phone#"
            />
            <input
              className="w-[100%]
    text-[19px] text-purple-900
    border-2 border-gray-500
    bg-purple-300
    rounded-md
    my-[14px] mx-[0]
    py-[5px] px-[3px]"
              type="email"
              name=""
              id="email"
              placeholder="Enter your email"
            />
            <textarea
              className="w-[100%]
    text-[19px] text-purple-900
    border-2 border-gray-500
    bg-purple-300
    rounded-md
    my-[14px] mx-[0]
    py-[5px] px-[3px]"
              name="text"
              id="text"
              cols={30}
              rows={10}
            >
              Elaborate your concern
            </textarea>
            <button
              className="text-black
    border-2 border-gray-400
    bg-purple-300
    text-[16px]
    mb-10
    "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
