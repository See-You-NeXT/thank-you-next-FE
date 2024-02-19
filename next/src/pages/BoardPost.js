import React, { useState, useEffect } from 'react';
import { FaRegCommentDots } from "react-icons/fa";

import styles from './BoardPost.module.css';
import Post from '../components/Post';
import Comment from '../components/Comment';

import dataGalleryInfoComment from '../dataGalleryInfoComment';

function getTotalCommentCount(comments) {
    let total = comments.length;

    comments.forEach(comment => {
        total += comment.replies ? comment.replies.length : 0;
    });

    return total;
}

function BoardPost() {
    const [comment, setComment] = useState(dataGalleryInfoComment);
    const [commentNum, setCommentNum] = useState(dataGalleryInfoComment.length);

    useEffect(() => {
        setCommentNum(comment.length);
    }, [comment]);

    const totalCommentCount = getTotalCommentCount(comment);

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
                            {totalCommentCount}
                        </div>
                    </div>

                    <Comment commentData={comment} setCommentData={setComment} />
                </div>
            </div>
            

        </div>
    );
}

export default BoardPost;