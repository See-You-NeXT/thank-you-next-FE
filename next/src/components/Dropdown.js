import React from "react";

function Dropdown(props){
    return(
        <div>
            {props.visibility && props.children}
        </div>
    );
}

export default Dropdown;