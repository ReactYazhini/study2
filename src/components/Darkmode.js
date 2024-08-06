import React, { useState } from "react";
import LightButton from "../img/dayimg.png";
import DarkButtom from "../img/nightimg.png";

const Darkmode = () => {
    const [theme, setTheme]= useState(localStorage.getItem("theme") ==="dark" ? "dark" : "light")

    const element = document.documentElement;

    React.useEffect (() =>{
        if(theme === "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme","dark");
        }
        else{
            element.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    },[theme]) 

    return (<div className="relative pt-2">
        <img onClick={() => setTheme(theme == "light" ? "dark" : "light")} src={LightButton} className="w-12  right-0  cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 z-10 absolute dark:hidden "/>
        <img  onClick={() => setTheme(theme == "light" ? "dark" : "light")} src={DarkButtom} className="w-12 right-0 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 "/>
        </div>)
}

export default Darkmode