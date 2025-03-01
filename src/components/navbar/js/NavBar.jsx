import "../css/nav.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ConfirmSignOut from "../../confirm-sign-out/js/ConfirmSignOut";
import logo from "../../../media/images/footer-logo.webp";
export default function NavBar(){
    let [activeAccountList , setActiveAccountList] = useState(false)
    let cart = useSelector(state => state.cartReducer);
    let wishlist = useSelector(state => state.wishlistReducer);
    let [activeConfirm , setActiveConfirm] = useState(false)
    let userSatatus = useSelector(state => state.userStatus);
    let [userAccount , setUserAccount] = useState(false);
    let location = useLocation().pathname;
    let [activeOtherList , setActiveOtherList] = useState(false)
    useEffect(() => {
        let scrollHandler = () => {
            if (window.scrollY >= 50) {
                document.querySelector(".nav").classList.add("scrolling");
            } else {
                document.querySelector(".nav").classList.remove("scrolling");
            }
        };
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);
    let addActiveClassIcons = (spans)=> {
        spans.forEach(span=>{
            span.classList.toggle("active")
        })
    }
    let addActiveClassList = (list)=>{
        list.classList.add("active")
        list.classList.remove("un-active")
    }
    let removeActiveClassFromList = (list)=>{
        list.classList.remove("active");
        list.classList.add("un-active")
    }
    useEffect(()=>{
        if(userSatatus === "logged in") {
            setUserAccount(true)
        }else {
            setUserAccount(false)
        }
    },[userSatatus])
    let closeConfirmSignupPopubFunc = ()=>{
        setActiveConfirm(false)
    }
    return (
        <>
            <div className={`nav z-[9999] fixed py-1 w-full 
            ${location === "/sign-up-page" ||
            location === "/sign-up-page/sign-in-page" ||
            location === "/planing-page" ||
            location === "/sign-in-page" ||
            location === "/instructors-page" ||
            location === "/wishlist-page" ||
            location === "/cart-page/checkout-page" ||
            location === "/checkout-page" ||
            location === "/cart-page"
            ? "dark-text" 
            : "bg-transparent"} transition-all duration-500`}>
                <div className="nav-container w-[90%] mx-auto py-2 flex justify-between items-center">
                    <Link to="/">
                        <img loading="lazy"src={logo} alt="logo" className="w-[150px]" />
                    </Link>
                    <div className="list bg-[#1a2c3c78] backdrop-blur-[3px] absolute flex flex-col transition-all duration-500 invisible opacity-0 justify-center items-center  w-full top-0 z-50 h-[100vh] left-0 lg:bg-transparent lg:backdrop-blur-0 lg:relative lg:flex-row lg:justify-between lg:h-auto lg:w-auto lg:opacity-100 lg:visible">
                        <i className="fa-solid fa-xmark text-white cursor-pointer absolute top-3 right-3 text-xl lg:hidden" onClick={()=>{
                            removeActiveClassFromList(document.querySelector(".list"));
                        }}></i>
                        <ul className="flex flex-col lg:flex-row">
                            <li className="relative text-center lg:mx-3" style={{"--i" : "1.6s"}}>
                                <Link className="block py-2 text-white" to="/" onClick={()=>{
                                    removeActiveClassFromList(document.querySelector(".list"))
                                }}>Home</Link>
                            </li>
                            <li className="relative text-center lg:mx-3" style={{"--i" : "1.3s"}}>
                                <Link className="block py-2 text-white" to="about-page" onClick={()=>{
                                    removeActiveClassFromList(document.querySelector(".list"))
                                }}>About</Link>
                            </li>
                            <li className="relative text-center lg:mx-3" style={{"--i" : "1s"}}>
                                <Link className="block py-2 text-white" to="courses-page" onClick={()=>{
                                    removeActiveClassFromList(document.querySelector(".list"))
                                }}>Courses</Link>
                            </li>
                            <li className="relative text-center lg:mx-3" style={{"--i" : "1s"}}>
                                <Link className="block py-2 text-white" to="testmonials-page" onClick={()=>{
                                    removeActiveClassFromList(document.querySelector(".list"))
                                }}>Testmonials</Link>
                            </li>
                            <li className="relative flex items-center sm:justify-center sm:mb-2 sm:py-[5px] text-white cursor-pointer lg:mb-0 lg:mx-3" onClick={()=>{
                                setActiveOtherList(!activeOtherList)
                            }}>
                                <p>More</p>
                                <i className="fa-solid fa-caret-left rotate-[-90deg] text-white ml-2 mt-1"></i>
                                <ul className={`other-list absolute z-[99] w-full lg:w-auto ${activeOtherList ? "translate-x-0 opacity-100 visible" : "translate-x-[-10px] invisible opacity-0"} overflow-hidden transition-all duration-500 top-[145%] translate-x-[-10px] opacity-0 bg-indigo-900 shadow-md shadow-slate-900 rounded-md `}>
                                    <li className="relative text-center lg:mx-3" style={{"--i" : "1s"}}>
                                        <Link className="block py-2 text-white" to="instructors-page" onClick={()=>{
                                            removeActiveClassFromList(document.querySelector(".list"))
                                        }}>Instructors</Link>
                                    </li>
                                    <li className="relative text-center lg:mx-3" style={{"--i" : "1s"}}>
                                        <Link className="block py-2 text-white" to="planing-page" onClick={()=>{
                                            removeActiveClassFromList(document.querySelector(".list"))
                                        }}>Pricing</Link>
                                    </li>
                                    <li className="relative text-center lg:mx-3" style={{"--i" : "1s"}}>
                                        <Link className="block py-2 text-white" to="events-page" onClick={()=>{
                                            removeActiveClassFromList(document.querySelector(".list"))
                                        }}>Events</Link>
                                    </li>
                                    <li className="relative text-center lg:mx-3" style={{"--i" : ".7s"}}>
                                        <Link className="block py-2 text-white" to="contact-page" onClick={()=>{
                                            removeActiveClassFromList(document.querySelector(".list"))
                                        }}>Contact</Link>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                        {/* <div className="search-div my-3 lg:my-0 rounded-full h-[40px] px-2 flex justify-between items-center bg-transparent lg:ml-2 bg-white">
                            <input type="text" placeholder="Search" className="indent-2 text-slate-900 h-full  outline-none bg-transparent focus:bg-transparent"/>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div> */}
                        <div className="users-icons flex justify-center items-start lg:ml-4">
                            {
                                userAccount
                                &&
                                <>
                                    <Link to="/wishlist-page" className="relative m-2 text-lg transition-all duration-500 hover:translate-y-[-5px]" onClick={()=>{
                                        removeActiveClassFromList(document.querySelector(".list"))
                                    }}>
                                        <i className="fa-regular fa-heart text-white"></i>
                                        {
                                        wishlist &&
                                        <span className="absolute flex justify-center items-center top-[-10px] right-[-10px] bg-red-600 h-[20px] w-fit  text-white rounded-[50%] text-[12px] px-[4px]">{wishlist.length}</span>
                                        }
                                    </Link>
                                    <Link to="/cart-page" className="relative m-2 text-lg transition-all duration-500 hover:translate-y-[-5px]" onClick={()=>{
                                        removeActiveClassFromList(document.querySelector(".list"));
                                    }}>
                                        <i className="fa-brands fa-opencart text-white"></i>
                                        {
                                        cart &&
                                        <span className="absolute flex justify-center items-center top-[-10px] right-[-10px] bg-red-600 h-[20px] w-fit  text-white rounded-[50%] text-[12px] px-[4px]">{cart.length}</span>
                                        }
                                    </Link>
                                </>
                            }
                            {userAccount 
                            ? 
                            <>
                                <i className="fa-solid fa-user relative m-2 text-lg transition-all duration-500 hover:translate-y-[-5px] cursor-pointer text-white" onClick={()=>{
                                    setActiveAccountList(!activeAccountList)
                                }}></i>
                                <div className={`user-account-list ${activeAccountList ? "scale-1 visible opacity-100 translate-y-[-5px]" : "scale-0 invisible opacity-0 translate-y-0"} fixed top-[60px] right-0 bg-slate-50 overflow-hidden transition-all duration-500 origin-top`}>
                                    <ul className={``}>
                                        <li className="relative flex items-center py-1 pl-2 pr-5 hover:translate-x-[3px] transition-all duration-500 my-2">
                                            <Link to="/student-dashboard" className="flex items-center">
                                                <i className="fa-solid fa-gears mr-2"></i>
                                                <p>Profile</p>
                                            </Link>
                                        </li>
                                        <li className="relative flex items-center py-1 pl-2 pr-5 hover:translate-x-[3px] transition-all duration-500 my-2 cursor-pointer" 
                                        onClick={()=>setActiveConfirm(true)}
                                        >
                                            <i className="fa-solid fa-right-from-bracket mr-2"></i>   
                                            <p>Log Out</p>
                                        </li>
                                    </ul>
                                </div>
                            </>
                            :
                            <>
                            <Link className="relative m-2 text-lg transition-all duration-500 hover:translate-y-[-5px]" to="sign-in-page" onClick={()=>{
                                removeActiveClassFromList(document.querySelector(".list"))
                            }}>
                                <i className="fa-solid fa-user text-white"></i>
                            </Link>
                            <Link className="relative m-2 text-lg transition-all duration-500 hover:translate-y-[-5px]" to="sign-up-page" onClick={()=>{
                                removeActiveClassFromList(document.querySelector(".list"))
                            }}>
                                <i className="fa-solid fa-user-plus text-white"></i>
                            </Link>
                            </>
                            }
                        </div>
                    </div>
                    <i className="fa-solid fa-list-ul togglerListIcon transition-all duration-500 flex lg:hidden flex-col justify-center items-center cursor-pointer w-6 h-5 relative text-white text-xl" onClick={()=>{
                        addActiveClassIcons(document.querySelectorAll(".togglerListIcon > span"));
                        addActiveClassList(document.querySelector(".list"))
                    }}></i>
                </div>
            </div>
            <ConfirmSignOut status={activeConfirm} closePopubFun={closeConfirmSignupPopubFunc}/>
        </>
    )
}