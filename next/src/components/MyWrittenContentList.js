import { useState } from "react";
import Pagination from "react-js-pagination";

import styles from './MyWrittenContentList.module.css';

import dataMyPost from '../dataMyPost';

function MyWrittenContentList() {
    //게시판 선택 기능
    const [selectedBoard, setSelectedBoard] = useState('공지');

    const handleBoardClick = (board) => {
        setPage(1);
        setSelectedBoard(board);
    };

    const filteredData = dataMyPost.filter(item => item.board === selectedBoard);

    //페이지네이션
    const [page, setPage] = useState(1);
    const itemsPerPage = 4;

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
    };

    const totalItemsCount = filteredData.length;

    return (
        <div className={styles.myWrittenContentList}>
            <div className={styles.selectBoardArea}>
                <div className={styles.selectNoticeBoard} style={{backgroundColor:selectedBoard == "공지" ? '#ffe6dd' : ''}}
                    onClick={() => handleBoardClick('공지')}>
                    공지
                </div>
                <div className={styles.selectQuestionBoard} style={{backgroundColor:selectedBoard == "질문" ? '#ffe6dd' : ''}}
                    onClick={() => handleBoardClick('질문')}>
                    질문
                </div>
                <div className={styles.selectFreeBoard} style={{backgroundColor:selectedBoard == "자유" ? '#ffe6dd' : ''}}
                    onClick={() => handleBoardClick('자유')}>
                    자유
                </div>
            </div>
            <div className={styles.writtenContentListArea}>
                {filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((item, i) => (
                    <WrittenContentList key={item.id} list={item} />
                ))}
            </div>

            <Pagination
                activePage={page}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={totalItemsCount}
                pageRangeDisplayed={5}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePageChange}
            />
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