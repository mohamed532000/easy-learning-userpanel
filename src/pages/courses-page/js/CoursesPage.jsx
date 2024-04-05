import "../css/courses-page.css";
import { useEffect, useState } from "react";
import emptyState from "../../../media/images/empty-state.png";
import CourseCard from "../../../components/course-card/js/CourseCard";
import SectionTitle from "../../../components/section-title/js/SectionTitle";
import { database } from "../../../project-api/Firebase";
import { onValue , ref } from "firebase/database";
import LoadingData from "../../../components/loading-data/js/LoadingData";
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
        let cLetter = document.querySelector(".event-word .events-letter-c");
        let oLetter = document.querySelector(".event-word .events-letter-o");
        let uLetter = document.querySelector(".event-word .events-letter-u");
        let r2Letter = document.querySelector(".event-word .events-letter-r");
        let sLetter = document.querySelector(".event-word .events-letter-s");
        let eLetter = document.querySelector(".event-word .events-letter-e");
        let s2Letter = document.querySelector(".event-word .events-letter-s-2")

        function handelScroll(){
            cLetter.style.transform = `translateY(${-window.scrollY}px)`;
            oLetter.style.transform = `translateY(${-window.scrollY-20}px)`;
            uLetter.style.transform = `translateY(${-window.scrollY-20}px)`;
            r2Letter.style.transform = `translateY(${-window.scrollY}px)`;
            sLetter.style.transform = `translateY(${-window.scrollY-20}px)`;
            eLetter.style.transform = `translateY(${-window.scrollY-30}px)`;
            s2Letter.style.transform = `translateY(${-window.scrollY}px)`;
            if(window.scrollY === 0) {
                cLetter.style.transform = `translateY(0)`;
                oLetter.style.transform = `translateY(0)`;
                uLetter.style.transform = `translateY(0)`;
                r2Letter.style.transform = `translateY(0)`;
                sLetter.style.transform = `translateY(0)`;
                eLetter.style.transform = `translateY(0)`;
                s2Letter.style.transform = `translateY(0)`;
            }
        }
        window.addEventListener("scroll" , handelScroll);
        return ()=> window.addEventListener("scroll" , handelScroll);
    },[]);

    let fetchData = async ()=>{
        onValue(ref(database) , snapshot=>{
            let data = snapshot.val();
            let coursesData = data.courses;
            let instructorsData = data.instructors;
            console.log(data)
            setLoading(false)
            setCourses(coursesData);
            setFiltredCourses(coursesData);
            setInstructors(instructorsData);
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

    // useEffect(()=>{
    // let fetchNewData = async ()=>{
    //     let api_url2 = `http://localhost:4000/courses?${catFilter ? `category=${catFilter}` : ""}&${langFilter ? `language=${langFilter}` : ""}&${priceFilter ? `price=${priceFilter}` : ""}&${levelFilter ? `level=${levelFilter}` : ""}&${rateFilter ? `rating=${rateFilter}`: ""}&${instructorFilter ? `mainInstructorCourse.name=${instructorFilter}` : ""}`;
    //     let response = await axios(api_url2);
    //     setFiltredCourses(response.data)
    // }
    // fetchNewData()
    // },[courses, catFilter, langFilter, priceFilter, levelFilter, rateFilter, instructorFilter]);

    useEffect(() => {
        // Use the 'filter' function to filter the courses based on filter criteria.
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
    
        // Set the filtered courses in the 'filteredCourses' state.
        setFiltredCourses(filtered);
        console.log(catFilter)
    }, [courses, catFilter, langFilter, priceFilter, levelFilter, rateFilter, instructorFilter]);

    return (
        <>
            <div className="header w-full after:absolute after:w-full after:h-full after:bg-black after:opacity-40 flex justify-center items-center h-[100vh] bg-[url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-no-repeat bg-cover bg-center">
                <div className="header z-20 w-full md:w-[50%] lg:w-[50%] text flex flex-col justify-center items-center">
                    <h2 className="event-word text-white text-center text-4xl md:text-7xl lg:text-7xl mb-5 tracking-[10px] md:tracking-[30px] font-bold lg:tracking-[30px]">
                        <span className="relative inline-block transition-all duration-500 ease-linear events-letter-c">C</span>
                        <span className="relative inline-block transition-all duration-500 ease-linear events-letter-o">o</span>
                        <span className="relative inline-block transition-all duration-500 ease-linear events-letter-u">u</span>
                        <span className="relative inline-block transition-all duration-500 ease-linear events-letter-r">r</span>
                        <span className="relative inline-block transition-all duration-500 ease-linear events-letter-s">s</span>
                        <span className="relative inline-block transition-all duration-500 ease-linear events-letter-e">e</span>
                        <span className="relative inline-block transition-all duration-500 ease-linear events-letter-s-2">s</span>
                    </h2>
                    <p className="my-3 leading-7 text-white text-center">Join a vibrant community of learners from around the world. Our events bring together diverse voices, experiences, and cultures, creating an enriching tapestry of ideas and insights that will broaden your horizons.</p>
                </div>
            </div>
            <div className="courses-section relative w-full flex flex-col justify-center items-center py-[20px]">
                <SectionTitle title="Explore Courses" />
                <div className="courses-and-filter-container relative py-[50px] w-[95%] flex justify-between items-start">
                    <div className="courses-content flex flex-col w-full">
                        <div className="filter-div flex justify-end relative z-[99] lg:hidden w-full p-2 mb-2">
                            <button className="filter-btn w-[200px] flex justify-center items-center py-2 bg-blue-600 rounded-sm lg:invisible" 
                            onClick={()=>{
                                document.querySelector(".filter-side").classList.toggle("active");
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