import "../css/delete-product-alert.css";
import notficationImg from "../../../../media/images/bell-ring.png";
import PropTypes from "prop-types";
DeleteProductAlert.propTypes = {
    courseName : PropTypes.string.isRequired,
    course : PropTypes.object
}
import { useDispatch } from "react-redux";
import { deleteCourse } from "../../../../project-actions/CartCoursesActions";
export default function DeleteProductAlert({courseName , course}){
    let dispatch = useDispatch()
    return (
        <>
        
            <div className="z-[999999999] alert-parent invisible opacity-0 transition-all duration-500 fixed top-0 left-0 w-full h-[100vh] flex justify-center items-center bg-[#7c7c7c8e]">
                <div className="alert translate-x-[-10px] opacity-0 transition-all duration-700 flex flex-col py-[20px] justify-center w-[70%] md:w-[350px] items-center bg-white">
                    <img loading="lazy" src={notficationImg} alt="image" className="w-[60px] my-[10px] origin-top"/>
                    <h2 className="text-slate-700 font-bold tracking-wide my-[6px] text-center">Are you sure delete <span className="text-blue-600">{courseName}</span>?</h2>
                    <div className="btns-div relative flex mt-4 justify-center items-center ">
                        <button className="relative w-fit py-[7px] px-[15px] transition-all duration-500 hover:translate-y-[-4px] shadow-sm hover:shadow-slate-500 tracking-wide bg-red-700 text-white" onClick={()=>{
                            document.querySelector(".alert-parent").classList.remove("active");
                            dispatch(deleteCourse(course))
                        }}>Delete</button>
                        <button className="relative w-fit py-[7px] px-[15px] transition-all duration-500 hover:translate-y-[-4px] shadow-sm hover:shadow-slate-500 tracking-wide ml-7 bg-blue-500 text-white" onClick={()=>{
                            document.querySelector(".alert-parent").classList.remove("active")
                        }}>Decline</button>
                    </div>
                </div>
            </div>
        
        </>
    )
}