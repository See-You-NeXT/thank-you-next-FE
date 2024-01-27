import React from 'react';
import { PiNotepadBold } from "react-icons/pi";
import { FaRegCommentDots } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { PiPencilLineBold } from "react-icons/pi";

import styles from './MyPage.module.css';

function MyPage() {
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
                <div className={styles.myPostIcon}>
                    <PiNotepadBold className={styles.icon}/>
                </div>
                <div className={styles.myPostText}>
                    내가 쓴 글
                </div>
            </div>
            <div className={styles.myCommentArea}>
                <FaRegCommentDots className={styles.icon}/>
                <div className={styles.myCommentText}>
                    내가 쓴 댓글
                </div>
            </div>
            <div className={styles.myProfileArea}>
                <CgProfile className={styles.icon}/>
                <div className={styles.myProfileText}>
                    내 프로필
                </div>
            </div>
            <div className={styles.myInfoEditArea}>
                <PiPencilLineBold className={styles.icon}/>
                <div className={styles.myInfoEditText}>
                    내 정보 수정
                </div>
            </div>
        </div>
    </div>
  );
}

export default MyPage;