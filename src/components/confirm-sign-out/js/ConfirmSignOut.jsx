import "../css/confirm-sign-out.css"
import { Link , useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../../project-actions/UserAccountActions";
import { auth } from "../../../project-api/Firebase";
import { signOut } from "firebase/auth";
import { loggedStatus } from "../../../project-actions/UserStatus";
import { useState } from "react";
import WrongTextSubmession from "../../wrong-text-submession/js/WrongTextSubmession";

ConfirmSignOut.propTypes = {
    status : PropTypes.bool,
    closePopubFun : PropTypes.func
}
export default function ConfirmSignOut({status , closePopubFun}){
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let [activityWrongMessage , setActivityWrongMessage] = useState()
    let [signOutEmail , setSignOutEmail] = useState("");
    let [signOutpassword , setSignOutPassword] = useState("");
    let userAccounts = useSelector(state => state.user);
    
    let signOutFunc = async () => {
        try {
            await signOut(auth);
            dispatch(deleteUser());
            dispatch(loggedStatus("not logged"))
            closePopubFun();
            navigate("/");
        }catch (error){
            alert(error.message);
        }
    }
    let checkAccountsFunc = (email , pass) => {
        let find = userAccounts.find(acc => acc.email === email && acc.password === pass);
        if(find){
            signOutFunc();
        }else {
            setActivityWrongMessage(true)
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
                    checkAccountsFunc(signOutEmail , signOutpassword);
                }}>
                    <i className="fa-solid fa-xmark absolute top-[10px] right-[15px] text-slate-600 text-xl" onClick={closePopubFun}></i>
                    <h2 className="my-6 text-center text-xl">Ready to Sign out !</h2>
                    <WrongTextSubmession
                        customStyle={"bg-red-300 border border-red-600"}
                        active={activityWrongMessage}
                        wrongTextContent="email or password is wrong! Try again"
                        disableActive={removeActivityWrongMessage} />
                    <input type="email" placeholder="E-mail" required className="w-full md:w-[300px] h-[40px] indent-2 mb-7 outline-none border focus:border-[2px] focus:border-blue-400 bg-transparent border-blue-600 text-blue-600 rounded-sm" onChange={(e)=>{
                        setSignOutEmail(e.target.value)
                    }}/>
                    <input type="password" placeholder="Password" required className="w-full md:w-[300px] h-[40px] indent-2 mb-7 outline-none border focus:border-[2px] focus:border-blue-400 bg-transparent border-blue-600 text-blue-600 rounded-sm" onChange={(e)=>{
                        setSignOutPassword(e.target.value)
                    }}/>
                    <button type="submit" className="sign-out-btn flex justify-center items-center w-full md:w-[300px] py-2 text-white bg-blue-600 transition-all duration-500 mt-[10px] relative overflow-hidden shadow-md shadow-slate-400 hover:translate-y-[-3px] hover:shadow-slate-500">
                        <p className="relative transition-all duration-500">Sign out</p>
                        <i className="fa-solid fa-right-from-bracket absolute transition-all duration-500 left-[50%] bottom-[-30px] opacity-0 "></i>
                    </button>
                    <Link to="/" className="mt-[15px] mb-[10px] text-slate-500 hover:text-slate-800 transition-all duration-300">Forgot my password !</Link>
                </form>
            </div>
        </>
    )
}