import "../css/course-details-page.css";
import { useEffect, useState } from "react";
import { Link , useParams } from "react-router-dom";
import noVideoImg from "../../../media/images/no-video.png";
import { useDispatch , useSelector } from "react-redux";
import { additionCoures } from "../../../project-actions/CartCoursesActions";
import { addToWishList } from "../../../project-actions/WishlistActions";
import AdditionProductAgainAlert from "../../../components/cart-page-components/addition-product-again/js/AdditionProductAgainAlert";
import { database } from "../../../project-api/Firebase";
import { onValue , ref } from "firebase/database";
import LoginPopub from "../../../components/login-popub/js/LoginPopub";
import VideoPlayPopub from "../../../components/video-place-popub/js/VideoPlayPopub";

export default function CourseDetailsPage(){
    let dispatch = useDispatch();
    let [activeLogin , setActiveLogin] = useState();
    let cart = useSelector(state => state.cartReducer)
    let [additionAgainStatus , setAdditionAgainStatus] = useState()
    let userAccounts  = useSelector(state => state.user);
    let params = useParams();
    let [course , setCourse] = useState();
    let [coursePrice , setCoursePrice] = useState();
    let [courseOffer , setCourseOffer] = useState();
    let [priceAfterOffer , setPriceAfterOffer] = useState();
    let [lessonsCount , setCourseLessonsCount] = useState();
    let [VideoPlayPopubStatus , setVideoPlayPopubStatus] = useState(false);
    let [VideoPlayPopubSrc , setVideoPlayPopubSrc] = useState("");

    useEffect(()=>{
        let navFilterItems = document.querySelectorAll(".filter-nav-list li");
        let allBoxes = document.querySelectorAll(".info-box");
        navFilterItems.forEach(item => {
            item.onclick = ()=>{
                navFilterItems.forEach(item => {
                    item.classList.remove("active");
                })
                item.classList.add("active");
                allBoxes.forEach(box=>{
                    box.classList.remove("active")
                })
                document.querySelector(`.${item.id}`).classList.add("active");
            }
        });
        let getData = async ()=>{
            onValue(ref(database) , (snapshot)=>{
                let data = snapshot.val();
                let courses = data.courses;
                let course = courses &&  courses.filter(course => {
                    return course.overview.id === parseInt(params.courseId)
                });
                setCourse(...course);
                setCoursePrice(Object.values(course)[0].overview.price);
                setCourseOffer(Object.values(course)[0].overview.offer);
                let offerNumber = Object.values(course)[0].overview.offer.split("").filter(num => {
                    return  !isNaN(parseInt(num));
                }).join("");
                let offerValue = Object.values(course)[0].overview.price - Object.values(course)[0].overview.price * parseInt(offerNumber) / 100;
                setPriceAfterOffer(offerValue);
                let lessons = course && Object.values(course)[0].sections.flatMap(section => {
                    return section.lessons;
                });
                setCourseLessonsCount(lessons.length);
            });
        }
        getData();
    },[params.courseId , coursePrice , courseOffer]);
    let rate = (star , emptyStar , rating) => {
        let rateValue = 5-rating
        let starsArray = [];
        let emptySatarsArray = [];
        for(let i = 0 ; i < rating ; i++) {
            starsArray.push(<div key={`${i}`}>{star}</div>);
        }
        for(let i=0; i<rateValue; i++) {
            emptySatarsArray.push(<div key={`${i}`}>{emptyStar}</div>);
        }
        return (
            <div className="flex">
                {starsArray}{emptySatarsArray};
            </div>
        );
    }
    let checkUser = (product)=>{
        userAccounts.length < 1
        ?
        setActiveLogin(true)
        :
        (()=>{
            let findCourse = cart.find(courseInCart => courseInCart.overview.id === product.overview.id);
            findCourse ? setAdditionAgainStatus(true) : dispatch(additionCoures(product));
            setTimeout(()=>{
                setAdditionAgainStatus(false)
            },3000)
        })();
    }
    let closeLoginPopubFunc = ()=>{
        setActiveLogin(false)
    }
    let hideVideoPlayFunc = () => {
        setVideoPlayPopubStatus(false)
    }
    return (
        <>
            <div className="header w-full bg-[url('https://educal-react.vercel.app/_next/static/media/page-title.fc72743c.jpg')] bg-center bg-no-repeat bg-cover after:absolute after:w-full after:h-full after:bg-black after:opacity-40 flex justify-center items-center h-[100vh]">
                <div className="header z-20 w-full md:w-[50%] lg:w-[50%] text flex flex-col justify-center items-center">
                    <h2 className="event-word text-white text-center text-4xl md:text-7xl lg:text-7xl mb-5 tracking-[10px] md:tracking-[30px] lg:tracking-[30px]">
                        Course Details
                    </h2>
                    <p className="my-3 leading-7 text-white text-center">Join a vibrant community of learners from around the world. Our events bring together diverse voices, experiences, and cultures, creating an enriching tapestry of ideas and insights that will broaden your horizons.</p>
                </div>
            </div>
            <div className="details-section py-[50px] relative w-full flex flex-col justify-center items-center">
                {course && (
                <div className="details-container relative grid  grid-cols-1 lg:grid-cols-3 w-[90%]">
                    <div className="overview-side col-span-2 flex flex-col w-full lg:w-auto">
                        <div className="side-header flex flex-col">
                            <h2 className="course-category font-bold text-blue-500">{course.overview.category}</h2>
                            <h2 className="course-title font-bold text-[30px]">{course.overview.info}</h2>
                            <div className="flex my-[20px] sm2:flex-col sm2:justify-start sm2:items-start sm:flex-row sm:justify-start sm:items-center">
                                <div className="instructor-div flex justify-center items-center mr-[100px]">
                                    <div className="instructor-img relative rounded-full overflow-hidden w-[70px] h-[70px] mr-[10px] sm2:mb-[20px] sm:mb-0">
                                        <img loading="lazy"src={course.instructor.instructor_img} alt="instructor img" className="absolute top-0 left-0 w-full h-full"/>
                                    </div>
                                    <div className="instructor-name flex flex-col h-full justify-center sm2:mb-[20px] sm:mb-0">
                                        <h2 className="text-slate-500 text-sm font-bold">Instrctor</h2>
                                        <h2 className="font-bold tracking-wide">{course.instructor.instructor_name}</h2>
                                    </div>
                                </div>
                                <div className="level-div flex flex-col h-full justify-center mr-[100px] sm2:mb-[20px] sm:mb-0">
                                    <h2 className="text-slate-500 text-sm font-bold">Level</h2>
                                    <h2 className="font-bold tracking-wide">{course.overview.level}</h2>
                                </div>
                                <div className="review-div flex flex-col h-full justify-center mr-[100px] sm2:mb-[20px] sm:mb-0">
                                    <h2 className="text-slate-500 text-sm font-bold">Review</h2>
                                    <div className="flex">
                                        <h2>{rate(<i className="fa-solid fa-star text-orange-500"></i> , <i className="fa-regular fa-star text-orange-500"></i> , course.overview.rating)}</h2>
                                        <p className="font-bold tracking-wide">(0.{course.overview.rating})</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="course-img relative w-full sm2:h-[300px] sm:h-[400px]">
                            <img loading="lazy"src={course.overview.poster} className="absolute top-0 left-0 w-full h-full"/>
                        </div>
                        <div className="course-info relative flex flex-col w-full">
                            <div className="filter-nav flex w-full bg-slate-100 mt-[20px]">
                                <ul className="filter-nav-list relative flex w-full">
                                    <li id="course-overview" className="relative transition-all duration-500 text-slate-800 flex justify-center items-center sm2:p-[10px] sm2:text-sm sm:text-lg md:py-[15px] md:px-[35px] md:text-xl after:absolute after:right-0 after:top-0 after:w-[1px] after:h-full after:bg-slate-300 cursor-pointer active">
                                        <i className="fa-solid fa-ribbon sm2:m-0 sm:mr-2 transition-all duration-500"></i>
                                        <p className="sm2:hidden sm:flex">Discription</p>
                                        </li>
                                    <li id="course-reviews" className="relative transition-all duration-500 text-slate-800 flex justify-center items-center sm2:p-[10px] sm2:text-sm sm:text-lg md:py-[15px] md:px-[35px] md:text-xl after:absolute after:right-0 after:top-0 after:w-[1px] after:h-full after:bg-slate-300 cursor-pointer">
                                        <i className="fa-solid fa-book sm2:m-0 sm:mr-2 transition-all duration-500"></i>
                                        <p className="sm2:hidden sm:flex">Review</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="info-content relative flex flex-col w-full min-h-[500px]">
                                <div className="course-overview info-box  hidden active flex-col">
                                    <h2 className="my-[20px] font-bold text-xl">Course Overview</h2>
                                    <p className="over-view-text text-lg text-slate-600">{course.overview.overview_content}</p>
                                    <div className="course-target relative flex flex-col my-[20px]">
                                        <h2 className="target-title font-bold text-xl my-[10px]">What is the Target Audience?</h2>
                                        {course.target && course.target.map((target , index)=>{
                                            return(
                                                <p key={index} className="target relative my-[5px] text-[17px] text-slate-600">{target}</p>
                                            )
                                        })}
                                    </div>
                                    <div className="other-instructors flex flex-col">
                                        <h2 className="instructors-title font-bold text-xl my-[10px]">Other Instructors</h2>
                                        <div className="instructors-div flex my-[20px] sm2:flex-col sm2:justify-start sm2:items-start sm:flex-row sm:justify-start sm:items-center">
                                            {course && course.other_instructors.map(instructor => {
                                                return (
                                                    <div key={instructor.id} className="instructor-div flex justify-center items-center mr-[100px]">
                                                    <div className="instructor-img relative rounded-full overflow-hidden w-[30px] h-[30px] mr-[10px] sm2:mb-[20px] sm:mb-0">
                                                        <img loading="lazy"src={instructor.image} alt="instructor img" className="absolute top-0 left-0 w-full h-full"/>
                                                    </div>
                                                    <div className="instructor-name flex flex-col h-full justify-center sm2:mb-[20px] sm:mb-0">
                                                        <h2 className="text-sm font-bold">{instructor.name}</h2>
                                                        <h2 className="font-bold text-slate-500 tracking-wide">Instrctor</h2>
                                                    </div>
                                                </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className=" info-box course-reviews hidden flex-col  mt-[20px]">
                                    <h2 className="font-bold text-3xl">Reviews</h2>
                                    <p className="my-[20px] text-lg text-slate-700">Gosh william I am telling crikey burke I do not want no agro A bit of how is your father bugger all mate off his nut that, what a plonker cuppa owt to do</p>
                                    <div className="rating-div flex flex-col md:flex-row relative w-full items-center bg-slate-200">
                                        <div className="rate-count flex flex-col justify-center items-center md:border-r-2 border-slate-white p-[80px]">
                                            <h2 className=" text-5xl">{5}</h2>
                                            <div className="flex my-[10px]">
                                                <i className="fa-solid fa-star text-orange-500"></i> 
                                                <i className="fa-solid fa-star text-orange-500"></i> 
                                                <i className="fa-solid fa-star text-orange-500"></i> 
                                                <i className="fa-solid fa-star text-orange-500"></i> 
                                                <i className="fa-solid fa-star text-orange-500"></i> 
                                            </div>
                                            <p>{5} Ratings</p>
                                        </div>
                                        <div className="details-rating sm2:w-full sm:w-auto flex flex-col p-[20px]">
                                            <h2 className="font-bold text-xl mb-2">Detailed Rating</h2>
                                            <div className="detail-rate-div
                                            flex items-center my-1">
                                                <p className="mb-[4px]">5 stars</p>
                                                <progress className="m-0 sm:mx-2 rounded-lg overflow-hidden h-[3px] sm2:w-[70%] sm:w-[260px]" max={100} value={90}></progress>
                                                <p className="mb-[4px]">100%</p>
                                            </div>
                                            <div className="detail-rate-div
                                            flex items-center my-1">
                                                <p className="mb-[4px]">4 stars</p>
                                                <progress className="m-0 sm:mx-2 rounded-lg overflow-hidden h-[3px] sm2:w-[70%] sm:w-[260px]" max={100} value={10}></progress>
                                                <p className="mb-[4px]">30%</p>
                                            </div>
                                            <div className="detail-rate-div
                                            flex items-center my-1">
                                                <p className="mb-[4px]">3 stars</p>
                                                <progress className="m-0 sm:mx-2 rounded-lg overflow-hidden h-[3px] sm2:w-[70%] sm:w-[260px]" max={100} value={0}></progress>
                                                <p className="mb-[4px]">0%</p>
                                            </div>
                                            <div className="detail-rate-div
                                            flex items-center my-1">
                                                <p className="mb-[4px]">2 stars</p>
                                                <progress className="m-0 sm:mx-2 rounded-lg overflow-hidden h-[3px] sm2:w-[70%] sm:w-[260px]" max={100} value={0}></progress>
                                                <p className="mb-[4px]">0%</p>
                                            </div>
                                            <div className="detail-rate-div
                                            flex items-center my-1">
                                                <p className="mb-[4px]">1 stars</p>
                                                <progress className="m-0 sm:mx-2 rounded-lg overflow-hidden h-[3px] sm2:w-[70%] sm:w-[260px]" max={100} value={0}></progress>
                                                <p className="mb-[4px]">0%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <form className="review-form flex flex-col mt-[20px] relative w-full" onSubmit={(e)=>{
                                        e.preventDefault();
                                    }}>
                                        <h2 className="form-title font-bold text-xl my-3">Write a Review</h2>
                                        <input type="text" placeholder="Your Name"   className="relative rounded-md h-[50px] focus:border-blue-500 border-2 mb-6 transition-all duration-500 outline-none indent-2"/>
                                        <input type="email" placeholder="Your E-mail"   className="relative rounded-md h-[50px] mb-6 transition-all duration-500 outline-none indent-2 focus:border-blue-500 border-2"/>
                                        <input type="text" placeholder="Review Title"   className="relative rounded-md h-[50px] mb-6 transition-all duration-500 outline-none indent-2 focus:border-blue-500 border-2"/>
                                        <p className="mb-[20px]">Rating : </p>
                                        <textarea   cols="30" rows="10" className="relative rounded-md mb-6 transition-all duration-500 outline-none indent-2 focus:border-blue-500 border-2"></textarea>
                                        <button type="submite" className="text-white submit-rivew-btn w-[250px] py-3 px-5 relative flex justify-center items-center mt-[30px] my-[20px] shadow-md hover:shadow-slate-400 transition-all duration-500 bg-blue-600 overflow-hidden ">
                                            <span className="mx-[1px] relative transition-all duration-500 delay-[.6s]">S</span>
                                            <span className="mx-[1px] relative transition-all duration-500 delay-[.5s]">u</span>
                                            <span className="mx-[1px] relative transition-all duration-500 delay-[.4s]">b</span>
                                            <span className="mx-[1px] relative transition-all duration-500 delay-[.3s]">m</span>
                                            <span className="mx-[1px] relative transition-all duration-500 delay-[.2s]">i</span>
                                            <span className="mx-[1px] relative transition-all duration-500 delay-[.1s]">t</span>
                                            <span className="mx-[1px] relative transition-all duration-500 delay-[0]"> </span>
                                            <span className="mx-[1px] relative transition-all duration-500 delay-[.1s]">R</span>
                                            <span className="mx-[1px] relative transition-all duration-500 delay-[.2s]">e</span>
                                            <span className="mx-[1px] relative transition-all duration-500 delay-[.3s]">v</span>
                                            <span className="mx-[1px] relative transition-all duration-500 delay-[.4s]">i</span>
                                            <span className="mx-[1px] relative transition-all duration-500 delay-[.5s]">e</span>
                                            <span className="mx-[1px] relative transition-all duration-500 delay-[.6s]">w</span>
                                            <i className="fa-regular fa-paper-plane text-lg transition-all duration-700  absolute left-[50%] translate-x-[-50%] top-[50px]"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="share flex flex-col relative my-3">
                            <h2>Share :</h2>
                            <div className="sochial-div flex my-3">
                                <Link to="https://www.facebook.com" className="mr-2 md:mr-4 lg:mr-4 transition-all duration-500 hover:translate-y-[-4px] bg-white shadow-md hover:shadow-slate-700 flex justify-center items-center px-[10px] py-[5px] md:px-[15px] lg:px-[15px] md:py-[10px] lg:py-[10px] rounded-full">
                                    <i className="fa-brands fa-facebook text-2xl"></i>
                                </Link>
                                <Link to="https://www.instagram.com" className="mr-2 md:mr-4 lg:mr-4 transition-all duration-500 hover:translate-y-[-4px] bg-white shadow-md hover:shadow-slate-700 flex justify-center items-center px-[10px] py-[5px] md:px-[15px] lg:px-[15px] md:py-[10px] lg:py-[10px rounded-full">
                                    <i className="fa-brands fa-instagram text-2xl"></i>
                                </Link>
                                <Link to="https://www.twitter.com" className="mr-2 md:mr-4 lg:mr-4 transition-all duration-500 hover:translate-y-[-4px] bg-white shadow-md hover:shadow-slate-700 flex justify-center items-center px-[10px] py-[5px] md:px-[15px] lg:px-[15px] md:py-[10px] lg:py-[10px rounded-full">
                                    <i className="fa-brands fa-twitter text-2xl"></i>
                                </Link>
                                <Link to="https://www.linkedin.com" className="mr-2 md:mr-4 lg:mr-4 transition-all duration-500 hover:translate-y-[-4px] bg-white shadow-md hover:shadow-slate-700 flex justify-center items-center px-[10px] py-[5px] md:px-[15px] lg:px-[15px] md:py-[10px] lg:py-[10px rounded-full">
                                    <i className="fa-brands fa-linkedin text-2xl"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="aside relative flex flex-col w-full items-center lg:w-auto lg:items-end">
                        <div className="col relative w-full lg:w-[300px] shadow-lg shadow-slate-300 overflow-hidden rounded-lg p-4">
                            <div className="video-div relative my-4 rounded-lg overflow-hidden w-full h-[200px]">
                                {course.sections[0].lessons[0].lesson_video ?
                                    <div className="relative flex justify-center items-center w-full h-[200px] bg-red-200">
                                        <video src={course.sections[0].lessons[0].lesson_video} className="absolute top-0 left-0 w-full h-full"></video>
                                        <i className="fa-solid fa-circle-play text-5xl text-white cursor-pointer absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" onClick={()=>{
                                            setVideoPlayPopubSrc(course.sections[0].lessons[0].lesson_video)
                                            setVideoPlayPopubStatus(true);
                                        }}></i>
                                    </div>
                                    :
                                    <div className="no-video relative w-full h-full flex flex-col justify-center items-center">
                                        <img loading="lazy"src={noVideoImg} alt="no video img" className="w-[100px] opacity-75" />
                                        <h2 className="mt-2 text-slate-700">No Video</h2>
                                    </div>
                                }
                            </div>
                            <div className="offer-div flex rotate-[10deg] items-center justify-center relative my-[20px]">
                                {
                                    priceAfterOffer === course.overview.price
                                    ?
                                    <h2 className="offer text-3xl font-bold mr-2">$ {priceAfterOffer}</h2>
                                    :
                                    <>
                                    <h2 className="offer text-3xl font-bold mr-2">$ {priceAfterOffer}</h2>
                                    <del className="old-price text-ls font-bold text-slate-600 mr-3 de">${course.overview.price}</del>
                                    <div className="offer-bercent flex justify-center items-center bg-red-200 rounded-sm text-red-500 p-1 mr-3">
                                        <p className="bercent-num mr-1 rotate-[-10deg]">{course.overview.offer}</p>
                                        <p className="text-sm ml-1">OFF</p>
                                    </div>
                                    </>
                                }
                            </div>
                            <div className="other-info-course relative w-full flex flex-col">
                                <div className="info-div flex items-center my-1 relative py-[10px] border-b border-gray-200">
                                    <i className="fa-solid fa-house text-sm text-blue-600 mt-[2px] mr-4"></i>
                                    <p> <span className="font-bold">Instructor : </span>{course.instructor.instructor_name}</p>
                                </div>
                                <div className="info-div flex items-center my-1 relative py-[10px] border-b border-gray-200">
                                    <i className="fa-solid fa-book text-sm text-blue-600 mt-[2px] mr-4"></i>
                                    <p> <span className="font-bold">Lessons :  </span>{lessonsCount}</p>
                                </div>
                                <div className="info-div flex items-center my-1 relative py-[10px] border-b border-gray-200">
                                    <i className="fa-solid fa-clock text-sm text-blue-600 mt-[2px] mr-4"></i>
                                    <p> <span className="font-bold">Duration : </span> {course.overview.course_hours}</p>
                                </div>
                                <div className="info-div flex items-center my-1 relative py-[10px]">
                                    <i className="fa-solid fa-earth-americas text-sm text-blue-600 mt-[2px] mr-4"></i>
                                    <p> <span className="font-bold">Language : </span> {course.overview.language}</p>
                                </div>
                            </div>
                            <div className="payment-div relative flex flex-col">
                                <h2 className="text-xl font-bold mb-2">Payment:</h2>
                                <Link to="/">
                                    <img loading="lazy"src="https://educal-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayment-1.c223c61f.png&w=384&q=75" alt="payment-img" className="w-[100px]"/>
                                </Link>
                            </div>
                            <button className="add-to-cart-button w-full relative text-blue-600 py-2 flex justify-center items-center mt-[50px] my-[20px] shadow-md hover:shadow-slate-400 transition-all duration-500 border border-blue-600 overflow-hidden" onClick={()=>{
                                dispatch(addToWishList(course))
                            }}>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[.5s]">A</span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[.4s]">d</span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[.3s]">d</span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[]"></span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[.2s]">T</span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[.1s]">o</span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[0]"></span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[0s]">W</span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[.1s]">i</span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[.2s]">s</span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[.3s]">h</span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[.4s]">l</span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[.5s]">i</span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[.6s]">s</span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[.7s]">t</span>
                                <i className="fa-regular fa-heart transition-all duration-700  absolute left-[50%] translate-x-[-50%] top-[50px]"></i>
                            </button>
                            <button className="add-to-cart-button w-full relative text-white py-2 flex justify-center items-center mt-[50px] my-[20px] shadow-md hover:shadow-slate-400 transition-all duration-500 bg-blue-600 overflow-hidden" 
                            onClick={
                                ()=>{
                                    checkUser(course)
                                }
                            }>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[.4s]">A</span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[.3s]">d</span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[.2s]">d</span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[]"></span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[.1s]">T</span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[.0s]">o</span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[0]"></span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[.1s]">C</span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[.2s]">a</span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[.3s]">r</span>
                                <span className="relative mx-[2px] transition-all duration-500 delay-[.4s]">t</span>
                                <i className="fa-solid fa-cart-arrow-down transition-all duration-700  absolute left-[50%] translate-x-[-50%] top-[50px]"></i>
                            </button>
                        </div>
                        <div className="col related-courses relative mt-[40px] shadow-lg shadow-slate-300  w-full lg:w-[300px] rounded-lg p-4">
                            <h2 className="font-bold my-[20px] text-xl">Related Courses</h2>
                            <div className="courses flex flex-col">
                                <div className="course flex justify-between items-center relative mb-2">
                                    <div className="flex">
                                        <div className="course-img relative w-[60px] h-[60px] rounded-md overflow-hidden mr-4">
                                            <img loading="lazy"src="https://educal-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcourse-4.0eee2279.jpg&w=1920&q=75" alt="coursei-img" className="absolute top-0 left-0 w-full h-full"/>
                                        </div>
                                        <div className="course-info flex flex-col">
                                            <div className="course-ratt flex">
                                                <i className="fa-regular fa-star text-orange-500 text-sm"></i>
                                                <i className="fa-regular fa-star text-orange-500 text-sm"></i>
                                                <i className="fa-regular fa-star text-orange-500 text-sm"></i>
                                                <i className="fa-regular fa-star text-orange-500 text-sm"></i>
                                                <i className="fa-regular fa-star text-orange-500 text-sm"></i>
                                            </div>
                                            <h2 className="course-name relative font-bold tracking-wide my-[3px]">UI & UX</h2>
                                            <p className="text-blue-500 text-sm">${72}</p>
                                        </div>
                                    </div>
                                    <Link to="/courses-page"><i className="fa-solid fa-circle-info text-slate-700"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
            </div>
            <AdditionProductAgainAlert status={additionAgainStatus}/>

            <VideoPlayPopub VideoPlayPopubStatus={VideoPlayPopubStatus} hideVideoPlayFunc={hideVideoPlayFunc} src={VideoPlayPopubSrc}/>

            <LoginPopub status={activeLogin} closePopubFun={closeLoginPopubFunc}/>
        </>
    )
}