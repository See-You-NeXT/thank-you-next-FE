import React, { useState } from 'react';
import { FaRegCommentDots } from "react-icons/fa";

import styles from './BoardPost.module.css';
import Post from '../components/Post';
import Comment from '../components/Comment';

import dataGalleryInfoComment from '../dataGalleryInfoComment';

function BoardPost() {
    const [comment, setComment] = useState(dataGalleryInfoComment);
  return (
    <div className={styles.boardPostArea}>
        <Post />

        <div className={styles.postCommentArea}>
            <div className={styles.postCommentWrap}>
                <div className={styles.postCommentTitleArea}>
                    <FaRegCommentDots className={styles.commentIcon}/>

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

export default BoardPost;