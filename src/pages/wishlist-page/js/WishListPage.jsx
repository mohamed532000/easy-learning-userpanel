import "../css/wishlist-page.css";
import { Link } from "react-router-dom";
import emptyWishlist from "../../../media/images/empty-wishlist.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromWishlist } from "../../../project-actions/WishlistActions";
import { useEffect } from "react";
export default function WishListPage() {
    let wishlist = useSelector(state => state.wishlistReducer);
    let dispatch = useDispatch()
    useEffect(() => window.scrollTo(0 , 0) , []);
    return (
        <>
            <div className="cart-section relative w-full flex flex-col justify-center items-center pt-[100px] pb-[200px]">
                <div className="cart-container w-[90%] relative flex flex-col justify-center items-center">
                    {wishlist &&  wishlist.length > 0 ?
                    <>
                    <table className="cart-table relative w-full mb-[100px]">
                        <thead className="border-b border-zinc-500">
                            <tr>
                                <th className="pr-[10px] md:pr-[20px] py-2 md:py-3 text-left sm:text-sm md:text-lg text-slate-800">Course</th>
                                <th className=" pr-[10px] md:pr-[20px] py-2 md:py-3 text-left sm:text-sm md:text-lg text-slate-800">Price</th>
                                <th className=" pr-[10px] md:pr-[20px] py-2 md:py-3 text-left sm:text-sm md:text-lg text-slate-800">optinal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishlist.map((course)=>{
                                let {id , poster  , price , info } = course.overview;
                                return (
                                <tr key={id}>
                                    <td className="pr-[20px] py-3 text-left flex items-center">
                                        <img loading="lazy"src={poster} alt="course-img" className=" sm2:w-[35px] sm:w-[60px] md:w-[100px]" />
                                        <h2 className="ml-[10px] text-slate-900 md:ml-[20px] sm2:text-[10px] sm:text-sm md:text-xl">{info}</h2>
                                    </td>
                                    <td className="text-[12px] md:text-sm lg:text-xl pr-[10px] py-3 text-left">$ {price}</td>
                                    <td className="pr-[10px] py-3 text-left">
                                        <button className="w-fit py-[7px] sm2:text-[10px] sm:text-sm tracking-wide sm2:px-1 sm:px-2 md:px-4 flex justify-center items-center text-white bg-red-600 rounded-lg transition-all duration-300 hover:bg-red-700" onClick={()=>{
                                            dispatch(deleteFromWishlist(course))
                                        }}>Delete</button>
                                    </td>
                                    <td className="pr-[10px] py-3 text-left">
                                        <button className="add-to-cart-btn relative w-fit py-[7px] sm2:text-[10px] sm:text-sm tracking-wide sm2:px-1 sm:px-2 md:px-4 flex justify-center items-center text-white rounded-lg transition-all duration-300   bg-cyan-800 hover:bg-sky-500 md:text-sm">
                                            <p className="transition-all duration-500 relative">Add to cart</p>
                                            <i className="absolute transition-all duration-500 top-[100%] opacity-0 left-[50%] translate-x-[-50%]  sm2:text-sm sm:text-xl fa-solid fa-cart-arrow-down"></i>
                                        </button>
                                    </td>
                                    <td className="pr-[10px] py-3 text-left">
                                        <Link to={`/about-course/${id}`}>
                                            <i className="fa-solid fa-circle-info transition-all duration-300 text-slate-400 hover:text-slate-500"></i>
                                        </Link>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <Link to="/courses-page" className="cta relative">
                        <span className="hover-underline-animation relative text-[14px] pb-[8px] pr-[15px] uppercase tracking-[5px] after:absolute after:w-full  after:h-[2px] after:bottom-0 after:left-0 after:bg-black after:origin-bottom-right after:transition-transform after:duration-[.4s] ease-out "> Explore </span>
                        <i className="fa-solid fa-arrow-right-long text-slate-400 transition-all duration-300"></i>
                    </Link>
                    </>
                    :
                    <div className="empty-wishlist-div flex flex-col relative w-full py-[30px] justify-center items-center">
                        <img loading="lazy"src={emptyWishlist} alt="empty-wishlist-img" className="w-[200px]" />
                        <h2 className="text-2xl my-[20px] tracking-wide">Your WishList is Empty!</h2>
                        <Link to="/courses-page" className="w--fit py-2 px-4 flex justify-center items-center transition-all duration-500 hover:bg-[#40247c] hover:translate-y-[-3px] shadow-sm hover:shadow-slate-400 bg-slate-700 text-white rounded-lg">Explore</Link>
                    </div>
                    }
                </div>
            </div>
        </>
    )
}