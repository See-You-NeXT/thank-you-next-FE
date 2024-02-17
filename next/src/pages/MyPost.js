import React from 'react';
import { PiNotepadBold } from "react-icons/pi";

import styles from './MyPost.module.css';
import MyWrittenPostList from '../components/MyWrittenPostList';

function MyPost() {
    return (
        <div className={styles.myPostArea}>
            <div className={styles.myPostTitleArea}>
                <PiNotepadBold className={styles.icon} />
                <div className={styles.myPostTitle}>
                    작성글 목록
                </div>
            </div>

            <MyWrittenPostList />
        </div>
    );
}

export default MyPost;