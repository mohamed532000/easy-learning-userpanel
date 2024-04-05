import "../css/loading-data.css";
export default function LoadingData(){
    return (
        <>
        
        <div className="loading-data relative top-0 left-0 w-full h-[100vh] flex justify-center items-center flex-col">
            <div className="loader w-[70px] h-[110px] relative rounded-[50%]  before:absolute before:top-[5px] before:left-[5px] before:right-[5px] before:bottom-[5px] before:rounded-[50%] after:absolute after:top-[15px] after:left-[15px] after:right-[15px] after:bottom-[15px] after:rounded-[50%]"></div>
            <h2 className="text-black mt-[50px] tracking-[10px] text-xl">Loading data..</h2>
        </div>
        </>
    )
}