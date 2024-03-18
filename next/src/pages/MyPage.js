import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiNotepadBold } from "react-icons/pi";
import { FaRegCommentDots } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsPersonVcard } from "react-icons/bs";

import styles from './MyPage.module.css';
import dataMyInfo from '../dataMyInfo';

import instance from '../api/Axios';

function MyPage() {
    let navigate = useNavigate();

    let [name, setName] = useState('');
    let [studentId, setStudentId] = useState('');

    async function getUser() {

console.log("?>>>>>>>>>>>",process.env);
console.log("?",process.env.REACT_APP_API_URL);
        try{
            const response = await instance.get('/api/member/profile')
            setName(response.data.result.memberDto.name)
            setStudentId(response.data.result.memberDto.studentId)
        } catch(error){
            console.error();
        }
    }

    useEffect(()=> {
        getUser();
    }, [])

    return (
        <div className={styles.myPageArea}>
            <div className={styles.myPageProfile}>
                <div className={styles.myPageImg}>
                    <img src={dataMyInfo[0].img} />
                </div>
                <div className={styles.myPageName}>
                    {name}
                </div>
                <div className={styles.myPageClassNum}>
                    {studentId}
                </div>
            </div>

            <div className={styles.menuIconsArea}>
                <div className={styles.myPostArea}>
                        <PiNotepadBold className={styles.icon} onClick={()=>{ navigate('/myPost') }}/>
                    <div className={styles.myPostText} onClick={()=>{ navigate('/myPost') }}>
                        내가 쓴 글
                    </div>
                </div>
                <div className={styles.myCommentArea}>
                    <FaRegCommentDots className={styles.icon} onClick={()=>{ navigate('/myComment') }}/>
                    <div className={styles.myCommentText} onClick={()=>{ navigate('/myComment') }}>
                        댓글 단 글
                    </div>
                </div>
                <div className={styles.myProfileArea}>
                    <CgProfile className={styles.icon} onClick={()=>{ navigate('/myProfile') }}/>
                    <div className={styles.myProfileText} onClick={()=>{ navigate('/myProfile') }}>
                        내 프로필
                    </div>
                </div>
                <div className={styles.myInfoEditArea}>
                    <BsPersonVcard className={styles.icon} onClick={()=>{ navigate('/myInfoPage') }}/>
                    <div className={styles.myInfoEditText} onClick={()=>{ navigate('/myInfoPage') }}>
                        내 개인 정보
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPage;