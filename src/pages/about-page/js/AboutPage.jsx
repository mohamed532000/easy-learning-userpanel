import { useEffect } from "react";
import { Link } from "react-router-dom";
import GoBtn from "../../../components/go-btn/js/GoBtn";
export default function AboutPage() {
    useEffect(()=>{
        let aLetter = document.querySelector(".event-word .events-letter-a");
        let bLetter = document.querySelector(".event-word .events-letter-b");
        let oLetter = document.querySelector(".event-word .events-letter-o");
        let uLetter = document.querySelector(".event-word .events-letter-u");
        let tLetter = document.querySelector(".event-word .events-letter-t");
        function handelScroll(){
            aLetter.style.transform = `translateY(${-window.scrollY}px)`;
            bLetter.style.transform = `translateY(${-window.scrollY-20}px)`;
            oLetter.style.transform = `translateY(${-window.scrollY}px)`;
            uLetter.style.transform = `translateY(${-window.scrollY-20}px)`;
            tLetter.style.transform = `translateY(${-window.scrollY-30}px)`;
            if(window.scrollY === 0) {
                aLetter.style.transform = `translateY(0)`;
                bLetter.style.transform = `translateY(0)`;
                oLetter.style.transform = `translateY(0)`;
                uLetter.style.transform = `translateY(0)`;
                tLetter.style.transform = `translateY(0)`;
            }
        }
        window.addEventListener("scroll" , handelScroll);
        return ()=> window.addEventListener("scroll" , handelScroll);
    },[])
    return(
        <>
            <div className="header w-full bg-[url('https://images.unsplash.com/photo-1551822620-ac3afd8acd1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-no-repeat bg-cover bg-center after:absolute after:w-full after:h-full after:bg-black after:opacity-40 flex justify-center items-center h-[100vh]">
                <div className="header z-20 w-full md:w-[50%] lg:w-[50%] text flex flex-col justify-center items-center">
                    <h2 className="event-word text-white text-center text-4xl md:text-7xl lg:text-7xl mb-5 tracking-[10px] md:tracking-[30px] lg:tracking-[30px]">
                        <span className="relative inline-block transition-all duration-500 ease-linear font-bold events-letter-a">A</span>
                        <span className="relative inline-block transition-all duration-500 ease-linear font-bold events-letter-b">b</span>
                        <span className="relative inline-block transition-all duration-500 ease-linear font-bold events-letter-o">o</span>
                        <span className="relative inline-block transition-all duration-500 ease-linear font-bold events-letter-u">u</span>
                        <span className="relative inline-block transition-all duration-500 ease-linear font-bold events-letter-t">t</span>
                    </h2>
                    <p className="my-3 leading-7 text-white text-center">Join a vibrant community of learners from around the world. Our events bring together diverse voices, experiences, and cultures, creating an enriching tapestry of ideas and insights that will broaden your horizons.</p>
                </div>
            </div>
            <div className="about-section relative w-full flex flex-col justify-center items-center">
                <div className="achive-container relative w-[90%] flex flex-col lg:flex-row justify-center items-center py-[50px]">
                    <div className="achive-images relative w-full h-[400px] lg:h-[500px] lg:w-[45%] ">
                        <div className="first-child w-full flex absolute top-0 left-0">
                            <p><span className="font-bold">8,200+</span> five ster reviews</p>
                            <div className="img relative w-[70%] h-[400px]">
                                <img loading="lazy"src="https://educal-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.f69e149b.jpg&w=1920&q=75" alt="img" className="absolute top-0 left-0 w-full h-full" />
                            </div>
                        </div>
                        <div className="second-child flex w-full items-end absolute bottom-0 left-0">
                            <div className="img relative rounded-md overflow-hidden sm2:w-[70%] sm2:h-[250px] sm:w-[50%] sm:h-[300px] md:w-[270px] h-[300px]">
                                <img loading="lazy"src="https://educal-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-banner.e0e4b03f.jpg&w=1080&q=75" alt="img" className="absolute top-0 left-0 w-full h-full" />
                            </div>
                            <div className="reative flex flex-col my-3 ml-3">
                                <div className="images flex relative my-[10px]">
                                        <img loading="lazy"src="https://educal-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstudent-1.f50d33c9.jpg&w=96&q=75" alt="img" className="w-[30px] h-[30px] rounded-full" />
                                        <img loading="lazy"src="https://educal-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstudent-1.f50d33c9.jpg&w=96&q=75" alt="img" className="w-[30px] h-[30px] rounded-full translate-x-[-10px]" />
                                        <img loading="lazy"src="https://educal-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstudent-1.f50d33c9.jpg&w=96&q=75" alt="img" className="w-[30px] h-[30px] rounded-full translate-x-[-20px]" />
                                        <img loading="lazy"src="https://educal-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstudent-1.f50d33c9.jpg&w=96&q=75" alt="img" className="w-[30px] h-[30px] rounded-full translate-x-[-40px]" />
                                </div>
                                <p>Join over <span className="font-bold">4,000+</span> students</p>
                            </div>
                        </div>
                    </div>
                    <div className="achive-text flex mt-[50px] lg:mt0 flex-col w-full lg:w-[40%] lg:ml-5">
                            <h2 className="text-3xl font-bold">Achieve Your Goals img not foundWith Educal</h2>
                            <p className=" text-slate-700 my-[20px]">Lost the plot bobby such a fibber bleeding bits and bobs do not get shirty with me bugger all mate chinwag super pukka william barney, horse play buggered.</p>
                            <div className="check-div flex items-center my-[5px]">
                                <i className="fa-solid fa-check mr-1 text-green-600"></i>
                                <p>Upskill your organization.</p>
                            </div>
                            <div className="check-div flex items-center my-[5px]">
                                <i className="fa-solid fa-check mr-1 text-green-600"></i>
                                <p>Access more then 100K online courses.</p>
                            </div>
                            <div className="check-div flex items-center my-[5px]">
                                <i className="fa-solid fa-check mr-1 text-green-600"></i>
                                <p>Learn the latest skills.</p>
                            </div>
                            <button className="mt-5 py-3 px-3 w-[200px] border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-md hover:shadow-slate-500">Apply now</button>
                    </div>
                </div>
                <div className="trusted-container flex flex-col w-[90%] items-center justify-center py-3 mt-[100px]">
                    <h2 className="trusted-title font-bold text-4xl text-center">
                        Trusted by 100 worlds best companies
                    </h2>
                    <div className="trusted-list my-[50px] relative w-full grid sm2:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        <div className="trust-box flex justify-center items-center mb-[30px] lg:mb-0">
                            <img loading="lazy"src="https://educal-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrand-1.a63c87e4.png&w=256&q=75" alt="" />
                        </div>
                        <div className="trust-box flex justify-center items-center mb-[30px] lg:mb-0">
                            <img loading="lazy"src="https://educal-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrand-2.b5f7190b.png&w=256&q=75" alt="" />
                        </div>
                        <div className="trust-box flex justify-center items-center mb-[30px] lg:mb-0">
                            <img loading="lazy"src="https://educal-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrand-3.a368f927.png&w=128&q=75" alt="" />
                        </div>
                        <div className="trust-box flex justify-center items-center mb-[30px] lg:mb-0">
                            <img loading="lazy"src="https://educal-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrand-4.33735491.png&w=256&q=75" alt="" />
                        </div>
                        <div className="trust-box flex justify-center items-center mb-[30px] lg:mb-0">
                            <img loading="lazy"src="https://educal-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrand-5.f718d82c.png&w=256&q=75" alt="" />
                        </div>
                    </div>
                    <GoBtn btnText="View all partners" btnPath="/" />
                </div>
                <div className="choose-us-container relative flex flex-col lg:flex-row justify-around items-center w-[90%] py-3 my-[100px]">
                    <div className="choose-text relative w-full md:w-[400px]">
                        <p className="text-blue-500">Why Choses Us</p>
                        <h2 className="text-2xl font-bold my-3">Tools For Teachers img not foundAnd Learners</h2>
                        <p className="text-slate-800">Oxford chimney pot Eaton faff about blower blatant brilliant, bubble and squeak he legged it Charles bonnet arse at public school bamboozled.</p>
                        <div className="btns-div relative mt-[20px] flex flex-col sm:flex-row justify-between items-center py-3">
                            <Link to="/" className="w-full sm:w-[170px] flex justify-center items-center py-[7px] rounded-md text-white transition-all duration-300 shadow-md hover:shadow-slate-600 hover:translate-y-[-4px] bg-blue-600 ">Join for free</Link>
                            <GoBtn btnText="Learn more" btnPath="/" />
                        </div>
                    </div>
                    <div className="choose-img relative w-full md:w-[400px]">
                        <img loading="lazy"src="https://educal-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhy.1b369aa3.png&w=1080&q=75" alt="img" className="z-[10] relative"/>
                        <img loading="lazy"src="https://educal-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhy-shape-line.e3812c00.png&w=128&q=75" alt="img-icon" className="absolute top-0 right-0 w-[30px] opacity-75 z-30" />
                        <img loading="lazy"src="https://educal-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhy-shape-pink.8b205ae1.png&w=828&q=75" alt="img" className="absolute w-[300px] bottom-[-50px] left-0 z-[1]"/>
                    </div>
                </div>
                <div className="prouded-container my-[50px] flex flex-col w-[90%] items-center justify-center py-3">
                    <div className="prouded-title flex flex-col">
                        <h2 className="text-4xl font-bold text-center">We Are Proud</h2>
                        <p className="text-slate-800 text-center">You do not have to struggle alone, you have got our assistance and help.</p>
                    </div>
                    <div className="prouded-boxes my-[50px] grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4">
                        <div className="proud-box flex w-full sm:w-[300px] flex-col mb-[20px] lg:mb-0 justify-center items-center relative">
                            <i className="fa-solid fa-users text-2xl text-sky-500"></i>
                            <p className="my-[10px] font-bold text-xl">{3002}</p>
                            <p className="text-slate-600">Students Enrolled</p>
                        </div>
                        <div className="proud-box flex w-full sm:w-[300px] flex-col mb-[20px] lg:mb-0 justify-center items-center relative">
                            <i className="fa-solid fa-folder text-emerald-500 text-2xl"></i>
                            <p className="my-[10px] font-bold text-xl">{3002}</p>
                            <p className="text-slate-600">Students Enrolled</p>
                        </div>
                        <div className="proud-box flex w-full sm:w-[300px] flex-col mb-[20px] lg:mb-0 justify-center items-center relative">
                            <i className="fa-solid fa-graduation-cap text-teal-400 text-2xl"></i>
                            <p className="my-[10px] font-bold text-xl">{3002}</p>
                            <p className="text-slate-600">Students Enrolled</p>
                        </div>
                        <div className="proud-box flex w-full sm:w-[300px] flex-col mb-[20px] lg:mb-0 justify-center items-center relative">
                            <i className="fa-solid fa-earth-americas text-blue-500 text-2xl"></i>
                            <p className="my-[10px] font-bold text-xl">{3002}</p>
                            <p className="text-slate-600">Students Enrolled</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] my-[50px]">
                        <div className="box bg-[url('https://educal-react.vercel.app/assets/img/banner/banner-bg-1.jpg')] bg-no-repeat bg-cover bg-center relative lg:mr-4 flex flex-col rounded-md overflow-hidden p-6">
                            <span className="relative w-fit rounded-[20px] bg-red-600 text-white py-[1px] px-[20px] flex justify-center items-center">Free</span>
                            <h2 className="my-[30px] font-bold text-2xl">Germany Foundation Document</h2>
                            <Link className="w-[170px] flex justify-center items-center py-[7px] rounded-md text-white transition-all duration-300 shadow-md hover:shadow-slate-600 hover:translate-y-[-4px] bg-blue-600 ">View Courses</Link>
                        </div>
                        <div className="box bg-[url('https://educal-react.vercel.app/assets/img/banner/banner-bg-2.jpg')] bg-no-repeat bg-cover bg-center relative flex flex-col rounded-md overflow-hidden p-6 mt-[20px] lg:mt-0">
                            <span className="relative w-fit rounded-[20px] bg-orange-500 text-white py-[1px] px-[20px] flex justify-center items-center">New</span>
                            <h2 className="my-[30px] font-bold text-2xl">Online Courses From Eduka Universityt</h2>
                            <Link className="w-[170px] flex justify-center items-center py-[7px] rounded-md text-white transition-all duration-300 shadow-md hover:shadow-slate-600 hover:translate-y-[-4px] bg-blue-600 ">View Courses</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}