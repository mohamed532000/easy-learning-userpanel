import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PurpleBtn from "../../../components/purple-btn/js/DarkBtn";
import { database } from "../../../project-api/Firebase";
import { onValue , ref } from "firebase/database";

export default function AboutEventPage() {
    let params = useParams();
    let[event , setEvent] = useState();
    useEffect(()=>{
        let getEventData = async ()=>{
            onValue(ref(database) , (snapshot)=>{
                let data = snapshot.val();
                let eventData = data.events.filter(event=>{
                    return event.id === parseInt(params.eventId)
                });
                setEvent(...eventData)
            })
        }
        getEventData()
    },[params])
    return (
        <>
            <div className={`header w-full bg-[url('https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-no-repeat bg-cover bg-center after:absolute after:w-full after:h-full after:bg-black after:opacity-40 flex justify-center items-center h-[100vh]`}>
                    <div className="header z-20 w-full md:w-[50%] lg:w-[50%] text flex flex-col justify-center items-center">
                        <h2 className="event-word text-white text-center text-4xl md:text-7xl lg:text-7xl mb-5 tracking-[10px] md:tracking-[30px] lg:tracking-[10px]">
                        About Event
                        </h2>
                        <p className="my-3 leading-7 text-white text-center">Join a vibrant community of learners from around the world. Our events bring together diverse voices, experiences, and cultures, creating an enriching tapestry of ideas and insights that will broaden your horizons.</p>
                    </div>
            </div>
            <div className="about-event-section relative flex flex-col justify-start items-start">
                {event && 
                    <>
                        <div className="event-content-container w-[90%] mx-auto py-7 mt-10">
                            <h2 className="text-4xl">{event.eventName}</h2>
                            <div className="flex items-center my-3">
                                <i className="fa-solid fa-calendar-days text-orange-500 mr-2"></i>
                                <p>{event.eventDate}</p>
                            </div>
                            <div className="event-img my-5 w-full h-[300px] rounded-3xl overflow-hidden relative">
                                <img loading="lazy"src={event.eventImg} alt="event-img" className="abolute w-full h-full top-0 left-0"/>
                            </div>
                            <div className="about-event flex flex-col">
                                <h2 className="text-4xl my-2 text-slate-700 font-bold">About the Event</h2>
                                <p className="text-xl my-2 text-slate-700">{event.aboutEvent}</p>
                            </div>
                            <div className="event-agenda mt-7 flex flex-col">
                                <h2 className="text-4xl my-2 text-slate-700 font-bold">Event Agenda</h2>
                                {event.evenetAgenda.map((agenda , index)=>{
                                    return(
                                    <div key={index} className="agenda-div my-3 flex items-center">
                                        <div className="agenda-img flex justify-center items-center mr-2 relative rounded-full overflow-hidden bg-orange-300 w-[40px] h-[40px]">
                                            <img loading="lazy"src="https://asset.uibucket.net/html/ilearning/assets/images/icons/tick.svg" alt="abolute w-full h-full top-0 left-0" />
                                        </div>
                                        <h2 className="text-xl font-bold text-slate-700">{agenda}</h2>
                                    </div>
                                    )
                                })}
                                <p className="text-xl my-2 text-slate-700">{event.eventInfo}</p>
                            </div>
                        </div>
                        
                        <div className="w-[90%] mx-auto py-7 mt-10">
                            <div className="about-event-card relative w-full md:w-[500px] lg:w-[500px] p-3  flex flex-col justify-center items-center bg-white rounded-xl shadow-md shadow-slate-600">
                                <div className="card-child flex w-full justify-between items-center my-4">
                                    <h2 className="text-xl text-slate-700">Date</h2>
                                    <h2 className="text-xl text-slate-700">{event.eventDate}</h2>
                                </div>
                                <div className="card-child flex w-full justify-between items-center my-4">
                                    <h2 className="text-xl text-slate-700">Time</h2>
                                    {event.eventTime.map((e , index)=>{
                                        return(
                                            <div key={index} className="flex">
                                                <h2  className="text-xl text-slate-700">{e.from}:00 am </h2>
                                                -
                                                <h2  className="text-xl text-slate-700">{e.to}:00 pm</h2>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="card-child flex w-full justify-between items-center my-4">
                                    <h2 className="text-xl text-slate-700">Location</h2>
                                    <h2 className="text-xl text-slate-700">{event.eventLoaction}</h2>
                                </div>
                                <div className="card-child flex w-full justify-between items-center my-4">
                                    <h2 className="text-xl text-slate-700">Certificate</h2>
                                    <h2 className="text-xl text-slate-700">{event.certificate}</h2>
                                </div>
                                <div className="card-child flex w-full justify-between items-center my-4">
                                    <h2 className="text-xl text-slate-700">Call</h2>
                                    <h2 className="text-xl text-slate-700">{event.call}</h2>
                                </div>
                                <div className="flex w-full relative">
                                    <PurpleBtn pathname="/" btnText="Register Event"  />
                                </div>
                            </div>
                        </div>
                    </>     
                        
                }
            </div>
        
        </>
    )
}