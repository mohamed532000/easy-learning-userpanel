import "../css/student-card.css";
import PropTypes from "prop-types";
StudentCard.propTypes = {
    studentImg : PropTypes.string.isRequired,
    studentName : PropTypes.string.isRequired,
    studentCourse : PropTypes.string.isRequired,
    studentInfo : PropTypes.string.isRequired,
    studentReview : PropTypes.number.isRequired
}
export default function StudentCard({studentImg , studentName , studentCourse , studentInfo , studentReview}) {
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
            <div className="student-card flex flex-col w-[270px] md:w-[300px] lg:w-[320px] justify-center items-center bg-indigo-950 text-white shadow-md shadow-slate-700 rounded-xl sm:mx-auto md:mx-0">
                <div className="student-img relative w-[100px] h-[100px] bg-slate-200 rounded-full mt-[-50px] border-[10px] border-solid border-white z-50 overflow-hidden">
                    <img loading="lazy"src={studentImg} alt="student-img" className="absolute top-0 left-0 w-full h-full"/>
                </div>
                <div className="student-info px-2 py-4 flex flex-col text-center my-2">
                    <h2 className="my-2 text-center text-2xl text-white">{studentName}</h2>
                    <p className="my-2 text-center text-xl text-white">{studentCourse}</p>
                    <p className="my-2 text-center text-white">{studentInfo}</p>
                </div>
                <div className="student-rate w-full flex justify-between items-center px-3 py-4 border-t border-solid border-slate-400">
                    {rate(<i className="fa-solid fa-star text-[orange]"></i> , <i className="fa-regular fa-star text-[orange]"></i> , studentReview)}
                    <div className="student-review flex items-center">
                        <p className="review-count mr-2 text-white">( {`${studentReview}.${0}`} )</p>
                        <p className="review-count text-white">Review</p>
                    </div>
                </div>
            </div>
        </>
    )
}