import PropTypes from "prop-types";
SectionTitle.propTypes = {
    title : PropTypes.string.isRequired
}
export default function SectionTitle({title}) {
    return (
        <>
            <h2 className="text-5xl md:text-7xl lg:text-7xl w-[90%] text-center my-5 py-5 font-bold opacity-10">{title}</h2>
        </>
    )
}