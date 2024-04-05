import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate, Outlet } from "react-router-dom";

export let ProtectRoutes = () => {
    let userStatus = useSelector(state => state.userStatus);
    let [loggedSucsess , setLoggedSucsess] = useState(false);
    useEffect(() => {
        userStatus === "logged in" ? setLoggedSucsess(true) : setLoggedSucsess(false);
    },[userStatus]);

    return !loggedSucsess ? <Outlet/> : <Navigate to="/" />
}