import { useEffect, useState } from "react";
import hashData from "../hashData";

import './Hashtag.css';

function Hashtag({onTagsChange}){
    let [hash, setHash] = useState(hashData.map(hash => ({ ...hash, click: false })));  
    
    const handleHashClick = (index) => {
        setHash(prevHash => {
            const newHash = [...prevHash];
            newHash[index].click = !newHash[index].click;
            return newHash;
        });    
    };

    useEffect(() => {
        const selectedTags = hash.filter(tag => tag.click).map(tag => tag.id);
        onTagsChange(selectedTags);
    }, [hash]);

    return(
        <div className="hashtag">
            {hash.map((a, i) => {
                return (
                    <HashItems
                        key={i}
                        hash={hash[i]}
                        onClick={() => handleHashClick(i)}
                    />
                );
            })}
        </div>
    );
}

function HashItems(props){
    return(
        <div
            className={`${props.hash.click ? 'clickHashItems' : 'hashItems'}`}
            onClick={props.onClick}
        >
            {props.hash.name}
        </div>
    )
}

export default Hashtag;