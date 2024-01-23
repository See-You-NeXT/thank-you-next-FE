import React from 'react';
import { FaAngleLeft } from "react-icons/fa6";

import styles from './Post.module.css';

import dataPost from '../dataPost';
import OnlyQuestionPost from './OnlyQuestionPost';

function Post() {
    const post = dataPost[1];

    return (
        <div className={styles.post}>
            <div className={styles.noticePostTitleArea}>
                <div className={styles.arrowToBack}>
                    <FaAngleLeft size={30}/>
                </div>
                <div className={styles.noticePostTitle}>
                    {post.board}
                </div>
            </div>

            <div className={styles.postTitle}>
                {post.title}
            </div>
            <div className={styles.postInfo}>
                <div className={styles.postName}>
                    {post.name}
                </div>
                <div className={styles.postDate}>
                    {post.date}
                </div>
            </div>
            
            <div className={styles.postContent}>
                {post.content}
            </div>

            {
                post.board =="질문게시판" ? <OnlyQuestionPost /> : <div></div>
            }
        </div>
    );
}

export default Post;