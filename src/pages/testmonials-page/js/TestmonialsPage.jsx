import { useEffect, useState } from "react"
import StudentOpinionCard from "../../../components/testmonial-page-components/student-opinion-card/js/StudentOpinioncard";
import SectionTitle from "../../../components/section-title/js/SectionTitle";
import StudentFedbackCard from "../../../components/testmonial-page-components/student-fedback-card/js/StudentFedback";
import { database } from "../../../project-api/Firebase";
import { onValue , ref } from "firebase/database";
import LoadingData from "../../../components/loading-data/js/LoadingData";
import headerImg from "../../../media/images/header-images/testmonials-header.webp"
import PageHeader from "../../../components/page-header/PageHeader";

export default function TestmonialsPage() {
    let [students , setStudents] = useState();
    let [loading , setLoading] = useState(true);
    useEffect(()=>{
        fetchData()
    },[]);
    let fetchData = ()=>{
        onValue(ref(database) , (snapshot)=>{
            let data = snapshot.val();
            let students = data.studentsOpinion;
            setStudents(students);
            setLoading(false)
        })
    }
    useEffect(() => window.scrollTo(0 , 0) , []);
    return (
        <>
            <PageHeader
            headerImg = {headerImg}
            headerLetters = {["T" , "e" , "s" , "t" , "m" , "o" , "n" , "i" , "a" , "l" , "s"]}
            headerDescription = {"Hear from our happy learners! Our testimonials showcase real experiences from students who have benefited from our courses."}
            />
            <div className="students-section relative w-full flex flex-col justify-center items-center">
                <SectionTitle title="Our Students Say" />
                <p className=" w-full lg:w-[500px] text-slate-400 text-center">Especially in the beginning. Dont waste your time going at it alone. As my mentee Chris put it. The sessions with Jascha.</p>
                <div className="students-container flex flex-wrap justify-center md:justify-between lg:justify-between items-center w-[90%] py-4 my-11">
                    {
                    loading ? <LoadingData/> :
                    students && students.map(student=>{
                        return (
                            <StudentOpinionCard
                            animate={"zoom-in"}
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
                            animate={"zoom-in"}
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