import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { auth } from "../../../project-api/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { additionUser } from "../../../project-actions/UserAccountActions";
import { loggedStatus } from "../../../project-actions/UserStatus";
import { useState } from "react";
import WrongTextSubmession from "../../wrong-text-submession/js/WrongTextSubmession";

LoginPopub.propTypes = {
    status : PropTypes.bool,
    closePopubFun : PropTypes.func
}
export default function LoginPopub({status , closePopubFun}){
    let dispatch = useDispatch();
    let [activityWrongMessage , setActivityWrongMessage] = useState()
    let [signInEmail , setSignInEmail] = useState("")
    let [signInPassword , setSignInPassword] = useState("");
    let [passwordVisible , setPassVisible] = useState(false);
    
    let signInFunc = async ()=>{
        try {
            await signInWithEmailAndPassword(auth , signInEmail , signInPassword);
            dispatch(additionUser({signInEmail , signInPassword}));
            dispatch(loggedStatus("logged in"));
            closePopubFun();
        }catch(error){
            setActivityWrongMessage(true);
        }
    }
    let removeActivityWrongMessage = ()=>{
        setActivityWrongMessage(false)
    }
    return (
        <>
        
            <div className={`confirm-sign-out-popub ${status ? "opacity-100 visible" : "opacity-0 invisible"} transition-all duration-300 fixed top-0 left-0 w-full h-[100vh] z-[9999999999] flex justify-center items-center bg-[#3f3f3f57]`}>
                <form className="confirm-sign-out-form relative flex flex-col justify-center items-center bg-white p-5" onSubmit={(e)=>{
                    e.preventDefault();
                    signInFunc();
                }}>
                    <i className="fa-solid fa-xmark absolute top-[10px] right-[15px] text-slate-600 text-xl" onClick={closePopubFun}></i>
                    <h2 className="my-6 text-center text-xl"><span className="font-bold text-slate-800">Unlock Cart:</span> Please Log In!</h2>
                    <WrongTextSubmession
                        customStyle={"bg-red-300 border border-red-600"}
                        active={activityWrongMessage}
                        wrongTextContent="email or password is wrong! Try again"
                        disableActive={removeActivityWrongMessage} />
                    <input type="email" placeholder="E-mail" required className="w-full md:w-[300px] h-[40px] indent-2 mb-7 outline-none border focus:border-[2px] focus:border-blue-400 bg-transparent border-blue-600 text-blue-600 rounded-sm" onChange={(e)=>{
                        setSignInEmail(e.target.value)
                    }}/>
                    <div className="relative flex w-full md:w-[300px] h-[40px] rounded-sm overflow-hidden">
                        <input type={passwordVisible ? "text" : "password"} placeholder="Password" required className="w-full h-full indent-2 mb-7 outline-none border focus:border-[2px] focus:border-blue-400 bg-transparent border-blue-600 text-blue-600" onChange={(e)=>{
                            setSignInPassword(e.target.value)
                        }}/>
                        <i className="fa-regular fa-eye absolute top-[50%] translate-y-[-50%] text-blue-500 right-[10px]" onClick={()=>{
                            setPassVisible(!passwordVisible);
                        }}></i>
                    </div>
                    <button type="submit" className="sign-out-btn flex justify-center items-center w-full md:w-[300px] py-2 text-white bg-blue-600 transition-all duration-500 mt-[30px] relative overflow-hidden shadow-md shadow-slate-400 hover:translate-y-[-3px] hover:shadow-slate-500">
                        <p className="relative transition-all duration-500">Login</p>
                        <i className="fa-solid fa-right-from-bracket absolute transition-all duration-500 left-[50%] bottom-[-30px] opacity-0 "></i>
                    </button>
                    <Link to="/" className="mt-[15px] mb-[10px] text-slate-500 hover:text-slate-800 transition-all duration-300">Forgot my password !</Link>
                </form>
            </div>
        </>
    )
}