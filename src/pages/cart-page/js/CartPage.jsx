import "../css/cart-page.css";
import { Link } from "react-router-dom";
import emptyCartImg from "../../../media/images/empty-cart.png";
import { useState } from "react";
import DeleteProductAlert from "../../../components/cart-page-components/delete-product-alert/js/DeleteProductAlert";
import { useSelector } from "react-redux";
import GoBtn from "../../../components/go-btn/js/GoBtn";
export default function CartPage() {
    let cart = useSelector(state => state.cartReducer);
    let [courseWhichDelete , setCourseWhichDelete] = useState();
    let [courseName , setCourseName] = useState("");
    return (
        <>
            <div className="cart-section relative w-full flex flex-col justify-center items-center pt-[100px] pb-[200px]">
                <div className="cart-container w-[90%] relative flex flex-col justify-center items-center">
                    {cart &&  cart.length > 0 ?
                    <>
                    <table className="cart-table relative w-full mb-[100px]">
                        <thead className="border-b border-zinc-500">
                            <tr>
                                <th className=" pr-[10px] md:pr-[20px] py-2 md:py-3 text-left sm:text-sm md:text-lg text-slate-800">Course</th>
                                <th className=" pr-[10px] md:pr-[20px] py-2 md:py-3 text-left sm:text-sm md:text-lg text-slate-800">Price</th>
                                <th className=" pr-[10px] md:pr-[20px] py-2 md:py-3 text-left sm:text-sm md:text-lg text-slate-800">optinal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((course)=>{
                                let {id , poster  , price , info } = course.overview
                                return (
                                <tr key={id}>
                                    <td className="pr-[20px] py-3 text-left flex items-center">
                                        <img loading="lazy"src={poster} alt="course-img" className="sm2:w-[35px] sm:w-[60px] md:w-[100px]" />
                                        <h2 className="ml-[10px] text-slate-900 md:ml-[20px] sm2:text-[10px] sm:text-sm md:text-xl">{info}</h2>
                                    </td>
                                    <td className="py-3 text-left">$ {price}</td>
                                    <td className="pr-[10px] py-3 text-left">
                                        <button className="w-fit py-[7px] sm2:text-[10px] sm:text-sm tracking-wide sm2:px-1 sm:px-2 md:px-4 flex justify-center items-center text-white bg-red-600 rounded-lg transition-all duration-300 hover:bg-red-700" onClick={()=>{
                                            setCourseName(info)
                                            setCourseWhichDelete(course)
                                            document.querySelector(".alert-parent").classList.add("active");
                                        }}>Delete</button>
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
                        <Link to="/checkout-page" className="checkout-btn hover:rounded-[30px] transition-all duration-500 relative flex justify-center items-center w-[200px] h-[50px] bg-slate-800 text-white tracking-wide">
                        <p className="transition-all duration-500 relative">Checkout</p>
                        <i className="fa-solid fa-credit-card absolute transition-all duration-500 top-[100%] opacity-0 left-[50%] translate-x-[-50%]  text-xl "></i>
                        </Link>
                    </>
                    :
                    <div className="empty-cart-div flex flex-col relative w-full py-[30px] justify-center items-center">
                        <img loading="lazy"src={emptyCartImg} alt="empty-cart-img" className="w-[200px]" />
                        <h2 className="text-2xl my-[20px] tracking-wide">Your Cart is Empty!</h2>
                        <GoBtn btnText="Shop Now" btnPath="/courses-page"/>
                    </div>
                    }
                </div>
            </div>
            <DeleteProductAlert course={courseWhichDelete} courseName={courseName} />
        </>
    )
}