import { Link } from "react-router-dom";
import logo from "../../../media/images/footer-logo.webp"
export default function Footer (){
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <>
            <div className="footer bg-[#f5edfe] pt-8 flex relative w-full flex-col justify-center items-center">
                <div className="footer-head relative rounded-xl overflow-hidden py-[50px] w-[90%] bg-[url(https://asset.uibucket.net/html/ilearning/assets/images/subscribe-bg.svg)] bg-center bg-no-repeat bg-cover footer-container flex flex-col justify-center items-center">
                    <h2 className="my-3 text-center font-bold  text-3xl">Subscribe For Get Update</h2>
                    <p className="my-3 text-center ">30k+ students daily learn with Edugo. Subscribe for new courses.</p>
                    <div className="subscribe-input relative w-[90%] md:w-auto lg:w-auto border border-white rounded p-1 flex justify-between items-center my-5">
                        <input type="text" className="outline-0 w-full mr-1 bg-transparent " placeholder="Enter your e-mail"/>
                        <button className=" relative py-2 px-3 bg-white rounded text-black">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="footer-container relative my-10 py-5 flex flex-col flex-wrap justify-start items-start w-full md:w-[90%] md:flex-row md:justify-between lg:w-[90%] lg:flex-row lg:justify-between">
                    <div className="col flex flex-col my-4 px-4 md:my-0 md:px-0 lg:my-0 lg:px-0 justify-start items-start">
                        <img loading="lazy"src={logo} alt="img" className="w-[200px] h-[60px]"/>
                        <p className="my-4">Ilearning is a registered trademark of ilearning.co</p>
                        <div className="sochial-div flex my-3">
                            <Link to="https://www.facebook.com" className="mr-2 md:mr-4 lg:mr-4 transition-all duration-500 hover:translate-y-[-4px] bg-white shadow-md hover:shadow-slate-400 flex justify-center items-center px-[10px] py-[5px] md:px-[15px] lg:px-[15px] md:py-[10px] lg:py-[10px] rounded-full">
                                <i className="fa-brands fa-facebook text-2xl"></i>
                            </Link>
                            <Link to="https://www.instagram.com" className="mr-2 md:mr-4 lg:mr-4 transition-all duration-500 hover:translate-y-[-4px] bg-white shadow-md hover:shadow-slate-400 flex justify-center items-center px-[10px] py-[5px] md:px-[15px] lg:px-[15px] md:py-[10px] lg:py-[10px rounded-full">
                                <i className="fa-brands fa-instagram text-2xl"></i>
                            </Link>
                            <Link to="https://www.twitter.com" className="mr-2 md:mr-4 lg:mr-4 transition-all duration-500 hover:translate-y-[-4px] bg-white shadow-md hover:shadow-slate-400 flex justify-center items-center px-[10px] py-[5px] md:px-[15px] lg:px-[15px] md:py-[10px] lg:py-[10px rounded-full">
                                <i className="fa-brands fa-twitter text-2xl"></i>
                            </Link>
                            <Link to="https://www.linkedin.com" className="mr-2 md:mr-4 lg:mr-4 transition-all duration-500 hover:translate-y-[-4px] bg-white shadow-md hover:shadow-slate-400 flex justify-center items-center px-[10px] py-[5px] md:px-[15px] lg:px-[15px] md:py-[10px] lg:py-[10px rounded-full">
                                <i className="fa-brands fa-linkedin text-2xl"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col flex flex-col my-4 px-4 md:my-0 md:px-0 lg:my-0 lg:px-0 justify-start items-start">
                        <h2 className="col-title text-black text-xl font-bold">Courses Category</h2>
                        <Link to="/" className=" mt-3 text-lg text-slate-900">Desgin</Link>
                        <Link to="/" className=" mt-3 text-lg text-slate-900">Development</Link>
                        <Link to="/" className=" mt-3 text-lg text-slate-900">Sales Marketing</Link>
                        <Link to="/" className=" mt-3 text-lg text-slate-900">Data Science</Link>
                        <Link to="/" className=" mt-3 text-lg text-slate-900">Life style</Link>
                        <Link to="/" className=" mt-3 text-lg text-slate-900">Photography</Link>
                    </div>
                    <div className="col flex flex-col my-4 px-4 md:my-0 md:px-0 lg:my-0 lg:px-0 justify-start items-start">
                        <h2 className="col-title text-black text-xl font-bold">Resources</h2>
                        <Link to="/" className=" mt-3 text-lg text-slate-900">Learners</Link>
                        <Link to="/" className=" mt-3 text-lg text-slate-900">Instructor</Link>
                        <Link to="/" className=" mt-3 text-lg text-slate-900">My account</Link>
                        <Link to="/" className=" mt-3 text-lg text-slate-900">Wishlist</Link>
                        <Link to="/" className=" mt-3 text-lg text-slate-900">Blog</Link>
                        <Link to="/" className=" mt-3 text-lg text-slate-900">Event</Link>
                    </div>
                    <div className="col flex flex-col my-4 px-4 md:my-0 md:px-0 lg:my-0 lg:px-0 justify-start items-start">
                        <h2 className="col-title text-black text-xl font-bold">Quick links</h2>
                        <Link to="/" className=" mt-3 text-lg text-slate-900">Courses</Link>
                        <Link to="/" className=" mt-3 text-lg text-slate-900">Testimonial</Link>
                        <Link to="/" className=" mt-3 text-lg text-slate-900">Career</Link>
                    </div>
                    <div className="col flex flex-col my-4 px-4 md:my-0 md:px-0 lg:my-0 lg:px-0 justify-start items-start">
                        <h2 className="col-title text-black text-xl font-bold">More</h2>
                        <Link to="/" className=" mt-3 text-lg text-slate-900">Support</Link>
                        <Link to="/" className=" mt-3 text-lg text-slate-900">Terms</Link>
                        <Link to="/" className=" mt-3 text-lg text-slate-900">Privacy</Link>
                        <Link to="/" className=" mt-3 text-lg text-slate-900">Help</Link>
                        <Link to="/" className=" mt-3 text-lg text-slate-900">FAQ</Link>
                        <Link to="/" className=" mt-3 text-lg text-slate-900">Contact</Link>
                    </div>
                </div>
                <div className="flex justify-center items-center relative w-full py-5 border-t border-slate-300">
                    <p>© {currentYear} Mohamed Ezat All Right Reserved</p>
                </div>
            </div>
        </>
    )
}