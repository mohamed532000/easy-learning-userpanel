import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import InstructorCard from "../../../components/instructors-page-components/instructor-card/js/InstructorCard";
import { useLocation } from "react-router-dom";
import { database } from "../../../project-api/Firebase";
import { onValue , ref } from "firebase/database";
export default function AboutInstructorPage(){
    let params = useParams();
    let location = useLocation();
    let [pathName , setPathName] = useState("")
    let [instructorData , setInstractorData] = useState()
    useEffect(()=>{
        let getData = ()=>{
            let path = (`${location.pathname.split("").slice(0,location.pathname.length-1).join("")}`).split("").map(letter => {
                return letter === "/" ? " > " : letter;
            }).join("");
            onValue(ref(database) , (snapshot)=>{
                let data = snapshot.val();
                let instructors = data.instructors;
                let instructor = instructors.filter(instruc=>{
                    return instruc.id === parseInt(params.instructorId);
                });
                setInstractorData(...instructor)
                setPathName(`Home ${path} ${instructor[0].instructorName}`);
            })
        }
        getData();
    },[location.pathname , params.instructorId]);
    return (
        <>
            <div className="header w-full bg-[url('https://educal-react.vercel.app/_next/static/media/page-title-2.464b018b.jpg')] bg-no-repeat bg-cover bg-center after:absolute after:w-full after:h-full after:bg-black after:opacity-40 flex justify-center items-center h-[100vh]">
                    <div className="header z-20 w-full md:w-[50%] lg:w-[50%] text flex flex-col justify-center items-center">
                        <h2 className="event-word text-white text-center text-2xl md:text-7xl lg:text-4xl mb-5 tracking-[10px] md:tracking-[10px] lg:tracking-[10px] lg:font-bold">
                            Instructor Details
                        </h2>
                        <p className="my-3 leading-7 text-white text-center">{pathName}</p>
                    </div>
            </div>
            <div className="about-instructor-section py-[100px] flex justify-center items-center">
                <div className="info-container w-[90%] flex flex-col md:flex-row lg:flex-row justify-center md:justify-between lg:justify-between items-center md:items-start lg:items-start">
                    <div className="col flex relative flex-col w-full md:w-auto lg:w-auto justify-center items-center">
                        {instructorData &&                        
                        <InstructorCard
                            instructorId={instructorData.id}instructorData
                            instructorImg={instructorData.instructorImg}
                            instructorName={instructorData.instructorName}
                            course = {instructorData.course}
                            instructorEmail = {instructorData.email}
                            instructorLink = {false}
                        />
                        }
                        <div className="flex flex-col justify-center w-full rounded-xl items-center  p-3 shadow-md shadow-slate-300">
                            {instructorData &&
                            <>
                            <div className="row flex justify-between items-center my-3 relative w-full p-2">
                                <h2 className="text-xl">Total Course</h2>
                                <h2 className="text-xl text-orange-500">{instructorData["total course"]}</h2>
                            </div>
                            <div className="row flex justify-between items-center my-3 relative w-full p-2">
                                <h2 className="text-xl">Ratings</h2>
                                <h2 className="text-xl text-orange-500">{instructorData.ratings}</h2>
                            </div>
                            <div className="row flex justify-between items-center my-3 relative w-full p-2">
                                <h2 className="text-xl">Experiences</h2>
                                <h2 className="text-xl text-orange-500">{instructorData.experiences}</h2>
                            </div>
                            <div className="row flex justify-between items-center my-3 relative w-full p-2">
                                <h2 className="text-xl">Grauduated</h2>
                                <h2 className="text-xl text-orange-500">{instructorData.grauduated}</h2>
                            </div>
                            <div className="row flex justify-between items-center my-3 relative w-full p-2">
                                <h2 className="text-xl">Language</h2>
                                <h2 className="text-xl text-orange-500">{instructorData.language}</h2>
                            </div>
                            </>
                            }
                        </div>
                    </div>
                    <div className="instructor-info ml-2 flex flex-col justify-start items-center ">
                        {instructorData &&
                            <>
                                <div className="row flex flex-col my-3 px-4 text-center md:text-left lg:text-left">
                                    <h2 className="text-2xl my-4 font-bold tracking-wide">About {instructorData.instructorName}</h2>
                                    <p className="text-[17px]">{instructorData.otherInfo}</p>
                                    <br />
                                    <p className="text-[17px]">{instructorData.otherInfo}</p>
                                </div>
                                <div className="row flex flex-col my-3 px-4 text-center md:text-left lg:text-left">
                                    <h2 className="text-2xl my-4 font-bold tracking-wide">Certification</h2>
                                    <p className="text-[17px]">{instructorData.certification}</p>
                                    <br />
                                    <p className="text-[17px]">{instructorData.certification}</p>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>

        </>
    )
}