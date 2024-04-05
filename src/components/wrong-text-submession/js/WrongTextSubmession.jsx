import PropTypes from "prop-types";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
WrongTextSubmession.propTypes = {
    wrongTextContent : PropTypes.string,
    customStyle : PropTypes.string,
    active : PropTypes.bool,
    disableActive : PropTypes.func,
}
export default function WrongTextSubmession({wrongTextContent , active , disableActive , customStyle}){
    useEffect(()=>{
        setTimeout(()=>{
            disableActive()
        },3000)
    })
    return (
        <>
        <p className={`relative ${customStyle} ${active ? "flex" : "hidden"} justify-center items-center transition-all duration-300 mb-2 h-[40px] text-white w-full md:w-[300px] rounded-md`}>{wrongTextContent}</p>
        </>
    )
}