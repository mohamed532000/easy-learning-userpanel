import { useState , useEffect } from "react";

export  default function ContactPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };
    useEffect(()=>{
        let cLetter = document.querySelector(".contact-word .events-letter-c");
        let oLetter = document.querySelector(".contact-word .events-letter-o");
        let nLetter = document.querySelector(".contact-word .events-letter-n");
        let tLetter = document.querySelector(".contact-word .events-letter-t");
        let aLetter = document.querySelector(".contact-word .events-letter-a");
        let c2Letter = document.querySelector(".contact-word .events-letter-c-2");
        let t2Letter = document.querySelector(".contact-word .events-letter-t-2");
        let allLetters = document.querySelectorAll(".contact-word .letter")
        function handelScroll(){
            cLetter.style.transform = `translateY(${-window.scrollY}px)`;
            oLetter.style.transform = `translateY(${-window.scrollY-20}px)`;
            nLetter.style.transform = `translateY(${-window.scrollY}px)`;
            tLetter.style.transform = `translateY(${-window.scrollY-20}px)`;
            aLetter.style.transform = `translateY(${-window.scrollY-30}px)`;
            c2Letter.style.transform = `translateY(${-window.scrollY}px)`;
            t2Letter.style.transform = `translateY(${-window.scrollY}px)`;
            if(window.scrollY === 0) {
                allLetters.forEach(letter => {
                    letter.style.transform = `translateY(0)`;
                });
            }
        }
        window.addEventListener("scroll" , handelScroll)
        return ()=> window.addEventListener("scroll" , handelScroll)
    },[])
    const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(searchQuery)}&output=embed`;
    return (
        <>
            <div className={`header w-full bg-[url('https://images.unsplash.com/photo-1544776193-32d404ae608a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1929&q=80')] bg-no-repeat bg-cover bg-center after:absolute after:w-full after:h-full after:bg-black after:opacity-40 flex justify-center items-center h-[100vh]`}>
                    {/* <img loading="lazy"src="" alt="header-img" className="absolute top-0 left-0 w-full h-full"/> */}
                    <div className="header z-20 w-full md:w-[50%] lg:w-[50%] text flex flex-col justify-center items-center">
                        <h2 className="contact-word text-white text-center text-4xl md:text-7xl lg:text-7xl mb-5 tracking-[10px] md:tracking-[30px] lg:tracking-[30px]">
                            <span className="relative inline-block transition-all duration-500 ease-linear letter events-letter-c">C</span>
                            <span className="relative inline-block transition-all duration-500 ease-linear letter events-letter-o">O</span>
                            <span className="relative inline-block transition-all duration-500 ease-linear letter events-letter-n">N</span>
                            <span className="relative inline-block transition-all duration-500 ease-linear letter events-letter-t">T</span>
                            <span className="relative inline-block transition-all duration-500 ease-linear letter events-letter-a">A</span>
                            <span className="relative inline-block transition-all duration-500 ease-linear letter events-letter-c-2">C</span>
                            <span className="relative inline-block transition-all duration-500 ease-linear letter events-letter-t-2">T</span>
                        </h2>
                        <p className="my-3 leading-7 text-white text-center">We love hearing from you. Do not hesitate to pick up the phone and give us a call. We are here to listen, assist, and guide you every step of the way , Follow us on social media to stay updated on the latest news, trends, and insights. We love staying connected with our valued clients.</p>
                    </div>
            </div>
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