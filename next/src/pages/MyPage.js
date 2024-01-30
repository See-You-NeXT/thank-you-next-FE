import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PiNotepadBold } from "react-icons/pi";
import { FaRegCommentDots } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { PiPencilLineBold } from "react-icons/pi";

import styles from './MyPage.module.css';

function MyPage() {
    let navigate = useNavigate();

    return (
        <div className={styles.myPageArea}>
            <div className={styles.myPageProfile}>
                <div className={styles.myPageImg}>
                    <img src='/developerImg/kcs.png' />
                </div>
                <div className={styles.myPageName}>
                    김명지
                </div>
                <div className={styles.myPageClassNum}>
                    6019XXXX
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
                        내가 쓴 댓글
                    </div>
                </div>
                <div className={styles.myProfileArea}>
                    <CgProfile className={styles.icon} onClick={()=>{ navigate('/myProfile') }}/>
                    <div className={styles.myProfileText} onClick={()=>{ navigate('/myProfile') }}>
                        내 프로필
                    </div>
                </div>
                <div className={styles.myInfoEditArea}>
                    <PiPencilLineBold className={styles.icon} onClick={()=>{ navigate('/myInfoPage') }}/>
                    <div className={styles.myInfoEditText} onClick={()=>{ navigate('/myInfoPage') }}>
                        내 정보 수정
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPage;