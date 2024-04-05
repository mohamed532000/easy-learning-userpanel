import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
PageHeading.propTypes = {
    headingImgSrc : PropTypes.string,
}
export default function PageHeading({headingImgSrc}) {
    let location = useLocation();
    let [pathName , setPathName] = useState("")
    useEffect(()=>{
        let path = (`${location.pathname.split("").slice(0,location.pathname.length-1).join("")}`).split("").map(letter => {
            return letter === "/" ? " > " : letter;
        }).join("");
        setPathName(path);
    },[location.pathname])
    return (
        <>
        <div className="heading-div relative w-full flex justify-center items-center  py-[100px]">
            <div className="relative w-[90%] heading-container shadow-lg shadow-slate-300 bg-gradient-to-r from-[#ebdbfd] to-[#ffeeeb] flex justify-between items-center rounded-2xl py-[40px] px-10">
                <div className="heading-path flex flex-col justify-start items-start">
                    <div className="flex justify-center items-center py-4 px-4 bg-white rounded-xl mb-7">
                        <span className="text-xl">Home {pathName}</span>
                    </div>
                    <h2 className=" text-slate-950 pl-2 text-2xl">{pathName.replace(">","")}</h2>
                </div>
                <div className="heading-img hidden md:flex lg:flex relative w-[300px] h-[200px]">
                    <img loading="lazy"src={headingImgSrc} alt="img" className="absolute top-0 left-0 w-full h-full"/>
                </div>
            </div>
        </div>
        </>
    )
}