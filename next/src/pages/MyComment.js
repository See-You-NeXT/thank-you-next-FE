import React from 'react';
import { FaRegCommentDots } from "react-icons/fa";

import styles from './MyComment.module.css';
import MyWrittenCommentList from '../components/MyWrittenCommentList';

function MyComment() {
    return (
        <div className={styles.myCommentArea}>
            <div className={styles.myCommentTitleArea}>
                <FaRegCommentDots className={styles.icon} />
                <div className={styles.myCommentTitle}>
                    댓글 단 작성글 목록
                </div>
            </div>

            <MyWrittenCommentList />
        </div>
    );
}

export default MyComment