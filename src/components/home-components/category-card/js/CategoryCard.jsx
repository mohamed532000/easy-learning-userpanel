import PropTypes from "prop-types";
import { Link } from "react-router-dom";
CategoryCard.propTypes = {
    cardImg: PropTypes.string.isRequired,
    categoryTitle: PropTypes.string.isRequired,
    coursesCount: PropTypes.number.isRequired,
};
export default function CategoryCard({cardImg , categoryTitle , coursesCount}){
    return (
        <>
            <div className="relative mx-auto md:mx-0 lg:mx0 shadow-md shadow-slate-300 flex flex-col justify-center items-center w-[200px] py-5 rounded-lg transition-all duration-500 hover:translate-y-[-3px]">
                <div className="card-img my-2 flex justify-center items-center bg-slate-200 p-4 rounded-full">
                    <img loading="lazy"src={cardImg} alt="card-img" className="w-[20px]"/>
                </div>
                <div className="card-info flex flex-col justify-center items-center">
                    <h2 className=" text-xl my-1">{categoryTitle}</h2>
                    <p>{coursesCount} Courses</p>
                </div>
                <Link to="/courses-page" className="absolute top-0 left-0 w-full h-full"></Link>
            </div>
        </>
    )
}