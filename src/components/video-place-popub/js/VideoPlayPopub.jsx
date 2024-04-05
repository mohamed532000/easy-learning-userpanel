import propTypes from"prop-types";
VideoPlayPopub.propTypes = {
    src : propTypes.string,
    VideoPlayPopubStatus : propTypes.bool,
    hideVideoPlayFunc : propTypes.func,
}
export default function VideoPlayPopub({src , VideoPlayPopubStatus , hideVideoPlayFunc}) {
    return (
        <>
        
            <div className={`parent-popub fixed w-full h-[100vh] z-[9999] justify-center items-center bg-[#00000059] top-0 left-0 ${VideoPlayPopubStatus ? "flex" : "hidden"} `}>
                <i className="fa-solid fa-xmark absolute top-[50px] right-[50px] text-2xl cursor-pointer hover:border border-gray-200 text-gray-200 transition-all duration-300 px-2" onClick={()=>{
                    hideVideoPlayFunc()
                }}></i>
                <div className="video-place relative w-[90%] md:w-[700px] h-[400px] flex justify-center items-center bg-red-400 rounded-lg overflow-hidden">
                    <video src={src} className="absolute w-full h-full object-contain" autoPlay controls/>
                </div>
            </div>

        </>
    )
}