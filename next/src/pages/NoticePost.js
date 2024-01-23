import React, { useState } from 'react';
import { FaAngleLeft } from "react-icons/fa6";
import { FaRegCommentDots } from "react-icons/fa";

import styles from './NoticePost.module.css';
import Post from '../components/Post';
import Comment from '../components/Comment';

import dataGalleryInfoComment from '../dataGalleryInfoComment';

function NoticePost() {
    const [comment, setComment] = useState(dataGalleryInfoComment);
  return (
    <div className={styles.noticePostArea}>
        <div className={styles.noticePostTitleArea}>
            <div className={styles.arrowToBack}>
                <FaAngleLeft size={30}/>
            </div>
            <div className={styles.noticePostTitle}>
                공지게시판
            </div>
        </div>

        <Post />

        <div className={styles.postCommentArea}>
            <div className={styles.postCommentWrap}>
                <div className={styles.postCommentTitleArea}>
                    <div className={styles.commentIcon}>
                        <FaRegCommentDots size={30}/>
                    </div>
                    <div className={styles.postCommentTitle}>
                        댓글
                    </div>
                    <div className={styles.postCommentNum}>
                        {comment.length}
                    </div>
                </div>

                <Comment commentData={comment} />
            </div>
        </div>
        

    </div>
  );
}

export default NoticePost;