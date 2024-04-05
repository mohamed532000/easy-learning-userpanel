import { useEffect, useState } from "react";
import InstructorCard from "../../../components/instructors-page-components/instructor-card/js/InstructorCard";
import PageHeading from "../../../components/page-heading/js/PageHeading";
import SectionTitle from "../../../components/section-title/js/SectionTitle";
import { database } from "../../../project-api/Firebase";
import { onValue, ref } from "firebase/database";
import LoadingData from "../../../components/loading-data/js/LoadingData";


export default function InstructorsPage() {
    let [instructorsList , setInstractorList] = useState();
    let [loading , setLoading] = useState(true)
    useEffect(()=>{
        onValue(ref(database) , snapShot=>{
            let d = snapShot.val();
            setInstractorList(d.instructors);
            setLoading(false)
        });
    },[])
    return (
        <>
            <PageHeading headingImgSrc="https://asset.uibucket.net/html/ilearning/assets/images/banner/instructor.png"/>
            <div className="instructors-section relative w-full flex flex-col justify-center items-center bg-gradient-to-tr from-[#1e1a1f] to-[#2b0daa]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,160L26.7,170.7C53.3,181,107,203,160,213.3C213.3,224,267,224,320,224C373.3,224,427,224,480,213.3C533.3,203,587,181,640,160C693.3,139,747,117,800,112C853.3,107,907,117,960,112C1013.3,107,1067,85,1120,96C1173.3,107,1227,149,1280,149.3C1333.3,149,1387,107,1413,85.3L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
                <SectionTitle title="Contact With Our Team" />
                <div className="instructors-container w-[90%] flex flex-wrap justify-center md:justify-between items-center gap-3 my-5 py-3">
                {
                loading ? <LoadingData/> :
                instructorsList && instructorsList.map((instructor)=>{
                    return (
                        <InstructorCard key={instructor.id}
                            instructorId={instructor.id}
                            instructorImg={instructor.instructorImg}
                            instructorName={instructor.instructorName}
                            course = {instructor.course}
                            instructorEmail = {instructor.email}
                            instructorLink = {true}
                        />
                    )
                })}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,160L26.7,170.7C53.3,181,107,203,160,213.3C213.3,224,267,224,320,224C373.3,224,427,224,480,213.3C533.3,203,587,181,640,160C693.3,139,747,117,800,112C853.3,107,907,117,960,112C1013.3,107,1067,85,1120,96C1173.3,107,1227,149,1280,149.3C1333.3,149,1387,107,1413,85.3L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
            </div>
        </>
    )
}