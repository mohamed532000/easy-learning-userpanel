import { useState , useEffect } from "react";
import headerImg from "../../../media/images/header-images/photo-1544776193-32d404ae608a.webp"
import PageHeader from "../../../components/page-header/PageHeader";
export  default function ContactPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(searchQuery)}&output=embed`;
    useEffect(() => window.scrollTo(0 , 0) , []);
    return (
        <>
            <PageHeader
            headerImg = {headerImg}
            headerLetters = {["C" , "o" , "n" , "t" , "a" , "c" , "t"]}
            headerDescription = {"Get in touch with us! Whether you have questions, feedback, or inquiries, we're here to help."}
            />
            <div className="contact-section relative w-full py-6 flex flex-col justify-center items-center">
                <div className="contact-container flex flex-col md:flex-row lg:flex-row justify-center items-center w-[90%] relative py-[40px]">
                    <div className="contact-text flex justify-center items-center md:justify-start md:items-start flex-col relative w-full md:w-[40%]">
                        <h2 className="mb-2 text-center md:text-left tracking-[5px] text-sky-500">TRANAMUTRITAM</h2>
                        <h2 className="my-5 text-center md:text-left font-bold text-4xl">keep in tuch</h2>
                        <p className="mb-2 text-center md:text-left text-slate-600">Contact Design for Cesis Creative</p>
                        <p className="mb-2 text-center md:text-left text-slate-600">Your dreams are our mission. Contact us today and lets embark on a journey towards success together</p>
                    </div>
                    <div className="form-side mt-[50px] md:mt-0 w-full md:w-[40%]">
                        <form onSubmit={(e)=>{
                            e.preventDefault()
                        }} className="relative w-full flex flex-col justify-center items-center md:justify-end md:items-end">
                            <div className="input-div relative mb-4 w-full md:w-[300px] h-[40px] border-b border-gray-500">
                                <input type="text" placeholder="Full Name" className=" indent-2 absolute w-full h-full top-0 left-0 bg-transparent outline-none placeholder:text-sm" />
                                <i className="fa-solid fa-user absolute top-[50%] translate-y-[-50%] right-2 text-lg text-gray-400 "></i>
                            </div>
                            <div className="input-div relative mb-4 w-full md:w-[300px] h-[40px] border-b border-gray-500">
                                <input type="email" placeholder="E-mail" className=" indent-2 absolute w-full h-full top-0 left-0 bg-transparent outline-none placeholder:text-sm" />
                                <i className="fa-solid fa-envelope absolute top-[50%] translate-y-[-50%] right-2 text-lg text-gray-400 "></i>
                            </div>
                            <div className="input-div relative mb-4 w-full md:w-[300px] h-[40px] border-b border-gray-500">
                                <input type="number" placeholder="Phone" className=" indent-2 absolute w-full h-full top-0 left-0 bg-transparent outline-none placeholder:text-sm" />
                                <i className="fa-solid fa-phone absolute top-[50%] translate-y-[-50%] right-2 text-lg text-gray-400 "></i>
                            </div>
                            <div className="input-div relative mb-4 w-full md:w-[300px] h-[40px] border-b border-gray-500">
                                <input type="text" placeholder="What are you looking for?" className=" indent-2 absolute w-full h-full top-0 left-0 bg-transparent outline-none placeholder:text-sm" />
                                <i className="fa-solid fa-building absolute top-[50%] translate-y-[-50%] right-2 text-lg text-gray-400 "></i>
                            </div>
                            <div className="input-div relative mb-4 w-full md:w-[300px] h-[40px] border-b border-gray-500">
                                <input type="text" placeholder="Whhat is your budget?" className=" indent-2 absolute w-full h-full top-0 left-0 bg-transparent outline-none placeholder:text-sm" />
                                <i className="fa-solid fa-money-bill-trend-up absolute top-[50%] translate-y-[-50%] right-2 text-lg text-gray-400"></i>
                            </div>
                            <button type="submit" className="rounded-[20px] mt-4 w-full] md:w-fit py-3 px-6 bg-slate-600 text-white text-sm">KEEP IN TOUCH</button>
                        </form>
                    </div>
                </div>
                <div className="boxes-container flex flex-wrap flex-col md:flex-row lg:flex-row md:justify-between md:items-ctart py-[40px] w-[90%] relative  border-t border-zinc-400">
                    <div className="box-div relative w-full md:w-[330px] flex flex-col mr-4 p-5">
                        <h2 className="text-3xl text-center md:text-left font-bold text-gray-700 mb-3">Talk to Us</h2>
                        <p className=" text-slate-500 text-center md:text-left">We love hearing from you. Do not hesitate to pick up the phone and give us a call. We are here to listen, assist, and guide you every step of the way.</p>
                    </div>
                    <div className="box-div relative w-full md:w-[330px] flex flex-col mr-4 p-5">
                        <h2 className="text-3xl text-center md:text-left font-bold text-gray-700 mb-3">Live Chat</h2>
                        <p className=" text-slate-500 text-center md:text-left">Need quick answers? Our live chat support is available to assist you in real-time. Just click the chat icon, and we will be at your service.</p>
                    </div>
                    <div className="box-div relative w-full md:w-[330px] flex flex-col mr-4 p-5">
                        <h2 className="text-3xl text-center md:text-left font-bold text-gray-700 mb-3">Lets Collaborate</h2>
                        <p className=" text-slate-500 text-center md:text-left"> We believe in the power of collaboration. Contact us today, and together, we will create something extraordinary.</p>
                    </div>
                </div>
                <div className="map-container w-[90%] relative mt-5 rounded-lg overflow-hidden">
                        <input
                            className="search-input w-[300px] absolute top-[20px] left-[50px] md:left-[50%] md:translate-x-[-50%] bg-slate-800 text-white indent-2 outline-none placeholder:text-sm p-2"
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                            placeholder="Search for a location"
                        />
                        <iframe className="map" title="Map" src={mapUrl} width="100%" height="400px" ></iframe>
                </div>
            </div>
        
        </>
    )
}