import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegCommentDots } from "react-icons/fa";

import styles from './BoardPost.module.css';
import Post from '../components/Post';
import Comment from '../components/Comment';
import instance from "../api/Axios";

function getTotalCommentCount(comments) {
    let total = comments.length;
    comments.forEach(comment => {
        total += comment.replies ? comment.replies.length : 0;
    });
    return total;
}

function BoardPost() {
    const { postId } = useParams(); // URL 파라미터에서 postId 가져오기
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchPostAndComments();
    }, [postId]);

    const fetchPostAndComments = async () => {
        try {
            const response = await instance.get(`/api/posts/${postId}`);
            if (response.data.isSuccess) {
                const { postDto, commentDtoList } = response.data.result;
                setPost(postDto);
                setComments(commentDtoList);
            } else {
                console.error('게시글 가져오기 실패:', response.data.message);
            }
        } catch (error) {
            console.error('게시글 가져오기 에러:', error);
        }
    };

    const totalCommentCount = getTotalCommentCount(comments);

    return (
        <div className={styles.boardPostArea}>
            {post && <Post post={post} />}
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
                    <Comment commentData={comments} setCommentData={setComments} />
                </div>
            </div>
        </div>
    );
}

export default BoardPost;