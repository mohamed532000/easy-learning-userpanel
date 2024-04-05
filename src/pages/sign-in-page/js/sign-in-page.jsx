import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { additionUser } from "../../../project-actions/UserAccountActions";
import { auth } from "../../../project-api/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import SignUpPupub from "../../../components/sign-up-popub/js/SignUpPoub";
import WrongTextSubmession from "../../../components/wrong-text-submession/js/WrongTextSubmession";
export  default function SignInPage() {
    let [activityWrongMessage , setActivityWrongMessage] = useState();
    let [signupPopubStatus , setSignupPopubStatus] = useState();
    let dispatch  = useDispatch();
    let [email , setEmail] = useState("");
    let [password , setPassword] = useState("");
    let [passwordVisible , setPassVisible] = useState(false);

    let signInFunc = async ()=>{
        try {
            await signInWithEmailAndPassword(auth , email , password);
            dispatch(additionUser({email , password}));
            setSignupPopubStatus(true);
        }catch(error){
            setActivityWrongMessage(true);
        }
    }

    let closeSignUpPopubFunc = ()=>{
        setSignupPopubStatus(false);
    }
    let removeActivityWrongMessage = ()=>{
        setActivityWrongMessage(false);
    }
    return (
        <>
            <div className="sign-up-section py-[100px] flex justify-center items-center">
                <div className="sign-up-container relative w-[90%] lg:shadow-lg shadow-slate-400 rounded-2xl overflow-hidden bg-white flex justify-center lg:justify-between items-center">
                    <div className="img-side hidden relative w-[70%] bg-white lg:flex justify-center items-center">
                        <img loading="lazy"src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1694830088~exp=1694830688~hmac=337ea44ba837c0cd96d3c5437fa3a3a2bd707645bdc81a67349bc86d32f2daec" alt="" className="w-[400px]"/>
                    </div>
                    <div className="form-side rounded-lg lg:rounded-l-[70px] shadow-lg shadow-black relative w-full md:w-[50%] lg:w-[50%] py-[50px] flex flex-col justify-center items-center bg-gradient-to-tr from-[#491767] to-[#035fbb]">
                        <div className="form-title flex flex-col justify-center items-center mb-[20px]">
                            <h2 className="mb-[10px] text-white text-xl md:text-2xl lg:text-2xl font-bold">Log In Your Account</h2>
                            <h2>Find the best course made for you!</h2>
                        </div>
                        <Link to="https://www.google.com" className="w-[90%] relative lg:w-[300px] transition-all duration-500 hover:translate-y-[-4px] shadow-sm shadow-slate-700 mb-4 bg-white rounded-md py-3 flex justify-center items-center">
                            <img loading="lazy"src="https://asset.uibucket.net/html/ilearning/assets/images/icons/google-icon.svg" alt="google-img" className="mr-3" />
                            <p>Sign Up with Google</p>
                        </Link>
                        <form onSubmit={(e)=>{
                            e.preventDefault();
                            signInFunc();
                        }} action="" className=" w-full lg:w-[400px] rounded-3xl py-7  flex flex-col justify-center items-center">
                            <WrongTextSubmession
                                customStyle={"bg-red-400 border border-red-700"}
                                active={activityWrongMessage}
                                wrongTextContent="Something wrong ! Try again"
                                disableActive={removeActivityWrongMessage} />
                            <div className="input-div w-[90%] relative flex flex-col my-2">
                                <label htmlFor="email" className="mb-2 text-sky-400">E-mail</label>
                                <input type="email" required id="email" className=" relative w-full bg-transparent outline-none indent-1 text-sky-400 h-[40px] border border-cyan-400 rounded-md" onChange={(e)=>{
                                    setEmail(e.target.value)
                                }}/>
                            </div>
                            <div className="input-div w-[90%] relative flex flex-col my-2">
                                <label htmlFor="pass" className="mb-2 text-sky-400">Password</label>
                                <input type={passwordVisible ? "text" : "password"} required id="pass" className=" relative w-full bg-transparent outline-none indent-1 text-sky-400 h-[40px] border border-cyan-400 rounded-md" onChange={(e)=>{
                                    setPassword(e.target.value)
                                }}/>
                                <i className="fa-regular fa-eye absolute top-[45px] text-cyan-400 right-[10px]" onClick={()=>{
                                    setPassVisible(!passwordVisible);
                                }}></i>
                            </div>
                            <button type="submit" className="submit-btn rounded-md mt-[20px] py-2 bg-blue-500 w-[90%] relative text-white">Log in</button>
                            <Link to="/sign-in-page" className="my-3 text-sky-400">Forgot my password</Link>
                        </form>
                    </div>
                </div>
            </div>
            <SignUpPupub status={signupPopubStatus} colsePopubFunc={closeSignUpPopubFunc}/>
        </>
    )
}