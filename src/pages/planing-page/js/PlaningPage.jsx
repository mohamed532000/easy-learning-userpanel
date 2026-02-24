import { useEffect, useState } from "react";
import americanExpressImg from "../../../media/images/american-express.png";
import visaImg from "../../../media/images/visa.png";
import paypalImg from "../../../media/images/paypal.png";
import maestroImg from "../../../media/images/payment.png";
import PageHeading from "../../../components/page-heading/js/PageHeading";
import PlanCard from "../../../components/planing-components/plan-card/js/PlanCard";
import SectionTitle from "../../../components/section-title/js/SectionTitle";
import { useSelector } from "react-redux";
import LoginPopub from "../../../components/login-popub/js/LoginPopub";
import { onValue, ref } from "firebase/database";
import { database } from "../../../project-api/Firebase";
export default function PlaningPage() {
    let plansCart = useSelector(state => state.plansReducer);
    let [activeLogin , setActiveLogin] = useState();
    let [planPrice , setPlanPrice] = useState();
    let planTax = 17;
    let [plans , setPlans] = useState();
    useEffect(()=>{
        onValue(ref(database) , (snapshot)=>{
            let data = snapshot.val();
            let plansData = data.plans;
            setPlans(plansData)
        })
    },[])
    let closeLoginPopubFunc = ()=>{
        setActiveLogin(false)
    }
    let loginP = ()=>{
        setActiveLogin(true)
    }
    useEffect(()=>{
        let plan = {...plansCart[0]}
        setPlanPrice(plan.planPrice)
    },[plansCart]);
    let scrollIntoViewCheckout = ()=>{
        let section = document.getElementById("plans-checkout-section");
        section && section.scrollIntoView({behavior : "smooth"});
    }
    return (
        <>
            <PageHeading  headingImgSrc="https://asset.uibucket.net/html/ilearning/assets/images/banner/pricing.png"/>
            <div className="plans-section flex flex-col justify-center items-center">
                <SectionTitle title="We create a pricing package for all standard students" />
                <div className="plans-container w-[90%] flex flex-wrap justify-center md:justify-between items-center mt-5 mb-[100px] py-3">
                    {plans && plans.map((plan , index)=>{
                        return (
                            <PlanCard
                                key={index}
                                animate={"zoom-in"}
                                planName={plan.planName}
                                featureStatusImg="https://asset.uibucket.net/html/ilearning/assets/images/icons/tick-2.svg"
                                featureText="High Resolution Videos"
                                planPrice={plan.planPrice}
                                planFeatures={plan.futures}
                                planStatus={plan.planStatus}
                                loginPopubFunction={loginP}
                                scrollIntoViewFunction = {scrollIntoViewCheckout()}
                                className={`${plan.planStatus == "premium" ? "bg-gradient-to-bl from-red-500 to-blue-500" : ""}`}
                            /> 
                        )
                    })}
                </div>
            </div>
            {
            plansCart && plansCart.length > 0 &&
            <div id="plans-checkout-section" className="checkout-plan mt-[100px] relative w-full flex justify-center items-center ">
                <div className="checkout-container relative w-[90%] py-5 flex justify-center items-center">
                    <form className="card-details shadow-md shadow-slate-600 overflow-y-auto w-full md:w-[60%] lg:w-[80%] bg-[#565cba] p-5 rounded-md overflow-hidden">
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
                                <h2 className="text-white">Plan price</h2>
                                <h2 className="text-white">${planPrice}</h2>
                            </div>
                            <div className="child relative w-full flex justify-between mb-2">
                                <h2 className="text-white">Tax</h2>
                                <h2 className="text-white">${planTax}</h2>
                            </div>
                            <div className="child relative w-full flex justify-between mb-2">
                                <h2 className="text-white">Total</h2>
                                <h2 className="text-white">${planPrice + planTax}</h2>
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
            }
            <LoginPopub status={activeLogin} closePopubFun={closeLoginPopubFunc}/>
        </>
    )
}