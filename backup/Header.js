import React from "react";

function Header({name, title})
{
    return(
        <div style={{background:'yellow', padding:20, width:400}}>
            <h1>{title}</h1>
            <h1>{name}</h1>
            <p>This is header component for POC</p>
        </div>
    )
}

export default Header