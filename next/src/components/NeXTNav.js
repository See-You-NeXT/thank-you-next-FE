import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import { FaSortDown } from "react-icons/fa";

import Dropdown from './Dropdown';

import styles from './NeXTNav.module.css';

function NeXTNav({currentPage}) {
    let navigate = useNavigate();
    const [isHovering, setIsHovering] = useState(false);

    const handleMouse = () => {
        setIsHovering(!isHovering);
    };

    const handleIntroduce = () => {
        setIsHovering(!isHovering);
        navigate('/introduce');
    }

    // const handleActivity = () => {
    //     setIsHovering(!isHovering);
    //     navigate('/activity');
    // }

    const handleGallery = () => {
        setIsHovering(!isHovering);
        navigate('/gallery');
    }

    return (
        <div className={styles.neXTNav}>
            <div className={styles.neXTNavTitle}>
                NeXT
            </div>

            <div className={styles.navArrowArea}>
                <FaAngleRight className={styles.neXTNavArrow}/>
            </div>

            <div className={styles.currentPage} onClick={handleMouse}>
                {currentPage}
            </div>

            <div className={styles.navDropDownArrowArea} onClick={handleMouse}>
                <FaSortDown className={styles.navDropDownArrow}/>
            </div>

            <Dropdown visibility={isHovering}>
                <ul className={styles.dropdownUl}>
                    <li className={styles.dropdownLi} onClick={handleIntroduce}>스터디 소개</li>
                    <li className={styles.dropdownLi}>스터디 활동</li>
                    <li className={styles.dropdownLi} onClick={handleGallery}>갤러리</li>
                    
                </ul>
            </Dropdown>

        </div>
    );
}

export default NeXTNav;