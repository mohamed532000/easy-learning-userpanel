import "../css/home-page.css";
import 'swiper/css';
import 'swiper/css/pagination';
import courseImg from "../../../media/images/online-education.png"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Swiper , SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import DarkBtn from "../../../components/purple-btn/js/DarkBtn";
import ImgIcon from "../../../components/img-icon/js/ImgIcon";
import StudentCard from "../../../components/home-components/student-say-card/js/StudentCard";
import SectionTitle from "../../../components/section-title/js/SectionTitle";
import CourseCard from "../../../components/course-card/js/CourseCard";
import emptyState from "../../../media/images/empty-state.png";
import { database } from "../../../project-api/Firebase";
import { onValue , ref } from "firebase/database";
import LoadingData from "../../../components/loading-data/js/LoadingData";
import heroBg from "../../../media/images/hero-bg.webp";
import st1Img from "../../../media/images/st1.webp";
import st2Img from "../../../media/images/st2.webp";
import st3Img from "../../../media/images/st3.webp";
import girlSt1Img from "../../../media/images/girl-st1.webp";
import girlSt2Img from "../../../media/images/girl-st2.webp";

export default function HomePage() {
    let [allCourses , setAllCourses] = useState([])
    let [allCoursesCategories , setAllCoursesCategories] = useState([])
    let [catFilter , setCatFilter] = useState();
    let [filtredCourses , setFiltredCourses] = useState([]);
    let [allCategoriesOfTopRated , setAllCategoriesOfTopRated] = useState([]);
    let [loading , setLoading] = useState(true);
    let params = {
        breakpoints: {
            200 : {
                slidesPerView : 1,
            },
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    }
    useEffect(()=>{
        let header = document.querySelector(".header");
        let headerTitle = document.querySelector(".header-text > h2");
        let headerSpan = document.querySelector(".header-text > h2 > span");
        let headerInfo = document.querySelector(".header-text > p");
        let startBtn = document.querySelector(".start-btn");
        let browseBtn = document.querySelector(".browse-btn");
        let hanndelScroll = ()=>{
            header.style.borderBottomLeftRadius = `${window.scrollY}px`;
            header.style.borderBottomRightRadius = `${window.scrollY}px`;
            headerTitle.style.transform = `translateY(${-window.scrollY}px)`;
            headerSpan.style.transform = `translateY(${-window.scrollY-20}px)`;
            headerInfo.style.transform = `translateY(${-window.scrollY-10}px)`;
            startBtn.style.transform = `translateY(${-window.scrollY-20}px)`;
            browseBtn.style.transform = `translateY(${-window.scrollY}px)`;
            if(window.scrollY === 0) {
                headerTitle.style.transform = `translateY(0)`;
                headerSpan.style.transform = `translateY(0)`;
                headerInfo.style.transform = `translateY(0)`;
                startBtn.style.transform = `translateY(0)`;
                browseBtn.style.transform = `translateY(0)`;
            }
        }
        window.addEventListener("scroll" , hanndelScroll);
        return (
            window.addEventListener("scroll" , hanndelScroll)
        );
    },[])

    useEffect(()=>{
        let fetchData = ()=>{
            onValue(ref(database) , (snapshot)=>{
                let data = snapshot.val();
                let courses = data.courses;
                setAllCourses(courses)
                setLoading(false)
                let categories = courses.map(course=>{
                    return course.overview.category
                })
                setAllCoursesCategories(Array.from(new Set(categories)));

                let topCourses = courses.filter(course => {
                    return course.overview.rating > 4
                });
                let filtred = topCourses && topCourses.filter(course => {
                    return (!catFilter || course.overview.category === catFilter);
                })
                setFiltredCourses(filtred);
                let allCategoriesOfTopRated = topCourses && topCourses.map(course => {
                    return course.overview.category
                });
                setAllCategoriesOfTopRated(Array.from(new Set(allCategoriesOfTopRated)))
            })
        }
        fetchData()
        let categoriseTopRatedCourses = document.querySelectorAll(".filter-top-rated-courses-list li");
        categoriseTopRatedCourses.forEach(category => {
            category.onclick = ()=>{
                categoriseTopRatedCourses.forEach(category => {
                    category.classList.remove("active");
                });
                category.classList.add("active")
            }
        })
    },[catFilter]);
    useEffect(() => window.scrollTo(0 , 0) , []);
    return (
        <>
            <div className={`header relative h-[100vh] w-full bg-center bg-no-repeat bg-cover  flex justify-center items-center`} style={{backgroundImage : `url("${heroBg}")`}}>
                <div className="container-div relative w-[90%] flex justify-center items-center">
                    <div className="header-text w-[800px] flex flex-col text-center">
                        <h2 className="text-3xl md:text-5xl lg:text-5xl transition duration-500 ease-linear font-bold my-5 text-white">
                            Grow your <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-500 inline-block">skills</span> to advance your career path.
                        </h2>
                        <p className="text-white transition-all duration-500 ease-linear text-sm">iLearning is a Global training provider based across the UK that specialises in accredited.</p>
                        <div className="header-btns flex justify-center items-center my-10">
                            <Link to="/" className="start-btn relative overflow-hidden py-2 px-3 md:py-3 lg:py-3 md:px-4 lg:px-4 rounded bg-white mx-2 transition-all duration-500 ease-linear hover:bg-slate-900 hover:text-white hover:shadow-md hover:shadow-black">
                                <p className="relative z-20 text-sm">Get Started</p>
                            </Link>
                            <Link to="/" className="relative overflow-hidden py-2 px-3 md:py-3 lg:py-3 md:px-4 lg:px-4 rounded bg-slate-50 mx-2 transition-all duration-500 ease-linear bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-md shadow-black browse-btn">
                                <p className="relative z-20 text-sm">Browse Courses</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="explore-courses relative w-full flex flex-col justify-between items-center my-8">
                <SectionTitle title="Explore Our Categories"/>
                <div className="cards-container py-5 mt-16 relative w-[90%] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 text-center gap-8 overflow-hidden">
                    {allCoursesCategories && allCoursesCategories.map((cat , index) =>{
                        let coursesOfThisCat = allCourses && allCourses.filter(course=>{
                            return course.overview.category === cat;
                        })
                        return (
                            <div data-aos="zoom-in-up" key={index} className="relative mx-auto md:mx-0 lg:mx0 shadow-md shadow-slate-300 flex flex-col justify-center items-center w-[200px] py-5 rounded-lg transition-all duration-500 hover:translate-y-[-3px]">
                                <div className="card-img my-2 flex justify-center items-center bg-slate-200 p-4 rounded-full">
                                <img loading="lazy" src={courseImg} alt="card-img" className="w-[20px] h-[20px]"/>
                                </div>
                                <div className="card-info flex flex-col justify-center items-center">
                                    <h2 className="text-xl my-1 mx-1">{cat}</h2>
                                    <p>{coursesOfThisCat.length} {coursesOfThisCat.length > 1 ? 'courses' : 'course'}</p>
                                </div>
                                <Link to="/courses-page" className="absolute top-0 left-0 w-full h-full"></Link>
                            </div>
                        )
                    })}
                </div>
                <div className="offer-container w-[90%] flex flex-col justify-center items-center md:flex-col lg:flex-row md:justify-center lg:justify-between md:items-center lg:items-center py-[50px] my-[50px]">
                    <div data-aos="fade-left" className="offer-img relative w-[90%] md:w-[400px] lg:w-[400px] mb-10 md:mb-0 lg:mb-0 h-[500px] md:h-[500px] lg:h-400px">
                        <img loading="lazy"src="https://asset.uibucket.net/html/ilearning/assets/images/home-1/advisor.png" alt="personal img" className="absolute top-0 left-0 w-full h-full"/>
                        <ImgIcon styleClasses="absolute top-[50px] bg-slate-100 rotate-[-10deg]" iconImgSrc="https://asset.uibucket.net/html/ilearning/assets/images/home-1/advisor-sm-1.svg"/>
                    </div>
                    <div data-aos="fade-right" className="offer-text relative w-[90%] md:w-[500px] lg:w-[500px]">
                        <h2 className="offer-title text-3xl">We Offering Live Coaching by Skilled Advisors</h2>
                        <p className="my-5">Education also provides educational consulting services for student- clients who want to study in Canada, and require help with the application process.</p>
                        <p className="mt-10">Consulting services for student- clients who want to study in Canada, and require help with the application process.</p>
                        <div className="read-more-div flex flex-col justify-start items-start my-3">
                            <div className="flex justify-start items-center w-full my-2">
                                <div className="img-div mr-2 bg-slate-400 p-2 rounded-full">
                                    <img loading="lazy"src="https://asset.uibucket.net/html/ilearning/assets/images/icons/tick.svg" alt="correct-img" className="w-[20px] h-[20px]"/>
                                </div>
                                <h2>Industry Expert Instructor</h2>
                            </div>
                            <div className="flex justify-start items-center w-full my-2">
                                <div className="img-div mr-2 bg-slate-400 p-2 rounded-full">
                                    <img loading="lazy"src="https://asset.uibucket.net/html/ilearning/assets/images/icons/tick.svg" alt="correct-img" className="w-[20px] h-[20px]"/>
                                </div>
                                <h2>Industry Expert Instructor</h2>
                            </div>
                            <DarkBtn btnText="Read More" pathname="/"/>
                        </div>
                    </div>
                </div>
                <div className="offer-container overflow-hidden w-[90%] flex flex-col justify-center items-center md:flex-col lg:flex-row md:justify-center lg:justify-between md:items-center lg:items-center py-[50px] my-[50px]">
                    <div data-aos="fade-right" className="offer-text relative w-[90%] md:w-[500px] lg:w-[500px]">
                        <h2 className="offer-title text-3xl">One Platfrom Many Courses and E-book For Yous</h2>
                        <p className="my-5">Education also provides educational consulting services for student- clients who want to study in Canada, the application process.</p>
                        <p className="mt-10">Provides educational consulting services for student- clients who want to study in require help with the application process.</p>
                        <div className="read-more-div flex flex-col justify-start items-start my-3">
                            <div className="flex justify-start items-center w-full my-2">
                                <div className="img-div mr-2 bg-slate-400 p-2 rounded-full">
                                    <img loading="lazy"src="https://asset.uibucket.net/html/ilearning/assets/images/icons/tick.svg" alt="correct-img" className="w-[20px] h-[20px]"/>
                                </div>
                                <h2>Easy Online Learning Platform</h2>
                            </div>
                            <div className="flex justify-start items-center w-full my-2">
                                <div className="img-div mr-2 bg-slate-400 p-2 rounded-full">
                                    <img loading="lazy"src="https://asset.uibucket.net/html/ilearning/assets/images/icons/tick.svg" alt="correct-img" className="w-[20px] h-[20px]"/>
                                </div>
                                <h2>Friendly Enviroments & Teachers</h2>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="offer-img relative w-[90%] md:w-[400px] lg:w-[400px] mb-10 md:mb-0 lg:mb-0 h-[500px] md:h-[450px] lg:h-450px">
                        <img loading="lazy"src="https://pngimg.com/uploads/thinking_man/thinking_man_PNG11606.png" alt="personal img" className="absolute top-0 left-0 w-full h-full"/>
                        <ImgIcon styleClasses="absolute top-[50px] bg-slate-100 rotate-[-10deg]" iconImgSrc="https://asset.uibucket.net/html/ilearning/assets/images/icons/ebook-sm-1.svg"/>
                        <div className="absolute w-full md:w-[250px] lg:w-[250px] py-2 px-2 bottom-[10px] right-[10px] rounded bg-white flex justify-start items-center">
                            <ImgIcon styleClasses="bg-[#e2cff8]" iconImgSrc="https://asset.uibucket.net/html/ilearning/assets/images/icons/ebook-sm-1.svg"/>
                            <h2 className="ml-[20px] text-2xl">Book Shop</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="choose-us-section relative w-full flex flex-col justify-center items-center my-8">
                <SectionTitle title="Why Choose Us" />
                <div className="choose-us-container w-[90%] flex flex-col md:flex-row lg:flex-row justify-between items-center py-5 my-5">
                    <div data-aos="fade-left" className="choose-img relative w-full md:w-[400px] lg:w-[400px] h-[450px]">
                        <img loading="lazy"src="https://asset.uibucket.net/html/ilearning/assets/images/choose-us.png" alt=""  className="absolute w-full h-full top-0 left-0"/>
                        <ImgIcon styleClasses="absolute z-10 right-[20px] bg-[#272f62] rounded-full" iconImgSrc="https://asset.uibucket.net/html/ilearning/assets/images/icons/question-mark.svg" />
                    </div>
                    <div data-aos="fade-right" className="choose-text flex flex-col w-full md:w-[500px] lg:w-[500px]">
                        <div className="text-box transition-all duration-500 hover:translate-x-1 flex flex-col md:flex-row lg:flex-row text-center md:text-left lg:text-left items-center p-4 rounded-lg shadow-sm shadow-slate-400 my-4">
                            <ImgIcon styleClasses="bg-red-200" iconImgSrc="https://asset.uibucket.net/html/ilearning/assets/images/icons/choose-us-1.svg"/>
                            <div className="text-content relative ml-0 md:ml-[30px] lg:ml-[30px] mt-4 md:mt-0 lg:mt-0 flex flex-col">
                                <h2 className="text-xl font-bold text-slate-800">Expert Instructor</h2>
                                <p className="my-3">Convallis vivamus at cras porta nibh velit quis nostrud exercitation ullamco.s</p>
                            </div>
                        </div>
                        <div className="text-box transition-all duration-500 hover:translate-x-1 flex flex-col md:flex-row lg:flex-row text-center md:text-left lg:text-left items-center p-4 rounded-lg shadow-sm shadow-slate-400 my-4">
                            <ImgIcon styleClasses="bg-red-200" iconImgSrc="https://asset.uibucket.net/html/ilearning/assets/images/icons/choose-us-2.svg"/>
                            <div className="text-content relative ml-0 md:ml-[30px] lg:ml-[30px] mt-4 md:mt-0 lg:mt-0 flex flex-col">
                                <h2 className="text-xl font-bold text-slate-800">Flexible Learning</h2>
                                <p className="my-3">Convallis vivamus at cras porta nibh velit quis nostrud exercitation ullamco.s</p>
                            </div>
                        </div>
                        <div className="text-box transition-all duration-500 hover:translate-x-1 flex flex-col md:flex-row lg:flex-row text-center md:text-left lg:text-left items-center p-4 rounded-lg shadow-sm shadow-slate-400 my-4">
                            <ImgIcon styleClasses="bg-red-200" iconImgSrc="https://asset.uibucket.net/html/ilearning/assets/images/icons/choose-us-3.svg"/>
                            <div className="text-content relative ml-0 md:ml-[30px] lg:ml-[30px] mt-4 md:mt-0 lg:mt-0 flex flex-col">
                                <h2 className="text-xl font-bold text-slate-800">Educator Support</h2>
                                <p className="my-3">Convallis vivamus at cras porta nibh velit quis nostrud exercitation ullamco.s</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
            <div className="student-say-section flex flex-col justify-center items-center">
                <SectionTitle animate={"fade-down"} title="Our Students Say" />
                <div data-aos="fade-up" className="students-sayes-container w-[90%] py-3">
                    <Swiper
                        className="parent-of-slides"
                        {...params}
                        slidesPerView={3}
                        navigation
                        modules={[Pagination , Navigation]}
                        pagination = {{clickable : true}}
                        spaceBetween={80}
                        speed={1000}
                        >
                        <SwiperSlide className="slide py-[70px] flex justify-center reviews-card-swiper-slide">
                            <StudentCard 
                                studentImg={st1Img}
                                studentCourse="UX/UI Student"
                                studentName="Johny"
                                studentInfo="Provides educational consulting services for student- clients who want to study in
                                Canada with the application process."
                                studentReview={4} />
                        </SwiperSlide>
                        <SwiperSlide className="slide py-[70px] flex justify-center reviews-card-swiper-slide">
                            <StudentCard 
                                studentImg={st2Img}
                                studentCourse="UX/UI Student"
                                studentName="Moustafa Osama"
                                studentInfo="Provides educational consulting services for student- clients who want to study in
                                Canada with the application process."
                                studentReview={5} />
                        </SwiperSlide>
                        <SwiperSlide className="slide py-[70px] flex justify-center reviews-card-swiper-slide">
                            <StudentCard 
                                studentImg={st3Img}
                                studentCourse="UX/UI Student"
                                studentName="Reda Khaled"
                                studentInfo="Provides educational consulting services for student- clients who want to study in
                                Canada with the application process."
                                studentReview={5} />
                        </SwiperSlide>
                        <SwiperSlide className="slide py-[70px] flex justify-center reviews-card-swiper-slide">
                            <StudentCard 
                                studentImg={girlSt1Img}
                                studentCourse="UX/UI Student"
                                studentName="Nada Ahmed"
                                studentInfo="Provides educational consulting services for student- clients who want to study in
                                Canada with the application process."
                                studentReview={4} />
                        </SwiperSlide>
                        <SwiperSlide className="slide py-[70px] flex justify-center reviews-card-swiper-slide">
                            <StudentCard 
                                studentImg={girlSt2Img}
                                studentCourse="UX/UI Student"
                                studentName="Juiria Nasser"
                                studentInfo="Provides educational consulting services for student- clients who want to study in
                                Canada with the application process."
                                studentReview={4} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="top-rated-courses-section relative flex flex-col justify-center items-center py-[50px]">
                <SectionTitle title="Top Rated Courses" />
                <div className="filter-courses relative flex my-5 w-[90%] border-b border-slate-200">
                    <ul className="flex filter-top-rated-courses-list flex-wrap">
                        <li className="mr-3 active transition-all duration-500 text-[15px] py-3 px-5 cursor-pointer" onClick={()=>{
                            setCatFilter("")
                        }}>All Courses</li>
                        {allCategoriesOfTopRated && allCategoriesOfTopRated.map((cat , index) => {
                            return (
                                <li data-aos="zoom-in" key={index} className="mr-3 transition-all duration-500 text-[15px] py-3 px-5 cursor-pointer" onClick={()=>{
                                    setCatFilter(cat);
                                }}>{cat}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className={`popular-courses-container ${filtredCourses && filtredCourses.length > 9 ? 'h-[600px] overflow-y-auto' : 'h-auto'} relative w-[90%] flex flex-wrap justify-center items-center md:justify-start md:items-start gap-1 py-10`}>
                    {
                    loading ? <LoadingData/> :
                    filtredCourses && filtredCourses.length > 0 ? filtredCourses.map(course =>{
                        let {id , poster , info , rating , level , category , price} = course.overview;
                        return (
                            <CourseCard
                                animate = {"zoom-in"} 
                                key={id}
                                courseId={id}
                                courseImg={poster}
                                courseTitle={info}
                                rate={true}
                                rateCount={rating}
                                courseLevel={level}
                                courseCategory={category}
                                courseInfo={info}
                                coursePrice={price}
                            />
                        )
                    })
                    :
                    <div className="relative m-auto w-full flex flex-col justify-center items-center">
                        <img loading="lazy"src={emptyState} alt=""  className="sm2:w-[100px] sm:w-[100px] h-[100px]"/>
                        <h2 className="mt-10 text-slate-700">no courses yet !</h2>
                    </div>
                }
                </div>
                <DarkBtn animate="fade-up" pathname="courses-page" btnText="Explore Courses" />
            </div>
            
        </>
    )
}