import "../css/to-top-btn.css"
import { useEffect } from "react"

export default function ToTopBtn() {
    useEffect(()=>{
        let btn = document.querySelector(".to-top-btn");
        function handelScroll(){
            window.scroll({
                top : 0
            })
        }
        function addActiveClass (){
            window.scrollY >= 200
            ?
            btn.classList.add("active")
            :
            btn.classList.remove("active");
        }
        window.addEventListener("scroll" , addActiveClass)
        btn.onclick = handelScroll;
        return () => {
            window.addEventListener("scroll" , addActiveClass)
            btn.onclick = handelScroll;
        };
    })
    return (
        <>
            <button className="to-top-btn translate-x-3 invisible opacity-0 flex justify-center items-center py-[7px] px-[12px] bg-slate-600 rounded-full fixed bottom-6 right-3 transition-all duration-500 hover:translate-y-[-4px] shadow-md hover:shadow-slate-600 z-[99999]">
                <i className="fa-solid fa-arrow-right text-xl text-white rotate-[-150deg] transition-all duration-500 hover:rotate-[-90deg]"></i>
            </button>
        </>
    )
}