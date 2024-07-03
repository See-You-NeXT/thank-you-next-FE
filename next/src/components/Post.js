import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa6";
import styles from './Post.module.css';
import OnlyQuestionPost from './OnlyQuestionPost';

function Post({ post }) {
    let navigate = useNavigate();
    const [presentState, setPresentState] = useState(post.isSolved === 'TRUE');
    const [postType, setPostType] = useState('');

    useEffect(() => {
        if (post.dType === 'NOTICE') setPostType('공지 게시판'); // 공지게시판
        else if (post.dType === 'QUESTION') setPostType('질문 게시판'); // 질문게시판
        else if (post.dType === 'FREE') setPostType('자유 게시판'); // 자유게시판
    }, [post.dType]);

    const handleSolveStateChange = (newSolveState) => {
        setPresentState(newSolveState);
    };

    // 날짜 형식 변환 함수
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        
        if (date.getFullYear() !== now.getFullYear()) {
            return `${date.getFullYear()}.${month}.${day}`;
        } else {
            return `${month}.${day}`;
        }
    };

    return (
        <div className={styles.post}>
            <div className={styles.boardTitleArea}>
                <FaAngleLeft className={styles.arrowToBackIcon} onClick={() => {navigate(-1)}}/>
                <div className={styles.boardTitle}>
                    {postType}
                </div>
            </div>

            <div className={styles.postTitle}>
                {post.title}
            </div>
            <div className={styles.postInfo}>
                <div className={styles.postName}>
                    {/** 이 부분 수정해야 함. postDto에 author 추가되면 수정할 것 */}
                    {/*post.author*/}
                    임시 사용자
                </div>
                <div className={styles.postDate}>
                    {formatDate(post.auditingDto.createdAt)}
                </div>
                {
                    post.dType === "QUESTION" ? <PresentState presentState={presentState}/> : <div></div>
                }
            </div>
            
            <div className={styles.postContent}>
                {post.content}
            </div>

            {
                post.dType === "QUESTION" ? <OnlyQuestionPost onSolveStateChange={handleSolveStateChange}/> : <div></div>
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