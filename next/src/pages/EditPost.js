import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";

import styles from './EditPost.module.css';
import dataPost from '../dataPost';

import Hashtag from '../components/Hashtag';
import UploadImg from '../components/UploadImg';

function EditPost() {
    const [selectedBoard, setSelectedBoard] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        setTitle(dataPost[0].title);
        setContent(dataPost[0].content);
        setSelectedBoard(dataPost[0].board);
    }, []);

    //버튼 경고창
    let navigate = useNavigate();

    const handleCancleBtn = () => {
        const confirmCancle = window.confirm("글 수정을 취소하시겠습니까?");

        if(confirmCancle) {
            navigate(-1);
        }
    };

    const handleEditBtn = () => {
        const confirmEdit = window.confirm("글을 수정하시겠습니까?");

        const updatedData = {
            ...dataPost[0],
            board: selectedBoard,
            title: title,
            content: content
        };

        if(confirmEdit) {
            dataPost[0] = updatedData;
        }
        
    };

    return (
        <div className={styles.editPostArea}>
            <div className={styles.editPostWrap}>
                <div className={styles.editPostTitle}>
                    게시판 글수정 ✏️
                </div>

                <ul className={styles.selectBoard}>
                    <li className={styles.boardList}>
                        <div className={styles.checkboxIcon}>
                            {
                                selectedBoard == '공지게시판' ? <MdOutlineCheckBox size={25}/> : <MdOutlineCheckBoxOutlineBlank size={25}/>
                            }
                        </div>
                        <div className={styles.boardListText}>
                            공지게시판 
                        </div>
                        
                    </li>
                    <li className={styles.boardList}>
                        <div className={styles.checkboxIcon}>
                            {
                                selectedBoard == '질문게시판' ? <MdOutlineCheckBox size={25}/> : <MdOutlineCheckBoxOutlineBlank size={25}/>
                            }
                        </div>
                        <div className={styles.boardListText}>
                            질문게시판 
                        </div>
                    </li>
                    <li className={styles.boardList}>
                        <div className={styles.checkboxIcon}>
                            {
                                selectedBoard == '자유게시판' ? <MdOutlineCheckBox size={25} /> : <MdOutlineCheckBoxOutlineBlank size={25}/>
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
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} 
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
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>

                <div className={styles.uploadFileArea}>
                    <UploadImg />
                </div>    

                {
                    selectedBoard == '질문게시판' ?
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
                    <div className={styles.editBtn} onClick={handleEditBtn}>수정</div>
                </div>
            </div>
        </div>
    );
}

export default EditPost;