import { useState } from "react";

import styles from './MyWrittenContentList.module.css';

import dataMyPost from '../dataMyPost';

function MyWrittenContentList() {
    //게시판 선택 기능
    let [notice, setNotice] = useState(true);
    let [question, setQuestion] = useState(false);
    let [free, setFree] = useState(false);

    const handleNoticeClick = () => {
        notice ? setNotice(notice) : setNotice(!notice);
        setQuestion(false);
        setFree(false);
    };

    const handleQuestionClick = () => {
        setNotice(false);
        question ? setQuestion(question) : setQuestion(!question);
        setFree(false);
    };

    const handleFreeClick = () => {
        setNotice(false);
        setQuestion(false);
        free ? setFree(free) : setFree(!free);
    };

    return (
        <div className={styles.myWrittenContentList}>
            <div className={styles.selectBoardArea}>
                <div className={styles.selectNoticeBoard} onClick={handleNoticeClick}>
                    공지
                </div>
                <div className={styles.selectQuestionBoard} onClick={handleQuestionClick}>
                    질문
                </div>
                <div className={styles.selectFreeBoard} onClick={handleFreeClick}>
                    자유
                </div>
            </div>
            <div className={styles.writtenContentListArea}>
            {
                dataMyPost.map((item,i)=>{
                    return(
                        <WrittenContentList key={item.id} list={item} />
                    )
                })
            }
            </div>
        </div>
    );
}

function WrittenContentList(props){
    return(
        <div className={styles.writtenContentList}>
            <div className={styles.topArea}>
                <div className={styles.timeToWrite}>
                    {props.list.time}
                </div>
                <div className={styles.controlBtnArea}>
                    <div className={styles.editBtn}>
                        수정
                    </div>
                    <div className={styles.deleteBtn}>
                        삭제
                    </div>
                </div>  
            </div>

            <div className={styles.writtenContentItem}>
                {props.list.title}
            </div>
        </div>
    );
}

export default MyWrittenContentList;