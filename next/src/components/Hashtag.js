import { useState } from "react";
import hashData from "../hashData";

import './Hashtag.css';

function Hashtag(){
    let [hash] = useState(hashData);  
    
    return(
        <div className="hashtag">
            {
                hash.map((a,i)=>{
                    return(
                        <HashItems hash={hash[i]} />
                    )
                })
            }
        </div>
    );
}

function HashItems(props){
    let [click, setClick] = useState(false);

    return(
        <div className={`${click ? 'clickHashItems' : 'hashItems'}`}
            onClick={()=>setClick(!click)}>
            {props.hash.name}
        </div>
    )
}

export default Hashtag;