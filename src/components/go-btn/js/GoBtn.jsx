import "../css/go-btn.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
GoBtn.propTypes = {
    btnText : PropTypes.string,
    btnPath : PropTypes.string,
}
export default function GoBtn({btnText , btnPath}) {
    return (
        <>
            <Link to={btnPath} className="cta relative">
                <span className="hover-underline-animation after:origin-bottom-left relative text-[14px] pb-[8px] pr-[15px] uppercase tracking-[5px] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-slate-800 after:transition-transform after:duration-[.4s] ease-out "> {btnText} </span>
                <i className="fa-solid fa-arrow-right-long text-slate-400 transition-all duration-300"></i>
            </Link>
        </>
    )
}