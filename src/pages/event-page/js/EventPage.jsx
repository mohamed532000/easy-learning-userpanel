import { useEffect, useState } from "react"
import SectionTitle from "../../../components/section-title/js/SectionTitle";
import EventCard from "../../../components/events-page-components/event-card/js/EventCard";
import { database } from "../../../project-api/Firebase";
import { onValue , ref } from "firebase/database";
import LoadingData from "../../../components/loading-data/js/LoadingData";
import PageHeader from "../../../components/page-header/PageHeader";
import headerImg from "../../../media/images/header-images/pexels-photo-2774556.webp"
export default function EventPage() {
    let [eventsList , setEventsList] = useState();
    let [loading , setLoading] = useState(true)
    useEffect(()=>{
        let getData = ()=>{
            onValue(ref(database) , (snapshot)=>{
                let data = snapshot.val();
                let eventsData = data.events;
                setEventsList(eventsData);
                setLoading(false);
            })
        }
        getData();
    },[])
    useEffect(() => window.scrollTo(0 , 0) , []);
    return (
        <>
            <PageHeader
            headerImg = {headerImg}
            headerLetters = {["E" , "v" , "e" , "n" , "t" , "s"]}
            headerDescription = {"Stay updated with our latest events! Join engaging workshops, interactive webinars, and exciting learning experiences designed to inspire and educate."}
            />
            <div className="events-section flex flex-col justify-center items-center">
                <SectionTitle title="Upcoming Event"/>
                <div className="evenets-container overflow-visible flex flex-col justify-center items-center w-[90%]">
                    {
                    loading ? <LoadingData/> :
                    eventsList?.map((e , index)=>{
                        return (
                            <EventCard 
                                animate = {(index + 1) % 2 === 0 ? "fade-right" : "fade-left"}
                                key={e.id}
                                eventImg={e.eventImg}
                                eventName={e.eventName}
                                eventInfo={e.eventInfo}
                                eventDate={e.eventDate}
                                eventDayLeft={e.dayLeft}
                                eventLocation={e.eventLocation}
                                eventId={e.id}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}