import React, { useState } from 'react';
import { HiOutlinePaperAirplane, HiPaperAirplane } from "react-icons/hi2";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

import styles from './Comment.module.css';

function Comment({ commentData, setCommentData }) {
    const [textAreaValue, setTextAreaValue] = useState('');
    const [comment, setComment] = useState(commentData);
    const [replyTextAreaValue, setReplyTextAreaValue] = useState('');
    const [replyIndex, setReplyIndex] = useState(null);
    const [isReplying, setIsReplying] = useState(false);

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
                replies: []
            };

            setComment([...comment, newComment]);

            setCommentData([...comment, newComment]);
            setTextAreaValue('');
        }
    };

    const handleWriteReply = (index) => {
        setIsReplying(prevState => !prevState);
        setReplyIndex(index);
    };

    const handleReplySubmit = () => {
        if (replyTextAreaValue.trim() === '') {
            return;
        }

        const updatedComment = [...comment];
        updatedComment[replyIndex].replies = updatedComment[replyIndex].replies || [];

        updatedComment[replyIndex].replies.push({
            id: updatedComment[replyIndex].replies.length + 1,
            name: '사용자',
            date: '현재 날짜 및 시간',
            content: replyTextAreaValue,
            img: '/default-profile-image.png'
        });

        setCommentData(updatedComment);
        setReplyIndex(null);
        setIsReplying(false);
        setReplyTextAreaValue('');
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
                comment.map((item, index) => (
                    <div key={item.id} className={styles.writtenCommentArea}>
                        <WrittenComment comment={item} onReply={() => handleWriteReply(index)} />
                        {replyIndex === index && isReplying &&(
                            <div className={styles.replyTextArea}>
                                <MdOutlineSubdirectoryArrowRight className={styles.replyArrow}/>
                                <textarea 
                                    placeholder='답글을 입력하세요'
                                    id='reply'
                                    className={styles.replyBox} 
                                    value={replyTextAreaValue}
                                    onChange={(e) => setReplyTextAreaValue(e.target.value)}
                                />
                                <HiPaperAirplane className={styles.writeReplyBtn} onClick={handleReplySubmit}
                                    style={{ cursor: replyTextAreaValue.trim() === '' ? 'default' : 'pointer', color: replyTextAreaValue.trim() === '' ? 'rgb(160, 160, 160)' : 'rgb(90, 90, 90)' }}
                                />
                            </div>
                        )}
                        {item.replies && item.replies.map((reply, replyIndex) => (
                            <WrittenReply key={reply.id} comment={reply} />
                        ))}
                    </div>
                ))
            }
            
        </div>
    );
}

function WrittenComment({ comment, onReply }) {
    return (
        <div className={styles.writtenComment}>
            <div className={styles.writtenCommentUserInfoArea}>
                <div className={styles.writtenCommentProfile}>
                    <img src={comment.img}/>
                </div>
                <div className={styles.writtenCommentName}>
                    {comment.name}
                </div>
                <div className={styles.writtenCommentTime}>
                    {comment.date}
                </div>
                <div className={styles.writtenCommentReplyBtn} onClick={onReply}>
                    답글
                </div>
            </div>
            <div className={styles.writtenCommentContent}>
                {comment.content}
            </div>
        </div>
    );
}

function WrittenReply({ comment }) {
    return (
        <div className={styles.writtenReply}>
            <div className={styles.writtenReplyUserInfoArea}>
                <div className={styles.writtenReplyProfile}>
                    <img src={comment.img}/>
                </div>
                <div className={styles.writtenReplyName}>
                    {comment.name}
                </div>
                <div className={styles.writtenReplyTime}>
                    {comment.date}
                </div>
            </div>
            <div className={styles.writtenReplyContent}>
                {comment.content}
            </div>
        </div>
    );
}

export default Comment;
