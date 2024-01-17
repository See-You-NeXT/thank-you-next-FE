import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

import styles from './GalleryInfo.module.css';

import dataGalleryInfo from '../dataGalleryInfo';
import dataGalleryInfoComment from '../dataGalleryInfoComment';

function GalleryInfo() {

    //갤러리 기능
    const disabledColor = 'rgb(220,220,220)';
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftArrowClick = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return prevIndex;
            }
            return (prevIndex - 1 + dataGalleryInfo[0].images.length) % dataGalleryInfo[0].images.length;
        });
    };

    const handleRightArrowClick = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === dataGalleryInfo[0].images.length - 1) {
                return prevIndex;
            }
            return (prevIndex + 1) % dataGalleryInfo[0].images.length;
        });
    };

    const currentData = dataGalleryInfo[0];

    //좋아요 기능
    const likeColor = 'rgb(233, 35, 41)';

    let [like, setLike] = useState(false);
    let [likeNum, setLikeNum] = useState(0);

    const handleLikeBtn = () => {
        setLike(!like);
        like ? setLikeNum(likeNum - 1) : setLikeNum(likeNum + 1);
    }

    //댓글 작성 기능
    const [textAreaValue, setTextAreaValue] = useState('');
    const [comment, setComment] = useState(dataGalleryInfoComment);

    const handleWriteComment = () => {
        if (textAreaValue.trim() === '') {
            alert('댓글 내용을 입력하세요.');
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
        <div className={styles.galleryInfoArea}>
            <div className={styles.galleryFilesArea}>
                <div className={styles.galleryFilesImgArea}>
                    <div className={styles.leftArrow} onClick={handleLeftArrowClick}>
                        <FaAngleLeft size={50} style={{ cursor: currentIndex === 0 ? 'default' : 'pointer', color: currentIndex === 0 ? disabledColor : 'rgb(80, 80, 80)' }} />
                    </div>

                    <div className={styles.galleryFilesImg}>
                        <img src={currentData.images[currentIndex]} alt={`Slide`} />
                    </div>

                    <div className={styles.rightArrow} onClick={handleRightArrowClick}>
                        <FaAngleRight size={50} style={{ cursor: currentIndex === dataGalleryInfo[0].images.length - 1 ? 'default' : 'pointer', color: currentIndex === dataGalleryInfo[0].images.length - 1 ? disabledColor : 'rgb(80, 80, 80)' }} />
                    </div>
                </div>

                <div className={styles.galleryFilesInfoArea}>
                    <div className={styles.galleryInfoContent}>
                        <div className={styles.galleryInfoTitle}>{currentData.title}</div>
                        <div className={styles.galleryInfoSub}>
                            <div className={styles.galleryInfoName}>{currentData.name}</div>
                            <div className={styles.galleryInfoDot}><LuDot /></div>
                            <div className={styles.galleryInfoDate}>{currentData.date}</div>
                        </div>
                    </div>
                    <div className={styles.galleryInfoLike}>
                        <div className={styles.likeBtn} onClick={handleLikeBtn}>
                            {
                                like ? <FaHeart size={30} style={{color:likeColor}}/> : <FaRegHeart size={30}/>
                            }
                        </div>
                        <div className={styles.likeNum}>
                            {likeNum}
                        </div>
                    </div>
                </div>

                <div className={styles.galleryCommentArea}>
                    <div className={styles.galleryCommentWrap}>
                        <div className={styles.galleryCommentTitleArea}>
                            <div className={styles.commentIcon}>
                                <FaRegCommentDots size={30}/>
                            </div>
                            <div className={styles.galleryCommentTitle}>
                                댓글
                            </div>
                            <div className={styles.galleryCommentNum}>
                                1
                            </div>
                        </div>

                        <div className={styles.writeGalleryCommentArea}>
                            <div className={styles.galleryCommentMyProfile}>
                                <img src='/developerImg/kcs.png' />
                            </div>
                            <div className={styles.galleryCommentBoxArea}>
                                <textarea 
                                    placeholder='댓글을 입력하세요'
                                    id='comment'
                                    className={styles.galleryCommentBox} 
                                    value={textAreaValue}
                                    onChange={(e) => setTextAreaValue(e.target.value)}
                                />
                            </div>
                            <div className={styles.writeGalleryCommentBtn} onClick={handleWriteComment}
                                style={{ cursor: textAreaValue.trim() === '' ? 'default' : 'pointer', color: textAreaValue.trim() === '' ? 'rgb(160, 160, 160)' : 'rgb(80, 80, 80)' }}>
                                <HiOutlinePaperAirplane size={35}/>
                            </div>
                        </div>
                           
                        
                        {
                            comment.map((item,i)=>{
                                return(
                                    <div className={styles.galleryWrittenCommentArea}>
                                        <WrittenComment key={item.id} comment={item}/>
                                    </div>
                                )
                            })    
                        }
                        
                    </div>

                </div>
            </div>
        </div>
    );
}

function WrittenComment(props){
    return(
        <div className={styles.galleryWrittenComment}>
            <div className={styles.galleryWrittenCommentUserInfoArea}>
                <div className={styles.galleryWrittenCommentProfile}>
                    <img src={props.comment.img}/>
                </div>
                <div className={styles.galleryWrittenCommentName}>
                    {props.comment.name}
                </div>
                <div className={styles.galleryWrittenCommentTime}>
                    {props.comment.date}
                </div>
                <div className={styles.galleryWrittenCommenComOfCom}>
                    답글
                </div>
            </div>
            <div className={styles.galleryWrittenCommentContent}>
                {props.comment.content}
            </div>
        </div>
    );
}

export default GalleryInfo;
