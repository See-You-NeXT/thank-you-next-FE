import React, { useState } from 'react';
import { HiOutlinePaperAirplane } from "react-icons/hi2";

import styles from './Comment.module.css';

function Comment({ commentData }) {
    const [textAreaValue, setTextAreaValue] = useState('');
    const [comment, setComment] = useState(commentData);

    const handleWriteComment = () => {
        if (textAreaValue.trim() === '') {
            return;
        }

        const userConfirmation = window.confirm('댓글을 등록하시겠습니까?');

        if (userConfirmation) {
            const newComment = {
                id: comment.length + 1,
                name: '사용자',
                date: '현재 날짜 및 시간',
                content: textAreaValue,
                img: '/default-profile-image.png',
            };
    
            setComment([...comment, newComment]);
            setTextAreaValue('');
        }
    };

    return (
        <div className={styles.comment}>
            <div className={styles.writeCommentArea}>
                <div className={styles.commentProfile}>
                    <img src='/developerImg/kcs.png' />
                </div>
                <div className={styles.commentBoxArea}>
                    <textarea 
                        placeholder='댓글을 입력하세요'
                        id='comment'
                        className={styles.commentBox} 
                        value={textAreaValue}
                        onChange={(e) => setTextAreaValue(e.target.value)}
                    />
                </div>
                <div className={styles.writeCommentBtn} onClick={handleWriteComment}
                    style={{ cursor: textAreaValue.trim() === '' ? 'default' : 'pointer', color: textAreaValue.trim() === '' ? 'rgb(160, 160, 160)' : 'rgb(80, 80, 80)' }}>
                    <HiOutlinePaperAirplane size={35}/>
                </div>
            </div>
            {
                comment.map((item,i)=>{
                    return(
                        <div className={styles.writtenCommentArea}>
                            <WrittenComment comment={item}/>
                        </div>
                    )
                })    
            }
        </div>
    );
}

function WrittenComment(props){
    return(
        <div className={styles.writtenComment}>
            <div className={styles.writtenCommentUserInfoArea}>
                <div className={styles.writtenCommentProfile}>
                    <img src={props.comment.img}/>
                </div>
                <div className={styles.writtenCommentName}>
                    {props.comment.name}
                </div>
                <div className={styles.writtenCommentTime}>
                    {props.comment.date}
                </div>
                <div className={styles.writtenCommentReplyBtn}>
                    답글
                </div>
            </div>
            <div className={styles.writtenCommentContent}>
                {props.comment.content}
            </div>
        </div>
    );
}

export default Comment;