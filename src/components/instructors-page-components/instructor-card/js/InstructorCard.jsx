import "../css/instructor-card.css"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
InstructorCard.propTypes = {
    instructorId : PropTypes.number.isRequired,
    instructorImg : PropTypes.string.isRequired,
    instructorName : PropTypes.string.isRequired,
    course : PropTypes.string.isRequired,
    instructorEmail : PropTypes.string.isRequired,
    instructorLink : PropTypes.bool.isRequired
}

export default function InstructorCard({instructorId , instructorImg , instructorName , course , instructorEmail , instructorLink}) {
    return (
        <>
            <div className="instructor-card w-full md:w-auto lg:w-auto overflow-hidden pt-5 mb-4 bg-slate-100 relative flex flex-col justify-center items-center rounded-lg bg-gradient-to-tr from-[#059095] to-[#8988f4] shadow-md shadow-stone-800">
                <span className="absolute top-4 left-[50%] translate-x-[-50%] w-[50px] h-[10px] rounded-md bg-gradient-to-tr from-[#1e1a1f] to-[#2b0daa]"></span>
                <div className="logo relative mt-5 w-[100px]">
                    <img loading="lazy"src="https://asset.uibucket.net/html/ilearning/assets/images/icons/footer-logo.svg" alt="logo" />
                </div>
                <div className="instructor-img relative w-[90px] h-[90px] rounded-full overflow-hidden my-8">
                    <img loading="lazy"src={instructorImg} alt="instructor-img" className="absolute top-0 left-0 w-full h-full" />
                </div>
                <img loading="lazy"src="https://pngimg.com/uploads/qr_code/qr_code_PNG10.png" alt="qr-code" className="instructor-qr-code transition-all duration-500 absolute bottom-[50px] left-[50%] translate-x-[-50%] w-[100px] h-[100px]"/>
                <div className="instructor-info relative w-[350px] flex flex-col justify-center items-center bg-slate-500 rounded-t-[50%] opacity-0 bottom-[-50px] transition-all duration-500 bg-gradient-to-tl from-[#3949AB] to-[#019aa8] border-t-2 border-white py-3">
                    <h2 className="instructor-name my-2 text-white text-sm md:text-[17px] lg:text-[17px] translate-y-[5px] opacity-0 transition-all duration-500 delay-[.8s]" style={{"i" : "1s"}}>{instructorName}</h2>
                    <h2 className="instructor-course my-2 text-white text-sm md:text-[17px] lg:text-[17px] translate-y-[5px] opacity-0 transition-all duration-500 delay-[.6s]" style={{"i" : ".7s"}}>{course}</h2>
                    <h2 className="instructor-email my-2 text-white text-sm md:text-[17px] lg:text-[17px] translate-y-[5px] opacity-0 transition-all duration-500 delay-[.4s]" style={{"i" : ".5s"}}>{instructorEmail}</h2>
                </div>
                {instructorLink && <Link to={`/about-instructor/${instructorId}`} className="absolute w-full h-full top-0 left-0"></Link>}
            </div>
        </>
    )
}