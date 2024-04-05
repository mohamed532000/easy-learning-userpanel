import "../css/sign-up-popub.css";
import effectImg from "../../../media/images/effect.png";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { loggedStatus } from "../../../project-actions/UserStatus";
SignUpPupub.propTypes = {
    status : PropTypes.bool,
    colsePopubFunc : PropTypes.func
}
export default function SignUpPupub({ status , colsePopubFunc}) {
    let dispatch = useDispatch();
    let setUserLogged = () => {
        dispatch(loggedStatus("logged in"));
        colsePopubFunc();
    }
    return (
        <>
            <div className={`sign-up-popub w-full h-[100vh] fixed top-0 left-0 z-[9999999] bg-[#3f3f3f4d] backdrop-blur-[2px] ${status ? "visible opacity-100" : "invisible opacity-0"} flex justify-center items-center transition-all duration-500`}>
                <div className="popub-container relative flex justify-center items-center w-[90%]">
                    <div className="popub-content relative py-[40px] px-3 w-full sm:w-[500px] flex flex-col justify-center items-center bg-gradient-to-tr from-[#512DA8] to-[#197cd3] shadow-lg shadow-slate-800 transition-all duration-700 rounded-md">
                        <h2 className={`relative text-xl text-center text-white transition-all duration-0 my-3 ${status ? "translate-y-0 opacity-100" : "translate-y-[10px] opacity-0"}`}>
                            Welcome
                            <img src={effectImg} alt="img" className="absolute top-[-20px] right-[-30px] w-[30px]"/>
                        </h2>
                        <p className={`text-center mt-3 mb-5 transition-all duration-[.2s] text-slate-200 ${status ? "translate-y-0 opacity-100" : "translate-y-[10px] opacity-0"}`}>Welcome to a world of limitless learning possibilities! 🚀📚 Embrace knowledge, fuel your curiosity, and embark on an exciting educational journey with us. Lets get started!</p>
                        <button onClick={setUserLogged} className="to-learn-btn relative flex justify-center items-center bg-transparent transition-all duration-500 border-2 border-white text-white hover:bg-blue-600 hover:border-blue-600 shadow-slate-700 hover:shadow-md py-2 px-3 rounded-md">
                            <i className="fa-solid fa-book-open-reader opacity-0 absolute transition-all duration-500"></i>
                            <p className="transition-all duration-500">Learn Now</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}