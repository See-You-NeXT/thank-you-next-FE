import React from 'react';
import { FaRegCommentDots } from "react-icons/fa";

import styles from './MyComment.module.css';
import MyWrittenContentList from '../components/MyWrittenContentList';

function MyComment() {
    return (
        <div className={styles.myCommentArea}>
            <div className={styles.myCommentTitleArea}>
                <FaRegCommentDots className={styles.icon} />
                <div className={styles.myCommentTitle}>
                    댓글 단 작성글 목록
                </div>
            </div>

            <MyWrittenContentList />
        </div>
    );
}

export default MyComment