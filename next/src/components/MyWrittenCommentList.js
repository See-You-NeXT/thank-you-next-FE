import { useState } from "react";
import Pagination from "react-js-pagination";

import styles from './MyWrittenCommentList.module.css';

import dataMyPost from '../dataMyPost';

function MyWrittenCommentList() {
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
        <div className={styles.myWrittenCommentList}>
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
            {
                totalItemsCount >= 1 ? 
                <div className={styles.writtenCommentListArea}>
                    {filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((item, i) => (
                        <WrittenCommentList key={item.id} list={item} />
                    ))}
                </div>
                :
                <div className={styles.noDataListArea}>
                    {selectedBoard}게시판 작성 댓글이 없습니다.
                </div>
            }
            

            {
                totalItemsCount >= 1 ? 
                <Pagination
                activePage={page}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={totalItemsCount}
                pageRangeDisplayed={5}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePageChange}
                />
                :
                <></>
            }
            
        </div>
    );
}

function WrittenCommentList(props){
    return(
        <div className={styles.writtenCommentList}>
            <div className={styles.topArea}>
                <div className={styles.timeToWrite}>
                    {props.list.time}
                </div>
            </div>

            <div className={styles.writtenCommentItem}>
                {props.list.title}
            </div>
        </div>
    );
}

export default MyWrittenCommentList;