import PropTypes from "prop-types";
import GoBtn from "../../../go-btn/js/GoBtn";
import { useEffect } from "react";
EventCard.propTypes = {
    eventId : PropTypes.number.isRequired,
    eventImg : PropTypes.string.isRequired,
    eventName : PropTypes.string.isRequired,
    eventInfo : PropTypes.string.isRequired,
    eventDate : PropTypes.string.isRequired,
    eventDayLeft : PropTypes.number.isRequired,
    eventLocation : PropTypes.string.isRequired,
}
export default function EventCard({eventId ,  eventImg , eventName , eventInfo , eventDate , eventDayLeft , eventLocation , animate}) {
    return (
        <>
        
            <div data-aos={animate ? animate : ""} className="event-card my-4 flex flex-col md:flex-row lg:flex-row w-full items-center p-4 shadow-md shadow-slate-400 rounded-2xl">
                <div className="event-img relative w-full md:w-[300px] lg:w-[300px] h-[350px]">
                    <img loading="lazy"src={eventImg} alt="event img" className="absolute w-full h-full top-0 left-0"/>
                </div>
                <div className="flex flex-col justify-start items-start ml-4">
                    <div className="card-header flex flex-col  pt-2 border-b border-slate-400">
                        <h2 className="text-xl font-bold tracking-wide text-stone-600">{eventName}</h2>
                        <p className="my-4">{eventInfo}</p>
                    </div>
                    <div className="event-other-info flex flex-col pt-2 mb-5 ">
                        <div className="info-box flex items-center my-2">
                            <i className="fa-solid fa-calendar-days text-orange-500 mr-2"></i>
                            <p>{eventDate}</p>
                        </div>
                        <div className="info-box flex items-center my-2">
                            <i className="fa-regular fa-clock text-orange-500 mr-2"></i>
                            <p>{eventDayLeft} Day Left</p>
                        </div>
                        <div className="info-box flex items-center my-2">
                            <i className="fa-solid fa-location-crosshairs text-orange-500 mr-2"></i>
                            <p>{eventLocation}</p>
                        </div>
                    </div>
                    <GoBtn btnText="Read More" btnPath={`about-event/${eventId}`} />
                </div>
            </div>
        
        </>
    )
}