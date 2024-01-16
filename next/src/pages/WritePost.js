import React, { useState } from 'react';
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { GoPlusCircle } from "react-icons/go";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import styles from './WritePost.module.css';

import Hashtag from '../components/Hashtag';

function WritePost() {

    //게시판 선택 기능
    let [checkbox1, setCheckbox1] = useState(false);
    let [checkbox2, setCheckbox2] = useState(false);
    let [checkbox3, setCheckbox3] = useState(false);

    const handleCheckbox1Click = () => {
        setCheckbox1(!checkbox1);
        setCheckbox2(false);
        setCheckbox3(false);
    };

    const handleCheckbox2Click = () => {
        setCheckbox1(false);
        setCheckbox2(!checkbox2);
        setCheckbox3(false);
    };

    const handleCheckbox3Click = () => {
        setCheckbox1(false);
        setCheckbox2(false);
        setCheckbox3(!checkbox3);
    };

    //이미지 업로드 기능
    const disabledColor = 'rgb(220,220,220)';

    let [selectedFiles, setSelectedFiles] = useState([]);
    let [selectedPageIndex, setSelectedPageIndex] = useState(0);

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
        <div className={styles.writePostArea}>
            <div className={styles.writePostWrap}>
                <div className={styles.writePostTitle}>
                    게시판 글쓰기 ✏️
                </div>

                <ul className={styles.selectBoard}>
                    <li className={styles.boardList} onClick={handleCheckbox1Click}>
                        <div className={styles.checkboxIcon}>
                            {
                                checkbox1 ? <MdOutlineCheckBox size={25}/> : <MdOutlineCheckBoxOutlineBlank size={25}/>
                            }
                        </div>
                        <div className={styles.boardListText}>
                            공지게시판 
                        </div>
                        
                    </li>
                    <li className={styles.boardList} onClick={handleCheckbox2Click}>
                        <div className={styles.checkboxIcon}>
                            {
                                checkbox2 ? <MdOutlineCheckBox size={25}/> : <MdOutlineCheckBoxOutlineBlank size={25}/>
                            }
                        </div>
                        <div className={styles.boardListText}>
                            질문게시판 
                        </div>
                    </li>
                    <li className={styles.boardList} onClick={handleCheckbox3Click}>
                        <div className={styles.checkboxIcon}>
                            {
                                checkbox3 ? <MdOutlineCheckBox size={25} /> : <MdOutlineCheckBoxOutlineBlank size={25}/>
                            }
                        </div>
                        <div className={styles.boardListText}>
                            자유게시판 
                        </div>
                    </li>
                </ul>

                <div className={styles.titleArea}>
                    <div className={styles.inputText}>
                        제목    
                    </div>
                    <input 
                        placeholder='제목을 입력하세요'
                        id='title'
                        className={styles.inputBox} 
                    />
                </div>

                <div className={styles.contentArea}>
                    <div className={styles.textareaText}>
                        내용    
                    </div>
                    <textarea 
                        placeholder='내용을 입력하세요'
                        id='content'
                        className={styles.textareaBox} 
                    />
                </div>

                <div className={styles.uploadPicArea}>
                    <div className={styles.uploadPicTitle}>사진 업로드</div>
                    <div className={styles.uploadPicContent}>
                        사진 업로드는 최대 10개까지 가능합니다.
                    </div>
                    <div className={styles.selectPicArea}>
                        <div className={styles.selectingPicBox}
                            onClick={handleSelectingPicBoxClick}>
                            <GoPlusCircle size={30}/>
                        </div>
                        <input
                            type="file"
                            id="fileInput"
                            accept="image/*"
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
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt={`Selected ${index + 1}`}
                                    />
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

                <div className={styles.hashtagArea}>
                    <div className={styles.hashtagTitle}>해시태그</div>
                    <div className={styles.hashtag}>
                        <Hashtag />
                    </div>
                    
                </div>

                <div className={styles.btnArea}>
                    <div className={styles.cancelBtn}>취소</div>
                    <div className={styles.uploadBtn}>등록</div>
                </div>
            </div>
        </div>
    );
}

export default WritePost;