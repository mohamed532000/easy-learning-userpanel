import PropTypes from "prop-types";
import Image from "../../../image/Image";
StudentFedbackCard.propTypes = {
    studenImg : PropTypes.string.isRequired,
    studentName : PropTypes.string.isRequired,
    studentCourse : PropTypes.string.isRequired,
    studentSay : PropTypes.string.isRequired,
    studentSay2 : PropTypes.string.isRequired,
    studentRateCount : PropTypes.number.isRequired,
}
export default function StudentFedbackCard({studenImg , studentName , studentCourse , studentSay , studentSay2 , studentRateCount , animate}) {
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
            <div data-aos={animate ? animate : ""} className="student-card flex flex-col w-[500px] m-2 rounded-md shadow-md shadow-slate-300 p-3">
                <div className="flex flex-col py-3">
                <div className="student-fedback py-4">
                    <p title={studentSay2} className="text-2xl tracking-wide text-slate-600 font-bold">{studentSay2?.length >= 30 ? `${studentSay2?.slice(0 , 30)}...` : studentSay2}!</p>
                </div>
                <div className="rating-div flex justify-between items-center p-2 border-t border-slate-400">
                    {rate(<i className="fa-solid fa-star text-orange-500"></i> , <i className="fa-regular fa-star text-orange-500"></i> , studentRateCount)}
                    <p>({`${studentRateCount}.${0}`}) Review</p>
                </div>
                <p title={studentSay} className="text-xl text-slate-500 inline-block my-2">{studentSay?.length >= 40 ? `${studentSay?.slice(0 , 40)}...` : studentSay}</p>
                </div>
                <div className="card-footer flex my-2 items-center">
                    <div className="student-img relative rounded-full overflow-hidden w-[100px] h-[100px]">
                        <Image src={studenImg} alt={"student-img"} title={"student-img"} classContent={"h-full w-full"}/>
                    </div>
                    <div className="name-and-course flex flex-col mx-2">
                        <h2 className="mb-2 font-bold text-2xl tracking-wide text-neutral-600">{studentName}</h2>
                        <h2>{studentCourse}</h2>
                    </div>
                </div>
            </div>
        
        </>
    )
}