import "../css/courses-page.css";
import { useEffect, useState } from "react";
import emptyState from "../../../media/images/empty-state.png";
import CourseCard from "../../../components/course-card/js/CourseCard";
import SectionTitle from "../../../components/section-title/js/SectionTitle";
import { database } from "../../../project-api/Firebase";
import { onValue , ref } from "firebase/database";
import LoadingData from "../../../components/loading-data/js/LoadingData";
import headerImg from "../../../media/images/header-images/courses-header.webp"
import PageHeader from "../../../components/page-header/PageHeader";
export default function CoursesPage() {
    let [courses , setCourses] = useState();
    let [filtredCourses , setFiltredCourses] = useState()
    let [instructors , setInstructors] = useState();
    let [coursesCategories , setCoursesCategories] = useState();
    let [coursesLevels , setCoursesLevels] = useState();
    let [coursesLanguages , setCoursesLanguages] = useState();
    let [coursesPrices , setCoursesPrices] = useState();
    let [langFilter , setLangFilter] = useState();
    let [priceFilter , setPriceFilter] = useState();
    let [catFilter , setCatFilter] = useState("");
    let [instructorFilter , setinstructorFilter] = useState();
    let [levelFilter , setLevelFilter] = useState();
    let [rateFilter , setRateFilter] = useState();
    let [loading , setLoading] = useState(true);
    let [allInstructors , setAllInstructors] = useState();

    useEffect(()=>{
        fetchData();
    },[]);

    let fetchData = async ()=>{
        onValue(ref(database) , snapshot=>{
            let data = snapshot.val();
            let coursesData = data.courses;
            let instructorsData = data.instructors;
            setLoading(false)
            setCourses(coursesData);
            setFiltredCourses(coursesData);
            // setInstructors(instructorsData);
            let categories = coursesData.map(course => {
                return course.overview.category;
            });
            setCoursesCategories(Array.from(new Set (categories)));
            let languages = coursesData.map(course => {
                return course.overview.language;
            });
            setCoursesLanguages(Array.from(new Set(languages)));
            let levels = coursesData.map(course => {
                return course.overview.level;
            });
            setCoursesLevels(Array.from(new Set(levels)));
            let prices = coursesData.map((course)=>{
                return course.overview.price;
            });
            setCoursesPrices(Array.from(new Set(prices)));
            let instructors = coursesData.map((course)=>{
                return course.instructor;
            });
            setAllInstructors(Array.from(new Set(instructors)));
            });
    }
    useEffect(() => window.scrollTo(0 , 0) , []);
    // useEffect(()=>{
    // let fetchNewData = async ()=>{
    //     let api_url2 = `http://localhost:4000/courses?${catFilter ? `category=${catFilter}` : ""}&${langFilter ? `language=${langFilter}` : ""}&${priceFilter ? `price=${priceFilter}` : ""}&${levelFilter ? `level=${levelFilter}` : ""}&${rateFilter ? `rating=${rateFilter}`: ""}&${instructorFilter ? `mainInstructorCourse.name=${instructorFilter}` : ""}`;
    //     let response = await axios(api_url2);
    //     setFiltredCourses(response.data)
    // }
    // fetchNewData()
    // },[courses, catFilter, langFilter, priceFilter, levelFilter, rateFilter, instructorFilter]);
    const handleToggleFilterSidebar = () => {
        document.querySelector(".filter-side").classList.toggle("active");
    }
    const handleCloseFilterSidebar = () => {
        document.querySelector(".filter-side").classList.remove("active");
    }
    useEffect(() => {
        const filtered = courses &&  courses.filter(course => {
            return (
                (!catFilter || course.overview.category === catFilter) &&
                (!langFilter || course.overview.language === langFilter) &&
                (!priceFilter || course.overview.price <= priceFilter) &&
                (!levelFilter || course.overview.level === levelFilter) &&
                (!rateFilter || parseInt(course.overview.rating) === parseInt(rateFilter)) &&
                (!instructorFilter || course.instructor.instructor_name === instructorFilter)
            );
        });
        setFiltredCourses(filtered);
        handleCloseFilterSidebar();
    }, [courses, catFilter, langFilter, priceFilter, levelFilter, rateFilter, instructorFilter]);
    return (
        <>
            <PageHeader 
            headerImg = {headerImg}
            headerLetters = {["C" , "o" , "u" , "r" , "s" , "e" , "s"]}
            headerDescription = {"Explore a world of knowledge with our diverse range of courses."}
            />
            <div className="courses-section relative w-full flex flex-col justify-center items-center py-[20px]">
                <SectionTitle title="Explore Courses" />
                <div className="courses-and-filter-container relative py-[50px] w-[95%] flex justify-between items-start">
                    <div className="courses-content flex flex-col w-full">
                        <div className="filter-div flex justify-end relative z-[99] lg:hidden w-full p-2 mb-2">
                            <button className="filter-btn w-[200px] flex justify-center items-center py-2 bg-blue-600 rounded-sm lg:invisible" 
                            onClick={()=>{
                                // document.querySelector(".filter-side").classList.toggle("active");
                                handleToggleFilterSidebar();
                            }}>
                                <p className="text-white text-[16px] tracking-wide">Filter With</p>
                                <i className="fa-solid fa-filter text-white ml-1 text-lg"></i>
                            </button>
                        </div>
                        <div className={`courses-content max-h-[1500px] overflow-y-auto flex flex-wrap gap-4`}>
                        {loading ? <LoadingData/> : 
                        filtredCourses && filtredCourses.length > 0 ? filtredCourses.map(course => {
                            let {id , poster ,  category , price , level , info , rating} = course.overview
                            return (
                                <CourseCard 
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
                        }
                        )
                        :
                        <div className="relative m-auto w-full flex flex-col justify-center items-center">
                            <img loading="lazy"src={emptyState} alt=""  className="sm2:w-[100px] sm:w-[100px]"/>
                            <h2 className="mt-10 text-slate-700">no courses yet !</h2>
                        </div>
                    }
                        </div>
                    </div>
                    <div className="filter-side z-[999] shadow-md sm2:w-full sm:w-[350px] lg:ml-2 shadow-slate-300 rounded-lg absolute bg-white left-[-300px] opacity-0 transition-all duration-500 lg:opacity-100 lg:left-0 lg:relative flex flex-col p-4">
                        <div className="search-div flex w-full relative my-3 bg-slate-100">
                            <input type="text"   placeholder="search for Courses..." className="w-full h-[50px] indent-2 transition-all duration-300 outline-none border focus:border-blue-600 bg-transparent"/>
                            <i className="fa-solid fa-magnifying-glass absolute top-[50%] translate-y-[-50%] right-3 text-slate-400"></i>
                        </div>
                        <div className="filter-box category-box flex flex-col mb-4">
                            <h2 className="font-bold text-gray-800 tracking-wide text-lg mb-2">Filter With Category</h2>
                            <ul>
                                <li className="relative flex items-center mb-2">
                                    <input type="radio" name="category" value={"all"} className="cursor-pointer" id={"all-categories"} onChange={()=>{
                                        setCatFilter("");
                                    }}/>
                                    <label htmlFor={"all-categories"} className="ml-2 text-lg text-slate-800 tracking-wide transition-all duration-500 hover:text-blue-500 cursor-pointer">All</label>
                                </li>
                                {coursesCategories && coursesCategories.map(((category , index)=>{
                                    return (
                                        <li key={index} className="relative flex items-center mb-2">
                                            <input type="radio" name="category" value={category} className="cursor-pointer" id={category} onChange={(e)=>{
                                                setCatFilter(e.target.value);
                                            }}/>
                                            <label htmlFor={category} className="ml-2 text-lg text-slate-800 tracking-wide transition-all duration-500 hover:text-blue-500 cursor-pointer">{category}</label>
                                        </li>
                                    )
                                }))}
                            </ul>
                        </div>
                        <div className="filter-box py-[20px] border-t border-slate-300 language-box flex flex-col mb-4">
                            <h2 className="font-bold text-gray-800 tracking-wide text-lg mb-2">Filter With Language</h2>
                            <ul>
                                <li className="relative flex items-center mb-2">
                                    <input type="radio" name="language" value={"all"} className="cursor-pointer" id={"all-languages"} onChange={()=>{
                                        setLangFilter("");
                                    }}/>
                                    <label htmlFor={"all-languages"} className="ml-2 text-lg text-slate-800 tracking-wide transition-all duration-500 hover:text-blue-500 cursor-pointer">All</label>
                                </li>
                                {coursesLanguages && coursesLanguages.map(((lang , index)=>{
                                    return (
                                        <li key={index} className="relative flex items-center mb-2">
                                            <input 
                                            type="radio" 
                                            name="language" 
                                            className="cursor-pointer" 
                                            id={lang} 
                                            value={lang} 
                                            onChange={(e)=>{
                                                setLangFilter(e.target.value);
                                            }}/>
                                            <label htmlFor={lang} className="ml-2 text-lg text-slate-800 tracking-wide transition-all duration-500 hover:text-blue-500 cursor-pointer">{lang}</label>
                                        </li>
                                    )
                                }))}
                            </ul>
                        </div>
                        <div className="filter-box py-[20px] border-t border-slate-300 prices-box flex flex-col mb-4">
                            <h2 className="font-bold text-gray-800 tracking-wide text-lg mb-2">Price</h2>
                            {coursesPrices && 
                                <div className="flex flex-col">
                                    <p>${priceFilter}</p>
                                    <input type="range" min={Math.min(...coursesPrices)} max={Math.max(...coursesPrices)}   onChange={(e)=>{
                                        setPriceFilter(parseInt(e.target.value));
                                    }}/>
                                </div>
                            }
                        </div>
                        <div className="filter-box py-[20px] border-t border-slate-300 levels-box flex flex-col mb-4">
                            <h2 className="font-bold text-gray-800 tracking-wide text-lg mb-2">Level</h2>
                            <ul>
                                <li className="relative flex items-center mb-2">
                                    <input type="radio" name="level" value={"all"} className="cursor-pointer" id={"all-levels"} onChange={()=>{
                                        setLevelFilter("");
                                    }}/>
                                    <label htmlFor={"all-levels"} className="ml-2 text-lg text-slate-800 tracking-wide transition-all duration-500 hover:text-blue-500 cursor-pointer">All</label>
                                </li>
                                {coursesLevels && coursesLevels.map(((level , index)=>{
                                    return (
                                        <li key={index} className="relative flex items-center mb-2">
                                            <input type="radio" name="level" className="cursor-pointer" value={level} id={level} onChange={(e)=>{
                                                setLevelFilter(e.target.value);
                                            }}/>
                                            <label htmlFor={level} className="ml-2 text-lg text-slate-800 tracking-wide transition-all duration-500 hover:text-blue-500 cursor-pointer">{level}</label>
                                        </li>
                                    )
                                }))}
                            </ul>
                        </div>
                        <div className="filter-box py-[20px] border-t border-slate-300 instructors-box flex flex-col mb-4">
                            <h2 className="font-bold text-gray-800 tracking-wide text-lg mb-2">Instructors</h2>
                            <ul>
                                <li className="relative flex items-center mb-2">
                                    <input type="radio" name="instructor" value={"all"} className="cursor-pointer" id={"all-instructors"} onChange={()=>{
                                        setinstructorFilter("");
                                    }}/>
                                    <label htmlFor={"all-instructors"} className="ml-2 text-lg text-slate-800 tracking-wide transition-all duration-500 hover:text-blue-500 cursor-pointer">All</label>
                                </li>
                                {allInstructors && allInstructors.map(((instructor , id)=>{
                                    return (
                                        <li key={id} className="relative flex items-center mb-2">
                                            <input type="radio" name="instructor" className="cursor-pointer" value={instructor.instructor_name} id={instructor.instructor_name} 
                                            onChange={(e)=>{
                                                setinstructorFilter(e.target.value);
                                            }}/>
                                            <label htmlFor={instructor.instructor_name} className="ml-2 text-lg text-slate-800 tracking-wide transition-all duration-500 hover:text-blue-500 cursor-pointer flex items-center">
                                                <div className="instructor-img relative mr-1 w-[20px] h-[20px] rounded-full overflow-hidden">
                                                    <img loading="lazy"src={instructor.instructor_img} alt="" className="absolute top-0 left-0 w-full h-full"/>
                                                </div>
                                                <h2>{instructor.instructor_name}</h2>
                                            </label>
                                        </li>
                                    )
                                }))}
                            </ul>
                        </div>
                        <div className="filter-box py-[20px] border-t border-slate-300 rate-box flex flex-col mb-4">
                            <h2 className="font-bold text-gray-800 tracking-wide text-lg mb-2">Raiting</h2>
                            <ul>
                                <li className="relative flex items-center mb-2">
                                    <input type="radio" name="rate" value={"all"} className="cursor-pointer" id={"all-rate"} onChange={()=>{
                                        setRateFilter("");
                                    }}/>
                                    <label htmlFor={"all-rate"} className="ml-2 text-lg text-slate-800 tracking-wide transition-all duration-500 hover:text-blue-500 cursor-pointer">All</label>
                                </li>
                                <li className="relative flex items-center mb-2">
                                    <input type="radio" name="rate" className="cursor-pointer" value={1} id={1} onChange={(e)=>{
                                            setRateFilter(e.target.value);
                                        }}/>
                                    <label htmlFor={1} className="ml-2 text-lg text-slate-800 tracking-wide transition-all duration-500 hover:text-blue-500 cursor-pointer flex"><i className="fa-solid fa-star text-orange-500 text-sm mx-1"></i></label>
                                </li>
                                <li className="relative flex items-center mb-2">
                                    <input type="radio" name="rate" className="cursor-pointer" value={2} id={2} onChange={(e)=>{
                                            setRateFilter(e.target.value);
                                        }}/>
                                    <label htmlFor={2} className="ml-2 text-lg text-slate-800 tracking-wide transition-all duration-500 hover:text-blue-500 cursor-pointer flex">
                                        <i className="fa-solid fa-star text-orange-500 text-sm mx-1"></i>
                                        <i className="fa-solid fa-star text-orange-500 text-sm mx-1"></i>
                                    
                                    </label>
                                </li>
                                <li className="relative flex items-center mb-2">
                                    <input type="radio" name="rate" className="cursor-pointer" value={3} id={3} onChange={(e)=>{
                                            setRateFilter(e.target.value);
                                        }}/>
                                    <label htmlFor={3} className="ml-2 text-lg text-slate-800 tracking-wide transition-all duration-500 hover:text-blue-500 cursor-pointer flex">
                                        <i className="fa-solid fa-star text-orange-500 text-sm mx-1"></i>
                                        <i className="fa-solid fa-star text-orange-500 text-sm mx-1"></i>
                                        <i className="fa-solid fa-star text-orange-500 text-sm mx-1"></i>
                                    </label>
                                </li>
                                <li className="relative flex items-center mb-2">
                                    <input type="radio" name="rate" className="cursor-pointer" value={4} id={4} onChange={(e)=>{
                                            setRateFilter(e.target.value);
                                        }}/>
                                    <label htmlFor={4} className="ml-2 text-lg text-slate-800 tracking-wide transition-all duration-500 hover:text-blue-500 cursor-pointer flex">
                                        <i className="fa-solid fa-star text-orange-500 text-sm mx-1"></i>
                                        <i className="fa-solid fa-star text-orange-500 text-sm mx-1"></i>
                                        <i className="fa-solid fa-star text-orange-500 text-sm mx-1"></i>
                                        <i className="fa-solid fa-star text-orange-500 text-sm mx-1"></i>
                                    </label>
                                </li>
                                <li className="relative flex items-center mb-2">
                                    <input type="radio" name="rate" className="cursor-pointer" value={5} id={5} onChange={(e)=>{
                                            setRateFilter(e.target.value);
                                        }}/>
                                    <label htmlFor={5} className="ml-2 text-lg text-slate-800 tracking-wide transition-all duration-500 hover:text-blue-500 cursor-pointer flex">
                                        <i className="fa-solid fa-star text-orange-500 text-sm mx-1"></i>
                                        <i className="fa-solid fa-star text-orange-500 text-sm mx-1"></i>
                                        <i className="fa-solid fa-star text-orange-500 text-sm mx-1"></i>
                                        <i className="fa-solid fa-star text-orange-500 text-sm mx-1"></i>
                                        <i className="fa-solid fa-star text-orange-500 text-sm mx-1"></i>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}