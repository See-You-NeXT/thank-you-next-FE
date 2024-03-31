import React, { useEffect, useState } from 'react';
import { GoPlusCircle } from "react-icons/go";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import styles from './UploadImg.module.css';

function UploadImg({onFilesChange}) {
    const disabledColor = 'rgb(220,220,220)';

    let [selectedFiles, setSelectedFiles] = useState([]);
    let [selectedPageIndex, setSelectedPageIndex] = useState(0);

    useEffect(()=>{
        onFilesChange(selectedFiles)
    }, [selectedFiles])

    const handleSelectingPicBoxClick = () => {
        const fileInput = document.getElementById('fileInput');
        fileInput.click();
    };
    
    const handleFileInputChange = (e) => {
        const files = Array.from(e.target.files);
        const remainingSlots = 10 - selectedFiles.length;

        if (files.length <= remainingSlots) {
        setSelectedFiles([...selectedFiles, ...files]);
        } else {
        setSelectedFiles([...selectedFiles, ...files.slice(0, remainingSlots)]);
        }
    };

    const handleLeftArrowClick = () => {
        setSelectedPageIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };
    
    const handleRightArrowClick = () => {
        if (selectedPageIndex < Math.ceil(selectedFiles.length / 3) - 1) {
            setSelectedPageIndex((prevIndex) => prevIndex + 1);
        }
    };

    const renderMedia = (file, index) => {
        const isImage = file.type.startsWith('image/');
        const isVideo = file.type.startsWith('video/');

        if (isImage) {
            return (
                <img
                    key={index}
                    src={URL.createObjectURL(file)}
                    alt={`Selected ${index + 1}`}
                    className={styles.media}
                />
            );
        } else if (isVideo) {
            return (
                <video key={index} width="100%" height="100%" controls className={styles.media}>
                    <source src={URL.createObjectURL(file)} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            );
        } else {
            return null; // 이미지 또는 동영상이 아닌 경우 아무것도 표시하지 않음
        }
    };

    const getPageFiles = () => {
        const startIndex = selectedPageIndex * 3;
        const endIndex = startIndex + 3;
        return selectedFiles.slice(startIndex, endIndex);
    };

    const deletePic = (index) => {
        const confirmDelete = window.confirm("이미지를 삭제하시겠습니까?");
        if (confirmDelete) {
            setSelectedFiles((prevFiles) => {
                const newFiles = [...prevFiles];
                newFiles.splice(selectedPageIndex * 3 + index, 1);
                return newFiles;
            });
        }
    }

    return (
        <div className={styles.upload}>
            <div className={styles.uploadFileTitle}>사진/동영상 업로드</div>
            <div className={styles.uploadFileContent}>
                사진/동영상 업로드는 최대 10개까지 가능합니다.
            </div>

            <div className={styles.uploadImgArea}>
                <div className={styles.selectingPicBox}
                    onClick={handleSelectingPicBoxClick}>
                    <GoPlusCircle size={30}/>
                </div>
                <input
                    type="file"
                    id="fileInput"
                    accept="image/*, video/*"
                    multiple
                    style={{ display: 'none' }}
                    onChange={handleFileInputChange}
                />

                <div className={styles.selectedPicArea}>
                    <div className={styles.leftArrow} onClick={handleLeftArrowClick} 
                        style={{cursor: selectedPageIndex === 0 ? 'default' : 'pointer' }}>
                        {
                            selectedPageIndex === 0 ? 
                            <FaAngleLeft style={{color:disabledColor}} size={35}/> : <FaAngleLeft size={35}/>
                        }
                    </div>
                    <div className={styles.selectedPicBoxContainer}>
                        {getPageFiles().map((file, index) => (
                            <div className={styles.selectedPicBox} key={index} onClick={() => deletePic(index)}>
                                {renderMedia(file, index)}
                            </div>
                        ))}
                        {[...Array(3 - getPageFiles().length)].map((_, index) => (
                            <div className={styles.selectedPicBox} key={index}></div>
                        ))}
                    </div>
                    <div className={styles.rightArrow} onClick={handleRightArrowClick}
                        style={{ cursor: (selectedPageIndex === Math.ceil(selectedFiles.length / 3) - 1 || selectedFiles.length === 0) ? 'default' : 'pointer' }}>
                        {
                            selectedPageIndex === Math.ceil(selectedFiles.length / 3) - 1 || selectedFiles.length === 0 ? 
                            <FaAngleRight style={{color:disabledColor}} size={35}/> : <FaAngleRight size={35}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UploadImg;