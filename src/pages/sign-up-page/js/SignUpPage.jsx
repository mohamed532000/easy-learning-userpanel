import "../css/sign-up.css";
import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { auth } from "../../../project-api/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import WrongTextSubmession from "../../../components/wrong-text-submession/js/WrongTextSubmession";
export  default function SignUpPage() {
    let navigate = useNavigate();
    let [activityWrongMessage , setActivityWrongMessage] = useState();
    let [name , setName] = useState("");
    let [phone , setPhone] = useState();
    let [email , setEmail] = useState("");
    let [passowrd , setPassword] = useState("");
    let validName = /[a-zA-Z]{3,}/;
    let validPhone = /^0\d{9,}\d$/;
    let hasNumbers = /[0-9]/;
    let hasLetter = /[a-zA-Z]/;
    let validEmail = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
    let [passwordVisible , setPassVisible] = useState(false);

    let removeActivityWrongMessage = ()=>{
        setActivityWrongMessage(false);
    }
    let signUpFunc = async ()=>{
        try {
            if(
                name.match(validName) &&
                phone.match(validPhone) &&
                email.match(validEmail) &&
                passowrd.match(hasLetter) &&
                passowrd.match(hasNumbers)){
                await createUserWithEmailAndPassword(auth , email , passowrd);
                navigate("/sign-in-page")
            }
        }catch(error) {
            setActivityWrongMessage(true);
        }
    };
    return (
        <>
            <div className="sign-up-section py-[100px] flex justify-center items-center">
                <div className="sign-up-container relative w-[90%] shadow-md shadow-slate-700 rounded-2xl overflow-hidden bg-white flex justify-center lg:justify-start items-center">
                    <img loading="lazy"src="https://images.pexels.com/photos/2302802/pexels-photo-2302802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="absolute w-full h-full top-0 left-0 z-10"/>
                    <span className="absolute w-full h-full top-0 right-0 bg-gradient-to-l from-black to-transparent z-20"></span>
                    <div className="form-side relative w-full lg:w-[50%] py-[50px] flex flex-col justify-center items-center z-40">
                        <div className="form-title flex flex-col justify-center items-center mb-[30px]">
                            <h2 className="mb-[10px] text-white text-2xl font-bold">Create Account</h2>
                            <h2 className="text-white text-center">Find the best course made for you!</h2>
                        </div>
                        <form className=" w-[90%] md:w-[400px] lg:w-[400px] rounded-3xl py-2 flex flex-col justify-center items-center" onSubmit={(e)=>{
                            e.preventDefault();
                            signUpFunc();
                        }}>
                            <WrongTextSubmession 
                                customStyle="bg-red-400 border border-red-800"
                                active={activityWrongMessage} 
                                wrongTextContent="this email already used !" disableActive={removeActivityWrongMessage}/>
                            <div className="input-div relative w-full md:w-[350px] flex flex-col my-4">
                                <input type="text" placeholder="Full Name" required id="name" className="outline-none indent-2 focus:border-2 border-blue-500 bg-slate-700 shadow-md shadow-slate-900 text-sky-400 h-[40px]   rounded-md" onChange={(e)=>{
                                    setName(e.target.value);
                                    if(!e.target.value.match(validName)) {
                                        e.target.style.borderColor ="red";
                                    }else {
                                        e.target.style.borderColor ="#3570f6";
                                    }
                                }}/>
                                <i className="fa-regular fa-address-card absolute top-[50%] translate-y-[-50%] text-blue-500 right-[10px]"></i>
                            </div>
                            <div className="input-div relative w-full md:w-[350px] flex flex-col my-4">
                                <input type="phone" placeholder="Phone" required id="phone" className="outline-none indent-2 focus:border-2 border-blue-500 text-sky-400 h-[40px] bg-slate-700 shadow-md shadow-slate-900 rounded-md" onChange={(e)=>{
                                    setPhone(e.target.value);
                                    if(!e.target.value.match(validPhone)) {
                                        e.target.style.borderColor ="red";
                                    }else {
                                        e.target.style.borderColor ="#3570f6";
                                    }
                                }}/>
                                <i className="fa-solid fa-phone absolute top-[50%] translate-y-[-50%] text-blue-500 right-[10px]"></i>
                            </div>
                            <div className="input-div relative w-full md:w-[350px] flex flex-col my-4">
                                <input type="email" placeholder="E-mail" required id="email" className="outline-none indent-2 focus:border-2 border-blue-500 text-sky-400 h-[40px] bg-slate-700 shadow-md shadow-slate-900 rounded-md" onChange={(e)=>{
                                    setEmail(e.target.value);
                                    if(!e.target.value.match(validEmail)) {
                                        e.target.style.borderColor ="red";
                                    }else {
                                        e.target.style.borderColor ="#3570f6";
                                    }
                                }}/>
                                <i className="fa-regular fa-envelope absolute top-[50%] translate-y-[-50%] text-blue-500 right-[10px]"></i>
                            </div>
                            <div className="input-div relative w-full md:w-[350px] flex flex-col my-4">
                                <input type={passwordVisible ? "text" : "password"} placeholder="passowrd" required id="pass" className="outline-none indent-2 focus:border-2 border-blue-500 text-sky-400 h-[40px] bg-slate-700 shadow-md shadow-slate-900 rounded-md" onChange={(e)=>{
                                    setPassword(e.target.value);
                                    if(!e.target.value.match(hasNumbers) || !e.target.value.match(hasLetter) || e.target.value.length < 8) {
                                        e.target.style.borderColor ="red";
                                    }else {
                                        e.target.style.borderColor ="#3570f6";
                                    }
                                }}/>
                                <i className="fa-regular fa-eye absolute top-[50%] translate-y-[-50%] text-blue-500 right-[10px]" onClick={()=>{
                                    setPassVisible(!passwordVisible);
                                }}></i>
                            </div>
                            <button type="submit" className="submit-btn rounded-md mt-5 py-2 bg-blue-500 w-full md:w-[350px] text-white">Sign Up</button>
                            <p className="my-3 text-white">Already A Member? <Link to="/sign-in-page" className="text-sky-400">Log In</Link></p>
                        </form>
                        <div className="sochial-div flex">
                            <Link to="https://www.facebook.com" className="mr-1 md:mr-2 lg:mr-2 transition-all duration-500 hover:translate-y-[-4px] flex justify-center items-center px[[15x] md:px-[15px] lg:px-[15px] md:py-[10px] lg:py-[10px] text-white">
                                <i className="fa-brands fa-facebook text-2xl"></i>
                            </Link>
                            <Link to="https://www.instagram.com" className="mr-1 md:mr-2 lg:mr-2 transition-all duration-500 hover:translate-y-[-4px] flex justify-center items-center px-[105] pd:px-[15px] lg:px-[15px] md:py-[10px] lg:py-[10px text-white">
                                <i className="fa-brands fa-instagram text-2xl"></i>
                            </Link>
                            <Link to="https://www.twitter.com" className="mr-1 md:mr-2 lg:mr-2 transition-all duration-500 hover:translate-y-[-4px] flex justify-center items-center p-[5px] md:px-[15px] lg:px-[15px] md:py-[10px] lg:py-[10px text-white">
                                <i className="fa-brands fa-twitter text-2xl"></i>
                            </Link>
                            <Link to="https://www.linkedin.com" className="mr-1 md:mr-2 lg:mr-2 transition-all duration-500 hover:translate-y-[-4px] flex justify-center items-center p-[5px] md:px-[15px] lg:px-[15px] md:py-[10px] lg:py-[10px text-white">
                                <i className="fa-brands fa-linkedin text-2xl"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}