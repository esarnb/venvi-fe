import React from 'react';
import "./style.css";

function Container({fluid, children}) {
    return(
        <div id = "container" className ={`container${fluid ? "-fluid" : ""}` } >{children}</div>
    )
}

export default Container;