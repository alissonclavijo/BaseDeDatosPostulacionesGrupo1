import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const imagen = require.context("../img/");

function Contact (props){
    useEffect(() => {
        const script = document.createElement("script");
        script.id = "messenger-widget-b";
        script.src = "https://cdn.botpenguin.com/website-bot.js";
        script.defer = true;
        script.innerHTML = "64e5aa90808a5b1dc631ab8d,64e5976a36b0c57c32b9a32b";
        
        // Append the script to the end of the body element
        document.body.appendChild(script);

        // Clean up: Remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return(
        <>
        <Link to="/">
            <button>.</button>
          </Link>
        </>
    )
}

export default Contact;