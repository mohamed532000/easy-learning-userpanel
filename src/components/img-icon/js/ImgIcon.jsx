import PropTypes from "prop-types";
ImgIcon.propTypes = {
    styleClasses : PropTypes.string.isRequired,
    iconImgSrc : PropTypes.string.isRequired
}
export default function ImgIcon({styleClasses , iconImgSrc}){
    return (
        <div className={`p-5 rounded-md flex justify-center items-center bg-slate-400 w-fit ${styleClasses}`}>
            <img loading="lazy"src={iconImgSrc} alt="icon" className="w-[30px] h-[30px]"/>
        </div>
    )
}