import Navbar from "../components/navbar"
import Image from "next/image";
import BackgroundVideo from "../components/background-video"
import { Main } from "next/document";

const ContactUs = () => {
    return(
        <>
<div >
    <Navbar/>
    <BackgroundVideo/>
    <div >
    <h2 className="  flex items-center justify-center text-[7vmin]
    text-center text-white 
    p-[30px]
    font-serif">Contact Us </h2>
    <div className="max-w-[62%]
    my-[25px] mx-[auto]">
    <input className="w-[100%]
    text-[19px] text-purple-900
    border-2 border-gray-500
    bg-purple-300
    rounded-md
    my-[14px] mx-[0]
    py-[5px] px-[3px]" 
    type="text" name="" id="name" placeholder="Enter your name"/>
    <input className="w-[100%]
    text-[19px] text-purple-900
    border-2 border-gray-500
    bg-purple-300
    rounded-md
    my-[14px] mx-[0]
    py-[5px] px-[3px]" 
    type="text" name="" id="phone" placeholder="Enter your phone#"/>
    <input className="w-[100%]
    text-[19px] text-purple-900
    border-2 border-gray-500
    bg-purple-300
    rounded-md
    my-[14px] mx-[0]
    py-[5px] px-[3px]" 
    type="email" name="" id="email" placeholder="Enter your email" />
    <textarea className="w-[100%]
    text-[19px] text-purple-900
    border-2 border-gray-500
    bg-purple-300
    rounded-md
    my-[14px] mx-[0]
    py-[5px] px-[3px]" 
    name="text" id="text" cols={30} rows={10}>
    Elaborate your concern
    </textarea>
    <button className="text-black
    border-2 border-gray-400
    bg-purple-300
    text-[16px]
    mb-10
    ">Submit</button>
    </div>
</div>
</div>
        </>
                
            )
}

export default ContactUs