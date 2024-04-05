import "../css/course-card.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import GoBtn from "../../go-btn/js/GoBtn";
CourseCard.propTypes = {
    courseId : PropTypes.number.isRequired,
    courseImg : PropTypes.string.isRequired,
    courseLevel : PropTypes.string.isRequired,
    courseCategory : PropTypes.string.isRequired,
    courseTitle : PropTypes.string.isRequired,
    courseInfo : PropTypes.string.isRequired,
    coursePrice : PropTypes.number.isRequired,
    rateCount : PropTypes.number.isRequired,
    rate : PropTypes.bool.isRequired,
}
export default function CourseCard({courseId , courseImg , courseLevel , courseCategory , courseTitle , courseInfo , coursePrice , rateCount}) {
    function rate(star , emtyStar , rating) {
        let rateCount = 5-rating;
        let stars = [];
        let emptyStars = []
        for(let i=0; i<rating; i++) {
            stars.push(<div key={`${i}`}>{star}</div>)
        }
        for(let i=0; i<rateCount; i++) {
            emptyStars.push(<div key={`${i}`}>{emtyStar}</div>)
        }
        return(
            <div className="flex">
                {stars}{emptyStars}
            </div>
        )
    }
    return (
        <>
            <div className="course-card sm2:w-full h-fit sm:w-[400px] md:w-[280px]  mb-5 shadow-md shadow-slate-200 relative overflow-hidden flex flex-col">
                <div className="course-img relative overflow-hidden sm:w-full h-[170px]">
                    <img loading="lazy"src={courseImg} alt="course-img" className="absolute top-0 left-0 w-full h-full transition-all duration-700" />
                    <Link to={`/about-course/${courseId}`} className="absolute top-0 left-0 w-full h-full"></Link>
                </div>
                <div className="course-info px-2 relative w-full  flex flex-col justify-start items-start">
                    <h2 className="course-title bg-blue-300 text-blue-600 rounded-sm px-[4px] py-[2px] mt-[10px]">{courseLevel}</h2>
                    <h2 className="course-cat text-blue-500 font-bold tracking-wide my-[2px]">{courseCategory}</h2>
                    <h2 className="course-title my-[2px] text-xl font-bold">{courseTitle}</h2>
                    <p className="course-info my-[2px] text-gray-500">{courseInfo}</p>
                    <p className={`course-price my-[2px] text-xl font-bold tracking-wide ${typeof coursePrice === "number" ? "text-orange-500" : "text-slate-500"}`}>{coursePrice}{typeof coursePrice === "number" && "$"}</p>
                </div>
                <div className="course-rate flex justify-between items-center px-2 py-2 mt-2 border-t border-slate-300">
                    {
                        rate 
                    && 
                    rate(
                    <i className="fa-solid fa-star text-sm text-[orange]"></i> ,
                    <i className="fa-regular fa-star text-sm text-[orange]"></i> ,
                    rateCount
                    )}
                    <p className="rate-count text-orange-500 ml-2 text-xl">({rateCount}.0)</p>
                    <GoBtn btnText="Details" btnPath={`about-course/${courseId}`}/>
                </div>
            </div>
        </>
    )
}