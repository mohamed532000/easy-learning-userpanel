import AOS from "aos";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AnimationsScroll() {
    const  {pathname} = useLocation();
    useEffect(() => {
        AOS.refresh();

    },[pathname])
    return null
}