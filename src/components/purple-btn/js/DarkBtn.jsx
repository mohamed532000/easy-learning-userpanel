import PropTypes from "prop-types";
import { Link } from "react-router-dom";
PurpleBtn.propTypes = {
    pathname : PropTypes.string.isRequired,
    btnText : PropTypes.string.isRequired
}
export default function PurpleBtn ({pathname , btnText }){
    return (
        <>
            <Link to={pathname} className="button2 relative overflow-hidden hover:text-white transition-all duration-500 py-[0.7em] px-[1.7em] rounded-md border border-[#1e1b4b] shadow-md shadow-slate-400 before:absolute before:left-[50%] before:top-[100%] before:translate-x-[-50%] before:scale-y-[1] before:scale-x-[1.25] before:w-[140%] before:h-[180%] before:rounded-[50%] before:bg-[rgba(0, 0, 0, 0.05)] hover:before:bg-[#1e1b4b] before:transition-all before:duration-500 after:absolute after:w-[160%] after:h-[190%] after:transition-all after:duration-500 after:bg-[#1e1b4b] after:top-[180%] after:left-[55%] after:translate-x-[-50%] after:rounded-[50%] after:scale-y-[1] after:scale-x-[1.45] hover:before:top-[-35%] hover:before:scale-x-[0.8] hover:before:scale-y-[1.3] after:block hover:after:top-[-45%] hover:after:scale-x-[0.8] hover:after:scale-y-[1.3] before:z-[-1] after:z-[-1]">
                {btnText}
            </Link>
        </>
    )
}