import { useState } from "react";
import hashData from "../hashData";

// import './Hashtag.css';

function Hashtag(){
    let [hash] = useState(hashData);  
    
    return(
        <div className="hashtag">
            
        </div>
    );
}

export default Hashtag;