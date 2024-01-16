import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import styles from './GalleryInfo.module.css';

import dataGalleryInfo from '../dataGalleryInfo';

function GalleryInfo() {
    const disabledColor = 'rgb(220,220,220)';
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftArrowClick = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return prevIndex;
            }
            return (prevIndex - 1 + dataGalleryInfo[0].images.length) % dataGalleryInfo[0].images.length;
        });
    };

    const handleRightArrowClick = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === dataGalleryInfo[0].images.length - 1) {
                return prevIndex;
            }
            return (prevIndex + 1) % dataGalleryInfo[0].images.length;
        });
    };

    const currentData = dataGalleryInfo[0];

    return (
        <div className={styles.galleryInfoArea}>
            <div className={styles.galleryFilesArea}>
                <div className={styles.galleryFilesImgArea}>
                    <div className={styles.leftArrow} onClick={handleLeftArrowClick}>
                        <FaAngleLeft size={35} style={{ cursor: currentIndex === 0 ? 'default' : 'pointer', color: currentIndex === 0 ? disabledColor : 'black' }} />
                    </div>

                    <div className={styles.galleryFilesImg}>
                        <img src={currentData.images[currentIndex]} alt={`Slide`} />
                    </div>

                    <div className={styles.rightArrow} onClick={handleRightArrowClick}>
                        <FaAngleRight size={35} style={{ cursor: currentIndex === dataGalleryInfo[0].images.length - 1 ? 'default' : 'pointer', color: currentIndex === dataGalleryInfo[0].images.length - 1 ? disabledColor : 'black' }} />
                    </div>
                </div>

                <div className={styles.galleryFilesInfoArea}>
                    <div className={styles.galleryInfoTitle}>{currentData.title}</div>
                    <div className={styles.galleryInfoName}>{currentData.name}</div>
                    <div className={styles.galleryInfoDate}>{currentData.date}</div>
                </div>
            </div>
        </div>
    );
}

export default GalleryInfo;
