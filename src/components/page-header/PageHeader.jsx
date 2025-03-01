import PropTypes from "prop-types";
import { useEffect } from "react";
PageHeader.prototype = {
    headerImg : PropTypes.string,
    headerDescription : PropTypes.string,
    headerLetters : PropTypes.array,
}
export default function PageHeader({headerImg , headerLetters , headerDescription}) {
    useEffect(()=>{
        let elements = document.querySelectorAll(`.event-word span`)
        function handelScroll(){
            elements?.forEach((element , index) => {
                element.style.transform = `translateY(${-window.scrollY + ((index * 3) + 30)}px)`;
                if(window.scrollY === 0) {
                    element.style.transform = `translateY(0)`;
                }
            })
        }
        window.addEventListener("scroll" , handelScroll);
        return ()=> window.removeEventListener("scroll" , handelScroll);
    },[])
    return (
        <>
        <div className="header relative w-full bg-no-repeat bg-cover bg-center after:absolute after:w-full after:h-full after:bg-black after:opacity-40 flex justify-center items-center h-[60vh]"
        style={{backgroundImage : `url("${headerImg}")`}}
        >
            <div className="header z-20 w-full md:w-[50%] lg:w-[50%] text flex flex-col justify-center items-center">
                <h2 className="event-word text-white text-center text-4xl md:text-7xl lg:text-7xl mb-5 tracking-[10px] md:tracking-[20px]">
                    {
                        headerLetters?.map((letter , index) => (
                            <span key={index} className={`relative inline-block transition-all duration-500 ease-linear font-bold events-letter-${letter}`}>{letter}</span>
                        ))
                    }
                </h2>
                <p className="my-3 leading-7 text-white text-center">{headerDescription}</p>
            </div>
        </div>
        </>
    )
}