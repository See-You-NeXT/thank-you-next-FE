import React from 'react';
import { FaUserCircle } from "react-icons/fa";

import styles from './ManageUsers.module.css';

import dataMyInfo from '../dataMyInfo';

function ManageUsers() {
    let user = dataMyInfo[0];

    return (
    <div className={styles.manageUsersArea}>
        <div className={styles.userTopArea}>
            <div className={styles.userTitleArea}>
                <FaUserCircle className={styles.userIcon}/>
                <div className={styles.userTitle}>
                    {user.name}
                </div>
            </div>
            
            <div className={styles.deleteBtn}>
                삭제
            </div>
        </div>

        <div className={styles.userInfoArea}>
            <div className={styles.basicInfoTitle}>
                회원 기본 정보
            </div>
            <div className={styles.basicInfoContent}>
                <div className={styles.infoTitle}>
                    <div className={styles.titleItems}>이름</div>
                    <div className={styles.titleItems}>학번</div>
                    <div className={styles.titleItems}>이메일</div>
                    <div className={styles.titleItems}>비밀번호</div>
                </div>
                <div className={styles.infoContent}>
                    <div className={styles.contentItems}>{user.name}</div>
                    <div className={styles.contentItems}>{user.classNum}</div>
                    <div className={styles.contentItems}>{user.email}</div>
                    <div className={styles.contentItems}>{user.pw}</div>
                </div>
            </div>  
        </div>

        <div className={styles.userPostArea}>
            <div className={styles.userPost}>
                작성글 관리
            </div>
            <div className={styles.userPostContent}>
                {

                }
            </div>
        </div>

        <div className={styles.userCommentArea}>
            <div className={styles.userComment}>
                작성댓글 관리
            </div>
            <div className={styles.userCommentContent}>
                {

                }
            </div>
        </div>
    </div>
    );
}

export default ManageUsers;