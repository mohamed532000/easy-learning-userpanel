import { useEffect } from "react";
import { Link } from "react-router-dom";
import GoBtn from "../../../components/go-btn/js/GoBtn";
import headerImg from "../../../media/images/header-images/about-header.webp"
import PageHeader from "../../../components/page-header/PageHeader";
import aboutImg1 from "../../../media/images/about-page/about-banner.webp"
import aboutImg2 from "../../../media/images/about-page/about-banner2.webp"
import st6 from "../../../media/images/about-page/st6.webp";
import st7 from "../../../media/images/about-page/st7.webp";
import st8 from "../../../media/images/about-page/st8.webp";
import st9 from "../../../media/images/about-page/st9.webp";
import brand1 from "../../../media/images/about-page/brand-1.webp";
import brand2 from "../../../media/images/about-page/brand-2.webp";
import brand3 from "../../../media/images/about-page/brand-3.webp";
import brand4 from "../../../media/images/about-page/brand-4.webp";
import brand5 from "../../../media/images/about-page/brand-5.webp";
import whyusPanner from "../../../media/images/about-page/why-us-banner.webp";
import whyShapeLine from "../../../media/images/about-page/why-shape-line.webp";
import whyShapePink from "../../../media/images/about-page/why-shape-pink.webp";
import bgBanner1 from "../../../media/images/about-page/banner-bg-1.webp";
import bgBanner2 from "../../../media/images/about-page/banner-bg-2.webp";
export default function AboutPage() {
    useEffect(() => window.scrollTo(0 , 0) , []);
    return(
        <>
            <PageHeader 
            headerImg={headerImg} 
            headerDescription={"Join a vibrant community of learners from around the world. Our events bring together diverse voices, experiences, and cultures, creating an enriching tapestry of ideas and insights that will broaden your horizons."} 
            headerLetters = {["A" , "b" , "o" , "u" , "t"]}
            />
            <div className="about-section relative w-full flex flex-col justify-center items-center">
                <div className="achive-container relative w-[90%] flex flex-col lg:flex-row justify-center items-center py-[50px]">
                    <div className="achive-images relative w-full h-[400px] lg:h-[500px] lg:w-[45%] ">
                        <div className="first-child w-full flex absolute top-0 left-0">
                            <p><span className="font-bold">8,200+</span> five ster reviews</p>
                            <div className="img relative w-[70%] h-[400px]">
                                <img loading="lazy"src={aboutImg2} alt="img" className="absolute top-0 left-0 w-full h-full" />
                            </div>
                        </div>
                        <div className="second-child flex w-full items-end absolute bottom-0 left-0">
                            <div className="img relative rounded-md overflow-hidden sm2:w-[70%] sm2:h-[250px] sm:w-[50%] sm:h-[300px] md:w-[270px] h-[300px]">
                                <img loading="lazy"src={aboutImg1} alt="img" className="absolute top-0 left-0 w-full h-full" />
                            </div>
                            <div className="reative flex flex-col my-3 ml-3">
                                <div className="images flex relative my-[10px]">
                                        <img loading="lazy"src={st6} alt="img" className="w-[30px] h-[30px] rounded-full" />
                                        <img loading="lazy"src={st7} alt="img" className="w-[30px] h-[30px] rounded-full translate-x-[-10px]" />
                                        <img loading="lazy"src={st8} alt="img" className="w-[30px] h-[30px] rounded-full translate-x-[-20px]" />
                                        <img loading="lazy"src={st9} alt="img" className="w-[30px] h-[30px] rounded-full translate-x-[-40px]" />
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
                    <h2 data-aos="fade-down" className="trusted-title font-bold text-4xl text-center">
                        Trusted by 100 worlds best companies
                    </h2>
                    <div data-aos="fade-up" className="trusted-list my-[50px] relative w-full grid sm2:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        <div className="trust-box flex justify-center items-center mb-[30px] lg:mb-0">
                            <img loading="lazy"src={brand1} alt="brand-img" />
                        </div>
                        <div className="trust-box flex justify-center items-center mb-[30px] lg:mb-0">
                            <img loading="lazy"src={brand2} alt="brand-img" />
                        </div>
                        <div className="trust-box flex justify-center items-center mb-[30px] lg:mb-0">
                            <img loading="lazy"src={brand3} alt="brand-img" />
                        </div>
                        <div className="trust-box flex justify-center items-center mb-[30px] lg:mb-0">
                            <img loading="lazy"src={brand4} alt="brand-img" />
                        </div>
                        <div className="trust-box flex justify-center items-center mb-[30px] lg:mb-0">
                            <img loading="lazy"src={brand5} alt="brand-img" />
                        </div>
                    </div>
                    <GoBtn animate={"fade-up"} btnText="View all partners" btnPath="/" />
                </div>
                <div className="choose-us-container relative flex flex-col lg:flex-row justify-around items-center w-[90%] py-3 my-[100px]">
                    <div data-aos="fade-left" className="choose-text relative w-full md:w-[400px]">
                        <p className="text-blue-500">Why Choses Us</p>
                        <h2 className="text-2xl font-bold my-3">Tools For Teachers img not foundAnd Learners</h2>
                        <p className="text-slate-800">Oxford chimney pot Eaton faff about blower blatant brilliant, bubble and squeak he legged it Charles bonnet arse at public school bamboozled.</p>
                        <div className="btns-div relative mt-[20px] flex flex-col sm:flex-row justify-between items-center py-3">
                            <Link to="/" className="w-full sm:w-[170px] flex justify-center items-center py-[7px] rounded-md text-white transition-all duration-300 shadow-md hover:shadow-slate-600 hover:translate-y-[-4px] bg-blue-600 ">Join for free</Link>
                            <GoBtn btnText="Learn more" btnPath="/" />
                        </div>
                    </div>
                    <div data-aos="fade-right" className="choose-img relative w-full md:w-[400px]">
                        <img loading="lazy"src={whyusPanner} alt="img" className="z-[10] relative"/>
                        <img loading="lazy"src={whyShapeLine} alt="img-icon" className="absolute top-0 right-0 w-[30px] opacity-75 z-30" />
                        <img loading="lazy"src={whyShapePink} alt="img" className="absolute w-[300px] bottom-[-50px] left-0 z-[1]"/>
                    </div>
                </div>
                <div className="prouded-container my-[50px] flex flex-col w-[90%] items-center justify-center py-3">
                    <div data-aos="zoom-in-up" data-aos-delay="50" className="prouded-title flex flex-col">
                        <h2 className="text-4xl font-bold text-center">We Are Proud</h2>
                        <p className="text-slate-800 text-center">You do not have to struggle alone, you have got our assistance and help.</p>
                    </div>
                    <div className="prouded-boxes my-[50px] grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4">
                        <div data-aos="zoom-in-up" data-aos-delay="150" className="proud-box flex w-full sm:w-[300px] flex-col mb-[20px] lg:mb-0 justify-center items-center relative">
                            <i className="fa-solid fa-users text-2xl text-sky-500"></i>
                            <p className="my-[10px] font-bold text-xl">{3002}</p>
                            <p className="text-slate-600">Students Enrolled</p>
                        </div>
                        <div data-aos="zoom-in-up" data-aos-delay="250" className="proud-box flex w-full sm:w-[300px] flex-col mb-[20px] lg:mb-0 justify-center items-center relative">
                            <i className="fa-solid fa-folder text-emerald-500 text-2xl"></i>
                            <p className="my-[10px] font-bold text-xl">{3002}</p>
                            <p className="text-slate-600">Students Enrolled</p>
                        </div>
                        <div data-aos="zoom-in-up" data-aos-delay="350" className="proud-box flex w-full sm:w-[300px] flex-col mb-[20px] lg:mb-0 justify-center items-center relative">
                            <i className="fa-solid fa-graduation-cap text-teal-400 text-2xl"></i>
                            <p className="my-[10px] font-bold text-xl">{3002}</p>
                            <p className="text-slate-600">Students Enrolled</p>
                        </div>
                        <div data-aos="zoom-in-up" data-aos-delay="450" className="proud-box flex w-full sm:w-[300px] flex-col mb-[20px] lg:mb-0 justify-center items-center relative">
                            <i className="fa-solid fa-earth-americas text-blue-500 text-2xl"></i>
                            <p className="my-[10px] font-bold text-xl">{3002}</p>
                            <p className="text-slate-600">Students Enrolled</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] my-[50px]">
                        <div data-aos="fade-left" style={{backgroundImage : `url('${bgBanner1}')`}} className={`box bg-no-repeat bg-cover bg-center relative lg:mr-4 flex flex-col rounded-md overflow-hidden p-6`}>
                            <span className="relative w-fit rounded-[20px] bg-red-600 text-white py-[1px] px-[20px] flex justify-center items-center">Free</span>
                            <h2 className="my-[30px] font-bold text-2xl">Germany Foundation Document</h2>
                            <Link className="w-[170px] flex justify-center items-center py-[7px] rounded-md text-white transition-all duration-300 shadow-md hover:shadow-slate-600 hover:translate-y-[-4px] bg-blue-600 ">View Courses</Link>
                        </div>
                        <div data-aos="fade-right" style={{backgroundImage : `url('${bgBanner2}')`}} className="box bg-no-repeat bg-cover bg-center relative flex flex-col rounded-md overflow-hidden p-6 mt-[20px] lg:mt-0">
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