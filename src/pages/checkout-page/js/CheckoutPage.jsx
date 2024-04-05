import "../css/checkout-page.css"
import americanExpressImg from "../../../media/images/american-express.png";
import visaImg from "../../../media/images/visa.png";
import paypalImg from "../../../media/images/paypal.png";
import maestroImg from "../../../media/images/payment.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function CheckoutPage() {
    let cart = useSelector(state => state.cartReducer);
    let [subTotalPrice , setSubTotalPrice] = useState();
    let tax = 13;

    useEffect(()=>{
        if(cart.length > 0){
            let allPrices = cart.map(course=>{
                return course.price
            }).reduce((acc,current)=>{
                return acc + current
            })
            setSubTotalPrice(allPrices)
        }
    },[cart])
    return (
        <>
            <div className="payment-div relative pt-[100px] pb-[50px] flex justify-center items-center w-full">
                    <div className="payment-container py-[50px] w-[90%] relative flex flex-col lg:flex-row  justify-between md:items-center lg:items-start ">
                        <div className="cart-side mb-[50px] lg:mb-0 relative transition-all duration-500 w-full md:w-[60%] px-5 py-[50px] rounded-lg shadow-lg shadow-slate-300 flex flex-col">
                                <div className="cart-header flex flex-col">
                                    <div className="go-back-div relative w-full flex flex-col border-b border-slate-300 pb-6">
                                        <button className="flex items-center px-2 text-slate-600 hover:text-slate-950 transition-all duration-500 w-fit" onClick={()=>{
                                            window.history.back()
                                        }}>
                                            <i className="fa-solid fa-arrow-left mr-2 transition-all duration-500"></i>
                                            <p className="text-sm sm:text-lg">Go Back</p>
                                        </button>
                                    </div>
                                    <div className="cart-info relative w-full flex flex-col  py-2">
                                        <h2 className="font-bold text-lg sm:text-xl mb-2 text-slate-950">Shoppin Cart</h2>
                                        <p className="text-slate-800 text-sm sm:text-lg">You have <span className="font-bold ">{cart.length}</span> items in your cart</p>
                                    </div>
                                </div>
                                <div className="products flex flex-col mt-5">
                                    {cart && cart.map(course => {
                                        return (
                                            <div key={course.id} className="row flex justify-between items-center mb-3 w-full shadow-md p-2">
                                                <div className="product-name-and-img relative flex items-center">
                                                    <div className="product-img relative w-[50px] h-[60px] sm:w-[80px] sm:h-[100px]">
                                                        <img loading="lazy"src={course.image} alt="img" className="absolute top-0 left-0 w-full h-full"/>
                                                    </div>
                                                    <h2 className="font-bold text-[12px] sm:text-xl ml-1 text-slate-900">{course.title}</h2>
                                                </div>
                                                <button className="add-to-cart-button relative text-white text-[13px] sm:text-base flex justify-center items-center py-1 px-3 rounded-sm shadow-md hover:shadow-slate-400 transition-all duration-500 bg-red-600 overflow-hidden">
                                                        <span className="relative mx-[1px] transition-all duration-500 delay-[.2s]">D</span>
                                                        <span className="relative mx-[1px] transition-all duration-500 delay-[.1s]">e</span>
                                                        <span className="relative mx-[1px] transition-all duration-500 delay-[0s]">l</span>
                                                        <span className="relative mx-[1px] transition-all duration-500 delay-[.1s]">e</span>
                                                        <span className="relative mx-[1px] transition-all duration-500 delay-[.2s]">t</span>
                                                        <span className="relative mx-[1px] transition-all duration-500 delay-[.3s]">e</span>
                                                        <i className="fa-solid fa-trash transition-all duration-700  absolute left-[50%] translate-x-[-50%] top-[50px]"></i>
                                                </button>
                                            </div>
                                        )
                                    })}
                                </div>
                        </div>
                        <form className="card-details overflow-y-auto w-full md:w-[60%] lg:w-[400px] bg-[#565cba] p-5 rounded-md overflow-hidden">
                            <div className="card-header flex w-full justify-between items-center mb-[20px]">
                                <h2 className="font-bold text-lg sm:text-xl text-white">Card Details</h2>
                                <img loading="lazy"src="https://cdn.dribbble.com/users/1646229/screenshots/8031219/media/8ed0b2916f104733ea9e3eeeb410ba08.png" alt="account img" className="w-[30px] h-[30px] rounded-full"/>
                            </div>
                            <div className="cards-type flex justify-between my-5 mt-3">
                                <div className="card relative border rounded-md overflow-hidden border-slate-400 w-[60px] h-[40px] mx-1 sm:mx-0 sm:w-[80px] sm:h-[60px]">
                                    <input type="radio" name="card-type" id="paypal" className="absolute top-1 right-1 z-[5]"/>
                                    <label htmlFor="paypal" className="absolute flex justify-center items-center top-0 left-0 w-full h-full z-[4]">
                                        <img loading="lazy"src={paypalImg} alt="visa card" className="w-[30px]" />
                                    </label>
                                </div>
                                <div className="card relative border rounded-md overflow-hidden border-slate-400 w-[60px] h-[40px] mx-1 sm:mx-0 sm:w-[80px] sm:h-[60px]">
                                    <input type="radio" name="card-type" id="america-express" className="absolute top-1 right-1 z-[5]"/>
                                    <label htmlFor="america-express" className="absolute flex justify-center items-center top-0 left-0 w-full h-full z-[4]">
                                        <img loading="lazy"src={americanExpressImg} alt="visa card" className="w-[30px]" />
                                    </label>
                                </div>
                                <div className="card relative border rounded-md overflow-hidden border-slate-400 w-[60px] h-[40px] mx-1 sm:mx-0 sm:w-[80px] sm:h-[60px]">
                                    <input type="radio" name="card-type" id="visa-card" className="absolute top-1 right-1 z-[5]"/>
                                    <label htmlFor="visa-card" className="absolute flex justify-center items-center top-0 left-0 w-full h-full z-[4]">
                                        <img loading="lazy"src={visaImg} alt="visa card" className="w-[30px]" />
                                    </label>
                                </div>
                                <div className="card relative border rounded-md overflow-hidden border-slate-400 w-[60px] h-[40px] mx-1 sm:mx-0 sm:w-[80px] sm:h-[60px]">
                                    <input type="radio" name="card-type" id="maestro-card" className="absolute top-1 right-1 z-[5]"/>
                                    <label htmlFor="maestro-card" className="absolute flex justify-center items-center top-0 left-0 w-full h-full z-[4]">
                                        <img loading="lazy"src={maestroImg} alt="maestro pay" className="w-[30px]" />
                                    </label>
                                </div>
                            </div>
                            <div className="input-div flex flex-col mb-4">
                                <label htmlFor="card-name-input" className="mb-2 text-white">Name on Card</label>
                                <input type="text" name="card-name-input" required  placeholder="EX: nader ahmed" className="outline-none h-[40px] indent-2 rounded-md text-white bg-[#6268c5]"/>
                            </div>
                            <div className="input-div flex flex-col mb-4">
                                <label htmlFor="card-number-input" className="mb-2 text-white">Card Number</label>
                                <input type="text"  required id="card-number-input" placeholder="EX: XX XXX X XXX XX X" className="outline-none h-[40px] indent-2 rounded-md text-white bg-[#6268c5]"/>
                            </div>
                            <div className="exp-and-cvv-inputs flex flex-col md:flex-row mb-4 ">
                                <div className="input-div exp-div flex flex-col mb-4">
                                    <label htmlFor="expiration-input" className="mb-2 text-white">expiration Date</label>
                                    <input type="text"  required id="expiration-input" placeholder="EX: 10/10/2020 " className="outline-none h-[40px] indent-2 rounded-md text-white bg-[#6268c5]"/>
                                </div>
                                <div className="input-div exp-div flex flex-col md:ml-2 mb-4">
                                    <label htmlFor="cvv-input" className="mb-2 text-white">CVV</label>
                                    <input type="text"  required id="cvv-input" placeholder="EX:123" className="outline-none h-[40px] indent-2 rounded-md text-white bg-[#6268c5]"/>
                                </div>
                            </div>
                            <div className="cart-total flex flex-col border-t border-slate-100 py-4">
                                <div className="child relative w-full flex justify-between mb-2">
                                    <h2 className="text-white">SubTotal</h2>
                                    <h2 className="text-white">${subTotalPrice}</h2>
                                </div>
                                <div className="child relative w-full flex justify-between mb-2">
                                    <h2 className="text-white">Tax</h2>
                                    <h2 className="text-white">${tax}</h2>
                                </div>
                                <div className="child relative w-full flex justify-between mb-2">
                                    <h2 className="text-white">Total</h2>
                                    <h2 className="text-white">${subTotalPrice + tax}</h2>
                                </div>
                                <button className="add-to-cart-button w-full relative text-white py-2 flex justify-center items-center mt-[20px] shadow-md hover:shadow-slate-800 transition-all duration-500 bg-[#0a033c] overflow-hidden rounded-md">
                                    <span className="relative mx-[2px] transition-all duration-500 delay-[.4s]">C</span>
                                    <span className="relative mx-[2px] transition-all duration-500 delay-[.3s]">h</span>
                                    <span className="relative mx-[2px] transition-all duration-500 delay-[.2s]">e</span>
                                    <span className="relative mx-[2px] transition-all duration-500 delay-[.1s]">c</span>
                                    <span className="relative mx-[2px] transition-all duration-500 delay-[.0s]">k</span>
                                    <span className="relative mx-[2px] transition-all duration-500 delay-[.1s]">o</span>
                                    <span className="relative mx-[2px] transition-all duration-500 delay-[.2s]">u</span>
                                    <span className="relative mx-[2px] transition-all duration-500 delay-[.3s]">t</span>
                                    <i className="fa-solid fa-credit-card transition-all duration-700  absolute left-[50%] translate-x-[-50%] top-[50px]"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        </>
    )
}