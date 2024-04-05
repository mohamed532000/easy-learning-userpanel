import { useEffect, useState } from "react"
import SectionTitle from "../../../components/section-title/js/SectionTitle";
import EventCard from "../../../components/events-page-components/event-card/js/EventCard";
import { database } from "../../../project-api/Firebase";
import { onValue , ref } from "firebase/database";
import LoadingData from "../../../components/loading-data/js/LoadingData";

export default function EventPage() {
    let [eventsList , setEventsList] = useState();
    let [loading , setLoading] = useState(true)
    useEffect(()=>{
        let eLetter = document.querySelector(".event-word .events-letter-e");
        let vLetter = document.querySelector(".event-word .events-letter-v");
        let e2Letter = document.querySelector(".event-word .events-letter-e-2");
        let nLetter = document.querySelector(".event-word .events-letter-n");
        let tLetter = document.querySelector(".event-word .events-letter-t");
        let sLetter = document.querySelector(".event-word .events-letter-s");
        let getData = ()=>{
            onValue(ref(database) , (snapshot)=>{
                let data = snapshot.val();
                let eventsData = data.events;
                setEventsList(eventsData);
                setLoading(false);
            })
        }
        getData();
        function handelScroll(){
            eLetter.style.transform = `translateY(${-window.scrollY}px)`;
            vLetter.style.transform = `translateY(${-window.scrollY-20}px)`;
            e2Letter.style.transform = `translateY(${-window.scrollY}px)`;
            nLetter.style.transform = `translateY(${-window.scrollY-20}px)`;
            tLetter.style.transform = `translateY(${-window.scrollY-30}px)`;
            sLetter.style.transform = `translateY(${-window.scrollY}px)`;
            if(window.scrollY === 0) {
                eLetter.style.transform = `translateY(0)`;
                vLetter.style.transform = `translateY(0)`;
                e2Letter.style.transform = `translateY(0)`;
                nLetter.style.transform = `translateY(0)`;
                tLetter.style.transform = `translateY(0)`;
                sLetter.style.transform = `translateY(0)`;
            }
        }
        window.addEventListener("scroll" , handelScroll)
        return ()=> window.addEventListener("scroll" , handelScroll)
    },[])
    return (
        <>
            <div className="header w-full bg-[url('https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-no-repeat bg-cover bg-center after:absolute after:w-full after:h-full after:bg-black after:opacity-40 flex justify-center items-center h-[100vh]">
                    <div className="header z-20 w-full md:w-[50%] lg:w-[50%] text flex flex-col justify-center items-center">
                        <h2 className="event-word text-white text-center text-4xl md:text-7xl lg:text-7xl mb-5 tracking-[10px] md:tracking-[30px] lg:tracking-[30px]">
                            <span className="relative inline-block transition-all duration-500 ease-linear events-letter-e">E</span>
                            <span className="relative inline-block transition-all duration-500 ease-linear events-letter-v">V</span>
                            <span className="relative inline-block transition-all duration-500 ease-linear events-letter-e-2">E</span>
                            <span className="relative inline-block transition-all duration-500 ease-linear events-letter-n">N</span>
                            <span className="relative inline-block transition-all duration-500 ease-linear events-letter-t">T</span>
                            <span className="relative inline-block transition-all duration-500 ease-linear events-letter-s">S</span>
                        </h2>
                        <p className="my-3 leading-7 text-white text-center">Join a vibrant community of learners from around the world. Our events bring together diverse voices, experiences, and cultures, creating an enriching tapestry of ideas and insights that will broaden your horizons.</p>
                    </div>
            </div>
            <div className="events-section flex flex-col justify-center items-center">
                <SectionTitle title="Upcoming Event"/>
                <div className="evenets-container flex flex-col justify-center items-center w-[90%]">
                    {
                    loading ? <LoadingData/> :
                    eventsList && eventsList.map((e)=>{
                        return (
                            <EventCard 
                                key={e.id}
                                eventImg={e.eventImg}
                                eventName={e.eventName}
                                eventInfo={e.eventInfo}
                                eventDate={e.eventDate}
                                eventDayLeft={e.dayLeft}
                                eventLocation={e.eventLoaction}
                                eventId={e.id}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}