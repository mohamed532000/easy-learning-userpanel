import "../css/addition-product-again-alert.css";
import PropTypes from "prop-types";
AdditionProductAgainAlert.propTypes = {
    status : PropTypes.bool,
}
export default function AdditionProductAgainAlert({status}) {
    return (
        <>
        <div className={`addition-product-again-alert fixed top-[50px] z-[999999] flex flex-col justify-center items-center bg-blue-500 transition-all duration-500 py-2 px-5 ${status ? "right-0 visible opacity-100" : "invisible opacity-0 right-[-100px]"}`}>
            <h2 className="text-white my-[10px]">this product already in cart!</h2>
        </div>
        </>
    )
}