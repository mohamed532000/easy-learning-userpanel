import PropTypes from "prop-types";
import defaultImg from "../../media/images/footer-logo.webp"
Image.PropTypes = {
    src : PropTypes.string,
    alt : PropTypes.string,
    title : PropTypes.string,
    classContent : PropTypes.string,
}
export default function Image({src , alt , title , classContent}) {
    return (
        <img 
        loading="lazy" 
        src={src ? src : defaultImg} 
        alt={alt ? alt : "image"} 
        title={title ? title : "image"} 
        className={classContent ? ` ${classContent}` : ""}
        />
    )
}