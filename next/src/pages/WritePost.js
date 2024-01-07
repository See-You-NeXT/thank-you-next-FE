import React, { useState } from 'react';
import styles from './WritePost.module.css';
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";

import Hashtag from '../components/Hashtag';

function WritePost() {
    let [checkbox1, setCheckbox1] = useState(false);
    let [checkbox2, setCheckbox2] = useState(false);
    let [checkbox3, setCheckbox3] = useState(false);

    return (
        <div className={styles.writePostArea}>
            <div className={styles.writePostWrap}>
                <div className={styles.writePostTitle}>
                    게시판 글쓰기 ✏️
                </div>

                <ul className={styles.selectBoard}>
                    <li className={styles.boardList} onClick={()=>{setCheckbox1(!checkbox1)}}>
                        <div className={styles.checkboxIcon}>
                            {
                                checkbox1 ? <MdOutlineCheckBox size={25}/> : <MdOutlineCheckBoxOutlineBlank size={25}/>
                            }
                        </div>
                        <div className={styles.boardListText}>
                            공지게시판 
                        </div>
                        
                    </li>
                    <li className={styles.boardList} onClick={()=>{setCheckbox2(!checkbox2)}}>
                        <div className={styles.checkboxIcon}>
                            {
                                checkbox2 ? <MdOutlineCheckBox size={25}/> : <MdOutlineCheckBoxOutlineBlank size={25}/>
                            }
                        </div>
                        <div className={styles.boardListText}>
                            질문게시판 
                        </div>
                    </li>
                    <li className={styles.boardList} onClick={()=>{setCheckbox3(!checkbox3)}}>
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

                <div className={styles.uploadPic}>
                    <div className={styles.uploadPicTitle}>사진 업로드</div>
                    <div className={styles.uploadPicContent}>
                        사진 업로드는 최대 10개까지 가능합니다.
                    </div>
                    <div className={styles.selectPicArea}>
                        <div className={styles.selectingPicBox}>
                            plus
                        </div>
                        <div className={styles.leftArrow}>
                            left
                        </div>
                        <div className={styles.selectedPicBox}>1</div>
                        <div className={styles.selectedPicBox}>2</div>
                        <div className={styles.selectedPicBox}>3</div>
                        <div className={styles.rightArrow}>
                            right
                        </div>
                    </div>
                </div>

                <div className={styles.hashtagArea}>
                    <Hashtag />
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