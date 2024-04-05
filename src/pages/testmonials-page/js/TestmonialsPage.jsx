import { useEffect, useState } from "react"
import StudentOpinionCard from "../../../components/testmonial-page-components/student-opinion-card/js/StudentOpinioncard";
import SectionTitle from "../../../components/section-title/js/SectionTitle";
import StudentFedbackCard from "../../../components/testmonial-page-components/student-fedback-card/js/StudentFedback";
import { database } from "../../../project-api/Firebase";
import { onValue , ref } from "firebase/database";
import LoadingData from "../../../components/loading-data/js/LoadingData";

export default function TestmonialsPage() {
    let [students , setStudents] = useState();
    let [loading , setLoading] = useState(true);
    useEffect(()=>{
        let tLetter = document.querySelector(".event-word .events-letter-t");
        let eLetter = document.querySelector(".event-word .events-letter-e");
        let sLetter = document.querySelector(".event-word .events-letter-s");
        let t2Letter = document.querySelector(".event-word .events-letter-t-2");
        let mLetter = document.querySelector(".event-word .events-letter-m");
        let oLetter = document.querySelector(".event-word .events-letter-o");
        let nLetter = document.querySelector(".event-word .events-letter-n");
        let iLetter = document.querySelector(".event-word .events-letter-i");
        let aLetter = document.querySelector(".event-word .events-letter-a");
        let lLetter = document.querySelector(".event-word .events-letter-l");
        let s2Letter = document.querySelector(".event-word .events-letter-s-2");

        fetchData()
        function handelScroll(){
            tLetter.style.transform = `translateY(${-window.scrollY}px)`;
            eLetter.style.transform = `translateY(${-window.scrollY-20}px)`;
            sLetter.style.transform = `translateY(${-window.scrollY}px)`;
            t2Letter.style.transform = `translateY(${-window.scrollY-20}px)`;
            mLetter.style.transform = `translateY(${-window.scrollY-30}px)`;
            oLetter.style.transform = `translateY(${-window.scrollY}px)`;
            nLetter.style.transform = `translateY(${-window.scrollY-25}px)`;
            iLetter.style.transform = `translateY(${-window.scrollY-20}px)`;
            aLetter.style.transform = `translateY(${-window.scrollY}px)`;
            lLetter.style.transform = `translateY(${-window.scrollY-40}px)`;
            s2Letter.style.transform = `translateY(${-window.scrollY-10}px)`;
            if(window.scrollY === 0) {
                tLetter.style.transform = `translateY(0)`;
                eLetter.style.transform = `translateY(0)`;
                sLetter.style.transform = `translateY(0)`;
                t2Letter.style.transform = `translateY(0)`;
                mLetter.style.transform = `translateY(0)`;
                oLetter.style.transform = `translateY(0)`;
                nLetter.style.transform = `translateY(0)`;
                iLetter.style.transform = `translateY(0)`;
                aLetter.style.transform = `translateY(0)`;
                lLetter.style.transform = `translateY(0)`;
                s2Letter.style.transform = `translateY(0)`;
            }
        }
        window.addEventListener("scroll" , handelScroll);
        return ()=>window.addEventListener("scroll" , handelScroll);
    },[]);
    let fetchData = ()=>{
        onValue(ref(database) , (snapshot)=>{
            let data = snapshot.val();
            let students = data.studentsOpinion;
            setStudents(students);
            setLoading(false)
        })
    }
    return (
        <>
            <div className="header w-full bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-no-repeat bg-cover bg-center after:absolute after:w-full after:h-full after:bg-black after:opacity-40 flex justify-center items-center h-[100vh]">
                    <div className="header z-20 w-full md:w-[50%] lg:w-[50%] text flex flex-col justify-center items-center">
                        <h2 className="event-word text-white text-center text-4xl md:text-7xl lg:text-7xl mb-5 tracking-[10px]">
                            <span className="relative inline-block transition-all duration-500 ease-linear events-letter-t">T</span>
                            <span className="relative inline-block transition-all duration-500 ease-linear events-letter-e">E</span>
                            <span className="relative inline-block transition-all duration-500 ease-linear events-letter-s">S</span>
                            <span className="relative inline-block transition-all duration-500 ease-linear events-letter-t-2">T</span>
                            <span className="relative inline-block transition-all duration-500 ease-linear events-letter-m">M</span>
                            <span className="relative inline-block transition-all duration-500 ease-linear events-letter-o">O</span>
                            <span className="relative inline-block transition-all duration-500 ease-linear events-letter-n">N</span>
                            <span className="relative inline-block transition-all duration-500 ease-linear events-letter-i">I</span>
                            <span className="relative inline-block transition-all duration-500 ease-linear events-letter-a">A</span>
                            <span className="relative inline-block transition-all duration-500 ease-linear events-letter-l">L</span>
                            <span className="relative inline-block transition-all duration-500 ease-linear events-letter-s-2">S</span>
                        </h2>
                        <p className="my-3 leading-7 text-white text-center">Join a vibrant community of learners from around the world. Our events bring together diverse voices, experiences, and cultures, creating an enriching tapestry of ideas and insights that will broaden your horizons.</p>
                    </div>
            </div>
            <div className="students-section relative w-full flex flex-col justify-center items-center">
                <SectionTitle title="Our Students Say" />
                <p className=" w-full lg:w-[500px] text-slate-400 text-center">Especially in the beginning. Dont waste your time going at it alone. As my mentee Chris put it. The sessions with Jascha.</p>
                <div className="students-container flex flex-wrap justify-center md:justify-between lg:justify-between items-center w-[90%] py-4 my-11">
                    {
                    loading ? <LoadingData/> :
                    students && students.map(student=>{
                        return (
                            <StudentOpinionCard
                            key={student.id}  
                            studentName={student.studentName}
                            studenImg={student.studentImg}
                            studentCourse={student.studentCourse}
                            studentSay={student.studentSay}
                            studentRateCount={student.studentRateCount}
                        />
                        )
                    })}
                </div>
                <SectionTitle title="Students FeedBack" />
                <div className="students-feedback-container relative w-[90%] flex flex-wrap justify-center lg:justify-between items-center py-4 my-11">
                {
                loading ? <LoadingData/> :
                students && students.map(student=>{
                        return (
                            <StudentFedbackCard
                            key={student.id}  
                            studentName={student.studentName}
                            studenImg={student.studentImg}
                            studentCourse={student.studentCourse}
                            studentSay={student.studentSay}
                            studentSay2={student.studentSay2}
                            studentRateCount={student.studentRateCount}
                        />
                        )
                    })}
                </div>
            </div>
        
        
        </>
    )
}