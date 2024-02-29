import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";

import styles from './WritePost.module.css';

import Hashtag from '../components/Hashtag';
import UploadImg from '../components/UploadImg';

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

    //버튼 경고창
    let navigate = useNavigate();

    const handleCancleBtn = () => {
        const confirmCancle = window.confirm("글 작성을 취소하시겠습니까?");

        if(confirmCancle) {
            navigate(-1);
        }
    };

    const handleUploadBtn = () => {
        const confirmUpload = window.confirm("글을 등록하시겠습니까?");

        if(confirmUpload) {
            navigate(-1); //글등록으로 바꾸기
        }
    };

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

                <div className={styles.uploadFileArea}>
                    <UploadImg />
                </div>    

                {
                    checkbox2 ?
                        <div className={styles.hashtagArea}>
                            <div className={styles.hashtagTitle}>해시태그</div>
                            <div className={styles.hashtag}>
                                <Hashtag />
                            </div>  
                        </div>
                        :
                        <div></div>
                }

                <div className={styles.btnArea}>
                    <div className={styles.cancelBtn} onClick={handleCancleBtn}>취소</div>
                    <div className={styles.uploadBtn} onClick={handleUploadBtn}>등록</div>
                </div>
            </div>
        </div>
    );
}

export default WritePost;