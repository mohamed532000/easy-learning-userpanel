import "../css/preloader.css"
export default function Preloader(){
    return (
        <>
        <div id="preloader" className="fixed z-[999999999999999] top-0 left-0 w-full h-[100vh] flex justify-center items-center bg-[rgba(30, 30, 30, 0.84)] backdrop-blur-[2px] flex flex-col">
            
            <div id="loader" className="w-[100px] h-[150px] relative rounded-[50%]  before:absolute before:top-[5px] before:left-[5px] before:right-[5px] before:bottom-[5px] before:rounded-[50%] after:absolute after:top-[15px] after:left-[15px] after:right-[15px] after:bottom-[15px] after:rounded-[50%]"></div>
            <h2 className="text-white mt-[20px] tracking-[10px] text-xl">Loading..</h2>
        </div>
        
        </>
    )
}