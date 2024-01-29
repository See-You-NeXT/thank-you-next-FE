import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa6";

import styles from './Post.module.css';

import dataPost from '../dataPost';
import OnlyQuestionPost from './OnlyQuestionPost';

function Post() {
    const post = dataPost[1];
    const navigate = useNavigate();

    const [presentState, setPresentState] = useState(false);

    const handleSolveStateChange = (newSolveState) => {
        setPresentState(newSolveState);
    };

    return (
        <div className={styles.post}>
            <div className={styles.boardTitleArea}>
                <FaAngleLeft className={styles.arrowToBackIcon} onClick={()=>{navigate(-1)}}/>
                <div className={styles.boardTitle}>
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
                {
                    post.board =="질문게시판" ? <PresentState presentState={presentState}/> : <div></div>
                }
            </div>
            
            <div className={styles.postContent}>
                {post.content}
            </div>

            {
                post.board =="질문게시판" ? <OnlyQuestionPost onSolveStateChange={handleSolveStateChange}/> : <div></div>
            }

        </div>
    );
}

function PresentState({ presentState }){
    return(
        <div className={styles.presentState}>
            {
                presentState ? 
                <div className={styles.solveText}>해결</div> : <div className={styles.unsolveText}>미해결</div>
            }
        </div>
    );
}

export default Post;